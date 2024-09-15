import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaPinterestP } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";

const Footer = () => {
  const logo =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726242815/YumZone-logo_icss3r.png";
  const playappstore =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726242853/google-app-store_zwf6wn.png";
  const mail = 
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726353967/email_rsabrm.png"
  const phone =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726354266/phone_itqvzv.png"
  const location =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726354330/location_jqhhn6.png"

  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-primaryColor bg-opacity-5 py-8 p-11">
        <div className="bg-green-100 px-11 py-4 mx-auto max-w-[85rem] rounded-lg shadow-md flex items-center gap-11">
          <div className="flex flex-col items-start text-center">
            <img className="h-12 mb-4 drop-shadow-lg" src={logo} alt="Company Logo" />
            <p className="text-lg font-semibold mb-4">
              Subscribe to our newsletter for the latest updates
            </p>
            <form className="flex flex-row items-center gap-2 mb-4">
              <input
                className="w-[300px] h-9 p-2 rounded-xl border border-gray-300 drop-shadow-md"
                type="email"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
              />
              <button
                type="submit"
                className="bg-primaryColor w-[100px] text-white p-1 rounded-xl focus:outline-none focus:ring-2 focus:ring-primaryColor-dark"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mb-4">
              <a href=""><FaInstagram className="text-2xl cursor-pointer text-primaryColor" /></a>
              <a href=""><FaXTwitter className="text-2xl cursor-pointer text-primaryColor" /></a>
              <a href=""><FaFacebookF className="text-2xl cursor-pointer text-primaryColor" /></a>
              <a href=""><FaTiktok className="text-2xl cursor-pointer text-primaryColor" /></a>
              <a href=""><FaLinkedinIn className="text-2xl cursor-pointer text-primaryColor" /></a>
              <a href=""><FaPinterestP className="text-2xl cursor-pointer text-primaryColor" /></a>
            </div>
            <div className="flex gap-4">
              <img
                className="h-12"
                src={playappstore}
                alt="Download on the App Store"
              />
            </div>
          </div>

          {/* Footer Section */}
          <div className=" flex items-center">
            <div className="gap-11">
              <ul className="leading-loose">
                <li className="font-medium hover:ease-in-out duration-100 hover:text-primaryColor"><a href="">Become a Store Owner</a></li>
                <li className="font-medium hover:ease-in-out duration-100 hover:text-primaryColor"><a href="">Become a Delivery Man</a></li>
                <li className="font-medium hover:ease-in-out duration-100 hover:text-primaryColor"><a href="">Help & Support</a></li>
                <li className="font-medium hover:ease-in-out duration-100 hover:text-primaryColor"><a href="">Privacy Policy</a></li>
                <li className="font-medium hover:ease-in-out duration-100 hover:text-primaryColor"><a href="">Terms & Condition</a></li>
              </ul>
            </div>
            <div className="flex px-7 gap-6">
              <div className="flex flex-col items-center">
                <img className="h-16 " src={mail} alt="" />
                <h5 className="text-lg font-bold">Write Us</h5>
                <p>yumzonesupport@gmail.com</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="h-14 mb-2" src={phone} alt="" />
                <h5 className="text-lg font-bold">Contact Us</h5>
                <p>+234-456-65-765-76</p>
              </div>
              <div className="flex flex-col items-center">
                <img className="h-16 " src={location} alt="" />
                <h5 className="text-lg font-bold">Our Location</h5>
                <p>230 HM Way Yaba, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="bg-primaryColor bg-opacity-35 h-16 flex items-center justify-center">
        <p className="text-center text-black text-lg font-medium">
          © 2024 YumZone. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
