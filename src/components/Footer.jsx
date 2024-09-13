import { FaInstagram } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";

const Footer = () => {
  const logo =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726242815/YumZone-logo_icss3r.png";
  const playappstore =
    "https://res.cloudinary.com/dyverjdll/image/upload/v1726242853/google-app-store_zwf6wn.png";

  return (
    <div>
      {/* Newsletter Section */}
      <div className="bg-primaryColor bg-opacity-5 py-8 p-11">
        <div className="bg-green-100 px-11 py-4 mx-auto max-w-[85rem] rounded-lg shadow-md flex items-center gap-11">
          <div className="flex flex-col items-start text-center">
            <img className="h-12 mb-4" src={logo} alt="Company Logo" />
            <p className="text-lg font-semibold mb-4">
              Subscribe to our newsletter for the latest updates
            </p>
            <form className="flex flex-row items-center gap-2 mb-4">
              <input
                className="w-[300px] h-9 p-2 rounded-xl border border-gray-300"
                type="email"
                placeholder="Your Email Address"
                aria-label="Your Email Address"
              />
              <button
                type="submit"
                className="bg-primaryColor w-[100px] text-white p-1 rounded-xl hover:bg-primaryColor-dark focus:outline-none focus:ring-2 focus:ring-primaryColor-dark"
              >
                Subscribe
              </button>
            </form>
            <div className="flex gap-4 mb-4">
              <FaInstagram className="text-2xl cursor-pointer" />
              <FaFacebook className="text-2xl cursor-pointer" />
              <FaXTwitter className="text-2xl cursor-pointer" />
              <FaLinkedin className="text-2xl cursor-pointer" />
              <FaPinterest className="text-2xl cursor-pointer" />
            </div>
            <div className="flex gap-4">
              <img
                className="h-12"
                src={playappstore}
                alt="Download on the App Store"
              />
            </div>
          </div>
          <div className=" flex bg-green-100 items-center">
            <div>
              <ul className="leading-loose">
                <li><a href="">Become a Store Owner</a></li>
                <li><a href="">Become a Delivery Man</a></li>
                <li><a href="">Help & Support</a></li>
                <li><a href="">Privacy Policy</a></li>
                <li><a href="">Terms & Condition</a></li>
              </ul>
            </div>
            <div className="flex px-10 gap-6">
              <div className="flex flex-col items-center">
                <IoMdMail className="text-2xl" aria-label="Mail"/>
                <h5 className="text-lg font-bold">Write Us</h5>
                <p>yumzonesupport@gmail.com</p>
              </div>
              <div>
                <IoCall className="text-2xl" aria-label="Call"/>
                <h5 className="text-lg font-bold">Contact Us</h5>
                <p>+234-456-65-765-76</p>
              </div>
              <div>
                <FaMagnifyingGlassLocation className="text-2xl" aria-label="Location"/>
                <h5 className="text-lg font-bold">Our Location</h5>
                <p>230 HM way Yaba, Lagos</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-primaryColor bg-opacity-35 h-16 flex items-center justify-center">
        <p className="text-center text-black text-lg">
          © 2024 YumZone. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
