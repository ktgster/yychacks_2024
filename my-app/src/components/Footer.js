import React from "react";
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t} = useTranslation();
  return (
    <div>
      <footer className="text-center text-lg-start text-white bg-gradient-to-t from-black via-black to-transparent mt-20">
        <section className="d-flex justify-content-between p-4 bg-transparent">
          <div className="ml-auto">
            <a href="#!" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-google"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#!" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </section>

        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold">
                  {t('footer.welcome')}
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "transparent",
                    height: "2px",
                  }}
                />
                <p>
                  {t('footer.welcome_text')}
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                <h6 className="text-uppercase fw-bold">
                  {t('footer.useful')}
                </h6>
                <hr
                  className="mb-4 mt-0 d-inline-block mx-auto"
                  style={{
                    width: "60px",
                    backgroundColor: "#7c4dff",
                    height: "2px",
                  }}
                />
                <p>
                  <a href="#!" className="text-white">
                    Partners
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-white">{t('footer.links.account')}</a>
                </p>
                <p>
                  <a href="#!" className="text-white">{t('footer.links.member')}</a>
                </p>
                <p>
                  <a href="#!" className="text-white">{t('footer.links.help')}</a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold">{t('footer.contact.title')}</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "transparent", height: "2px"}}
                    />
                <p><i className="fas fa-home mr-3"></i>{t('footer.contact.city')}</p>
                <p><i className="fas fa-envelope mr-3"></i>{t('footer.contact.email')}</p>
                <p><i className="fas fa-phone mr-3"></i>{t('footer.contact.phone')}</p>
                <p><i className="fas fa-print mr-3"></i>{t('footer.contact.fax')}</p>
              </div>
            </div>
          </div>
        </section>
      <div
           className="text-center p-3"
           style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
           >
            © 2024 Copyright Hosts Welcoming Hearts
      </div>
    </footer>
  </div>
  );
}
export default Footer;
