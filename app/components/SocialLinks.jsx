import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter, FaYoutube } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const SocialLinks = () => {
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 space-y-3 bg-gray-800 p-2 rounded-l-xl z-50 overflow-hidden">
      <a
        href="https://whatsapp.com/channel/0029VaS551C17En02ZJgld1V"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-green-400 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaWhatsapp size={16} />
      </a>
      <a
        href="https://youtube.com/@Nifty-Nitesh?si=f7EmRh97E2KjE5k6"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-red-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaYoutube size={16} />
      </a>
      <a
        href="https://www.instagram.com/nifty_nitesh?igsh=ZzhlbmIwdnc5czBl"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-pink-700 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaInstagram size={16} />
      </a>
      <a
        href=" https://x.com/Niftyniteshk?t=Mak7r-pNH-Z4vcaravqXKw&s=08"
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-black hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <FaXTwitter size={16} />
      </a>
      <a
        href="mailto:niftynitesh000@gmail.com?subject=Hello Nitesh!&body=I am interested in your work."
        target="_blank"
        rel="noopener noreferrer"
        className="block border-2 border-gray-400 text-white rounded-full p-1 hover:bg-red-600 hover:text-gray-100 transition-colors duration-300 ease-in-out"
      >
        <IoIosMail size={16} />
      </a>
    </div>
  );
};

export default SocialLinks;
