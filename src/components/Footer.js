import Image from "next/image";
import logo from "../../public/logo-white.svg";
import facebook from "../../public/icon-facebook.svg";
import twitter from "../../public/icon-twitter.svg";
import pinterest from "../../public/icon-pinterest.svg";
import instagram from "../../public/icon-instagram.svg";


const Footer = () => {
  return (
    <footer className="bg-veryDarkViolet flex justify-center items-center text-center flex-col md:flex-row py-16 md:gap-16">
      <div className="md:self-start">
        <Image src={logo} className="pb-10" />
      </div>
      <div className="md:flex md:gap-10">
        <ul className="flex flex-col gap-5 mb-10 md:text-left md:justify-center md:gap-2">
          <li><h3 className="text-white font-bold text-md">Features</h3></li>
          <li className="text-grayishViolet ">Link Shortening</li>
          <li className="text-grayishViolet ">Branded Links</li>
          <li className="text-grayishViolet ">Analytics</li>
        </ul>
        <ul className="flex flex-col gap-5 mb-10 md:text-left md:justify-center md:gap-2">
          <li><h3 className="text-white font-bold text-md">Resources</h3></li>
          <li className="text-grayishViolet ">Blog</li>
          <li className="text-grayishViolet ">Developers</li>
          <li className="text-grayishViolet ">Support</li>
        </ul>
        <ul className="flex flex-col gap-5 mb-10 md:text-left md:justify-center md:gap-2">
          <li><h3 className="text-white font-bold text-md">Company</h3></li>
          <li className="text-grayishViolet ">About</li>
          <li className="text-grayishViolet ">Our Team</li>
          <li className="text-grayishViolet ">Careers</li>
          <li className="text-grayishViolet ">Contact</li>
        </ul>
      </div>
      <div className="flex gap-7 md:self-start">
        <Image src={facebook} />
        <Image src={twitter} />
        <Image src={pinterest} />
        <Image src={instagram} />
      </div>
    </footer>
  );
};

export default Footer;
