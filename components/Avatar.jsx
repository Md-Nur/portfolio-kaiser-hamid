import Image from "next/image";
const Avatar = ({ width, height, shadowSize }) => (
    <Image
      src="/hero.png"
      alt="Hero"
      width={width}
      height={height}
      className={`${shadowSize} shadow-base-content rounded-full`}
    />
);
export default Avatar;
