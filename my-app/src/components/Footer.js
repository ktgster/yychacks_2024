import React from "react";

function Footer() {
  return (
    <div>
      <footer
            className="text-center text-lg-start text-white bg-gradient-to-t from-black via-black to-transparent mt-20"
      >
   
        <section
                className="d-flex justify-content-between p-4 bg-transparent">
       
          
         
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
               
                <h6 className="text-uppercase fw-bold">Your Perfect Day!</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "transparent", height: "2px"}}
                    />
                <p>
                  Welcome to YYC Winter! Our mission is to provide the best services for you to discover and experience our great city. Please feel free to connect with us.
                </p>
              </div>
             
              {/* <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
                <h6 className="text-uppercase fw-bold">Products</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                    />
                <p>
                  <a href="#!" className="text-white">MDBootstrap</a>
                </p>
                <p>
                  <a href="#!" className="text-white">MDWordPress</a>
                </p>
                <p>
                  <a href="#!" className="text-white">BrandFlow</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Bootstrap Angular</a>
                </p>
              </div> */}
        
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
               
                <h6 className="text-uppercase fw-bold">Useful links</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "#7c4dff", height: "2px"}}
                    />
                <p>
                  <a href="#!" className="text-white">Your Account</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Become a Member</a>
                </p>
                <p>
                  <a href="#!" className="text-white">Help</a>
                </p>
              </div>
             
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              
                <h6 className="text-uppercase fw-bold">Contact</h6>
                <hr
                    className="mb-4 mt-0 d-inline-block mx-auto"
                    style={{width: "60px", backgroundColor: "transparent", height: "2px"}}
                    />
                <p><i className="fas fa-home mr-3"></i> Calgary, Alberta, Canada</p>
                <p><i className="fas fa-envelope mr-3"></i> info@yycwinter.ca</p>
                <p><i className="fas fa-phone mr-3"></i> + 01 234 5678</p>
                <p><i className="fas fa-print mr-3"></i> + 01 234 5678</p>
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
