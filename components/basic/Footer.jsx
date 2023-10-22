import { HiMail } from "react-icons/hi";
import { ImLocation2 } from "react-icons/im";
const Footer = () => {
  return (
    <footer className="flex justify-center md:justify-between flex-wrap gap-5 bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-5 sm:px-24 py-5 items-center">
      <div className="text-2xl font-bold">
        Muhammad <br /> Nur
      </div>
      <div className="text-center">
        <p>All right reserved</p>
        <p>© Code & cognition - 2023</p>
      </div>
      <div className="flex flex-col justify-evenly">
        <address className="flex gap-1 items-center">
          {" "}
          <ImLocation2
          className="-mr-1 h-5 w-5 text-color1 dark:text-color4"
          />
          Shaheed Habibur Rahman Hall, RU
        </address>

        <a
          href="mailto:md.nurealamsiddiquee2004@gmail.com"
          className="flex gap-3 items-center"
        >
          <HiMail
            className="-mr-1 h-5 w-5 text-color1 dark:text-color4"
            aria-hidden="true"
          />
          md.nurealamsiddiquee2004@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
