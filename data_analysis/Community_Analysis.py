import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns
import streamlit as st

# Define a function for filtering the DataFrame based on certain criteria
def filter_df(csv_file, topic, exclusions):
    df = pd.read_csv(csv_file)
    df = df[df['TOPIC'] == topic]
    df['DESCRIPTION'] = df['DESCRIPTION'].str.strip()
    df = df[~df['DESCRIPTION'].isin(exclusions)]
    return df.drop(['TOPIC', 'Unnamed: 2', 'Unnamed: 4'], axis=1).reset_index(drop=True)

# Dashboard setup
st.title('Calgary Community Population Census Dashboard')

# Load and process the main DataFrame
df_1 = pd.read_csv('Historical_Community_Populations_20240203.csv')
df_1 = df_1.drop(['notes'], axis=1)
df_1 = df_1.pivot(index='name', columns='census_year', values='population').fillna(0).reset_index()

# Community selection for line chart
community = st.selectbox('Select a community to view its population trend:', df_1['name'])
if community:
    community_data = df_1[df_1['name'] == community].drop('name', axis=1).T
    community_data.columns = ['Population']
    st.line_chart(community_data)

# Year selection for distribution chart
year = st.selectbox('Select a year:', df_1.columns[1:], index=len(df_1.columns[1:])-1)
if year:
    fig, ax = plt.subplots()
    sns.histplot(df_1[year], ax=ax, kde=True)
    st.pyplot(fig)

# Multi-select for range of years to analyze
years = st.multiselect('Select years for analysis:', options=df_1.columns[1:].tolist(), default=df_1.columns[1:2].tolist())
if years:
    st.write('Summary Statistics for Selected Years')
    st.dataframe(df_1[years].describe())

# Displaying the top 20 communities
most_recent_year = df_1.columns[-1]
top_20_communities = df_1.sort_values(by=most_recent_year, ascending=False).head(20)

# Use columns to organize charts
col1, col2 = st.columns(2)

with col1:
    fig, ax = plt.subplots(figsize=(10, 6))
    for index, row in top_20_communities.iterrows():
        ax.plot(df_1.columns[1:], row[1:], label=row['name'])
    plt.title('Top 20 Communities')
    plt.xlabel('Census Year')
    plt.ylabel('Population')
    plt.xticks(rotation=45)
    plt.legend(loc='upper left', bbox_to_anchor=(1, 1), fontsize='small')
    plt.tight_layout()
    st.pyplot(fig)

with col2:
    # Assuming df_2 and df_3 are processed as per the provided filter_df function
    df_2 = filter_df('CensusProfile2021-ProfilRecensement2021-20240203111036.csv', 'Selected places of birth for the immigrant population', 
                     ['Americas', 'Europe', 'Africa', 'Asia', 'Oceania and other places of birth', 
                      'Total - Place of birth for the immigrant population in private households - 25% sample data',
                      'Other places of birth in Americas', 'Other places of birth in Europe', 
                      'Other places of birth in Africa', 'Other places of birth in Asia'])
    
    fig, ax = plt.subplots(figsize=(10, 6))
    sns.barplot(x='Count', y='DESCRIPTION', data=df_2.sort_values('Count', ascending=False), palette="viridis")
    plt.xlabel('Count')
    plt.ylabel('Country')
    plt.title('Immigrant Population by Country')
    st.pyplot(fig)

# Additional data analysis for df_3
df_3 = filter_df('CensusProfile2021-ProfilRecensement2021-20240203111036.csv', 'Age at immigration', 
                 ['Total - Age at immigration for the immigrant population in private households - 25% sample data'])

# Organizing additional charts below
col3, col4 = st.columns([2, 1])

with col3:
    fig, ax = plt.subplots(figsize=(10, 6))
    sns.barplot(x='DESCRIPTION', y='Count', data=df_3, palette="coolwarm")
    plt.xlabel('Age Group')
    plt.ylabel('Count')
    plt.title('Age at Immigration')
    plt.xticks(rotation=45)
    st.pyplot(fig)

with col4:
    fig, ax = plt.subplots(figsize=(6, 6))
    plt.pie(df_3['Count'], labels=df_3['DESCRIPTION'], autopct='%1.1f%%', colors=sns.color_palette("coolwarm", len(df_3)))
    plt.title('Age Group Distribution')
    st.pyplot(fig)
