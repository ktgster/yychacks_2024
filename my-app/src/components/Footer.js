import React from "react";
// import img from "next/img";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <div className=" flex flex-col bg-gray-500 text-white md:hidden">
        <div className="flex flex-col md:flex-row md:justify-center items-center space-y-2 md:space-x-4">
          <div>
            {/* <img src="/footerlogo.png" width={300} height={200} alt="logo" /> */}
          </div>
          <div className="flex flex-col justify-center items-center">
            {/* <div className="flex flex-row space-x-2">
              <div className="flex flex-row ">
                <BsTelephoneFill color="white" size={20} /> : 403-000-0000
              </div>

              <div className="flex flex-row">
                <MdEmail size={20} />: info@humanmeet.ca
              </div>
            </div> */}
            <div>
              <div className="break-words">300-80 10st NE</div>
              <div> Calgary, AB T1S 2Z1</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center space-y-2">
          <div className="flex flex-row  items-center ">
            <Link href="/">
              <img src="/insta.png" height={25} width={25} alt="insta" />
            </Link>
            <Link href="/">
              <img src="/facebook.png" height={25} width={25} alt="insta" />
            </Link>
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center">
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={"/cookies"}>Cookies Policy</Link>
          </div>
          <div className="flex  font-semibold justify-center items-center">
            &copy; All rights reserved.
          </div>
        </div>
      </div>

      {/* middle screen */}
      <div className="hidden md:flex flex-row justify-center space-x-36 items-center w-12/13 bg-gray-500 text-white ">
        <div className="flex flex-col justify-center items-center space-y-2 space-x-4">
          <div>
            <img src="/footerlogo.png" width={300} height={200} alt="logo" />
          </div>
          {/* <div className="flex flex-row  items-center space-x-2 ">
            <Link href="https://www.instagram.com/ultralightinstallationteam/">
              <img src="/insta.png" height={25} width={25} alt="insta" />
            </Link>
            <Link href="https://www.facebook.com/UltraLightInstallationTeam/">
              <img src="/facebook.png" height={25} width={25} alt="insta" />
            </Link>
          </div> */}
          {/* <div className="flex flex-col justify-center items-center">
            
            
          </div> */}
        </div>
        <div className="flex flex-col justify-start items-center space-y-2">
          <div className="flex flex-col ">
            {/* <div className="flex flex-row items-start ">
              <BsTelephoneFill color="white" size={20} /> : 587-370-8607
            </div>

            <div className="flex flex-row items-start">
              <MdEmail color="white" size={20} />: info@Ultralit.ca
            </div> */}
          </div>
          <div className="flex flex-row space-x-2 items-center justify-center">
            <Link href={"/privacy"}>Privacy Policy</Link>
            <Link href={"/cookies"}>Cookies Policy</Link>
          </div>
        </div>
        <div className="flex flex-col  space-y-2">
          <div>
            <div className="break-words">300-80088 2</div>
            <div> Foothills, 2Z1</div>
          </div>
          <div className="flex  font-semibold justify-center items-center">
            &copy; All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
