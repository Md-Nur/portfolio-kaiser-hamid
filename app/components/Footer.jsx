import { DevicePhoneMobileIcon, EnvelopeIcon } from "@heroicons/react/20/solid";

const Footer = () => {
  return (
    <footer className="flex justify-between flex-wrap bg-color3 dark:bg-color2 text-color1 dark:text-color4 px-24 py-5 items-center">
      <div className="text-2xl font-bold">
        Kaiser <br /> Hamid
      </div>
      <div className="text-center">
        <p>All right reserved</p>
        <p>© Kaiser Hamid - 2023</p>
      </div>
      <div className="flex flex-col justify-evenly">
        <a href="tel:+8801865581190" className="flex gap-1">
          {" "}
          <DevicePhoneMobileIcon
            className="-mr-1 h-5 w-5 text-color2 dark:text-color4"
            aria-hidden="true"
          />
          +880 1865-581190
        </a>

        <a
          href="mailto:kaiserhamid715@gmail.com"
          className="flex gap-3 items-center"
        >
          <EnvelopeIcon
            className="-mr-1 h-5 w-5 text-color2 dark:text-color4"
            aria-hidden="true"
          />
          kaiserhamid715@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
