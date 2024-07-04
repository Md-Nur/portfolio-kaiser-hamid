import { HiMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
import logo from "@/public/logo.png";
import Image from "next/image";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-neutral text-neutral-content p-10">
      <aside className="felx flex-col items-center">
        <Image
          src={logo}
          alt="logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <address className="flex gap-1 items-center">
          <ImLocation2 className="h-5 w-5" />
          Shaheed Habibur Rahman Hall, RU
        </address>
        <a
          href="mailto:md.nurealamsiddiquee2004@gmail.com"
          className="flex gap-3 items-center"
        >
          <HiMail className="h-5 w-5" aria-hidden="true" />
          md.nurealamsiddiquee2004@gmail.com
        </a>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a href="https://www.facebook.com/Md.Nur9211" target="_blank">
            <FaFacebook className="text-4xl transition duration-300 ease-in-out" />
          </a>
          <a href="https://twitter.com/MdNur9211" target="_blank">
            <FaTwitter className="text-4xl transition duration-300 ease-in-out" />
          </a>
          <a href="https://linkedin.com/in/mdnur9211/" target="_blank">
            <FaLinkedin className="text-4xl transition duration-300 ease-in-out" />
          </a>
          <a href="https://github.com/Md-Nur" target="_blank">
            <FaGithub className="text-4xl transition duration-300 ease-in-out" />
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;

