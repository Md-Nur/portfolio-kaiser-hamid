import Image from "next/image";
import { EnvelopeIcon } from "@heroicons/react/20/solid";
import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

let latestData = [
  {
    title: "October, 2022: Submitted my first research paper in ICCIT",
    date: "June 2022",
  },
  {
    title:
      "Nominated for “Research Fellowship” from SPARRSO for my research proposal [my undergrad thesis].",
    date: "September, 2022",
  },
  {
    title: "Joined as a Full-Time Software Engineer in IQVIA",
    date: "August, 2021",
  },
  {
    title: "Joined as an Adjunct Lecturer in East Delta University",
    date: "August, 2020",
  },
  {
    title: "Joined as a Research Assistant in the Department of CSE, BUET",
    date: "January, 2020",
  },
];

let aboutMeData =
  "I am an incoming Ph.D. student at Arizona State Univeristy where I will work in the Embedded Machine Intelligence Lab (EMIL). Previously I worked as a Software Engineer in IQVIA (North Carolina-based Clinical Research Industry). Before that, I worked as an Adjunct Lecturer in East Delta University. I received my Bachelors (B.Sc.) in Computer Science and Engineering (CSE) from Bangladesh University of Engineering & Technology (BUET) in May 2022. My research focus is situated in the interdisciplinary field of Human-Computer Interaction, m-Health and Machine Learning and curious to develop systems that can interact with humans to solve daily life mplications. I did my undergraduate thesis in the area of Data mining and Information Systems under the supervision of Dr. Abu Syed Md. Latiful Haque. I have also collaborated with Dr. Md Shohrab Hossain, Dr. A.K.M Ashikur Rahman and Dr. A B M Alim Al Islam to explore different domains of CS. Apart from my academic activities, I enjoy most of my time outdoors. and it's on my bucket list to travel to 10 countries before I turn 40. I like to hangout with my friends and family in my off-time and love to taste new foods whenever I can.";
export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-wrap px-3 justify-around bg-gradient-to-b from-color3 to-color4 dark:from-color2 dark:to-color1 text-color1 dark:text-color4 items-center py-10"
      >
        <div className="pb-20 flex flex-col items-center gap-3">
          <h1 className="text-3xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-color1 to-red-700 dark:from-color4 dark:to-red-300">Kaiser Hamid</h1>
          <em className="text-sm sm:text-2xl">
            Final year undergrad student at{" "}
            <a href="https://www.buet.ac.bd/web/" className=" " target="_blank">
              BUET
            </a>
          </em>
          <p className="text-sm sm:text-xl">
            Pronouns: <span>He/Him/His</span>
          </p>
          <a
            href="mailto:kaiserhamid715@gmail.com"
            className="flex gap-3 items-center text-sm sm:text-xl"
          >
            <EnvelopeIcon
              className="-mr-1 h-6 w-6 text-color2 dark:text-color4"
              aria-hidden="true"
            />
            <span>Email: </span>
            <span className=" ">kaiserhamid715@gmail.com</span>
          </a>

          <a
            href="cv.pdf"
            className="p-3 w-36 rounded-full text-center  bg-color2 dark:bg-color3 text-color4 dark:text-color1 hover:bg-color1 dark:hover:bg-color4 transition duration-300 ease-in-out"
            download
          >
            Download CV
          </a>
          <div className="flex gap-3">
            <a href="https://facbook.com" target="_blank">
              <FaFacebook className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <FaTwitter className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://linkedin.com" target="_blank">
              <FaLinkedin className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://youtube.com" target="_blank">
              <FaYoutube className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
            <a href="https://github.com" target="_blank">
              <FaGithub className="text-3xl text-color1 dark:text-color4 hover:text-color2 dark:hover:text-color3 transition duration-300 ease-in-out" />
            </a>
          </div>
        </div>
        <div className="">
          <Image
            src="/hero.png"
            alt="Picture of the author"
            width={500}
            height={500}
            className="shadow-xl shadow-color2 dark:shadow-color3 rounded-full"
          />
        </div>
      </section>
      <main className="m-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]">
        <section id="about-me" className="py-5 my-10">
          <h2 className="text-4xl font-bold text-center py-3 my-3">About Me</h2>
          <p className="text-justify">{aboutMeData}</p>
        </section>
        
        <section className="py-5 my-10">
          <h2 className="text-4xl font-bold text-center py-3 my-3">
            Latest News!!
          </h2>
          <ul className="text-justify list-disc pl-1 flex flex-col gap-5 mt-10">
            {latestData.map((data) => (
              <li className="flex flex-col gap-2">
                <span className="text-xl font-bold">{data.title}</span>
                <span className="text-sm">{data.date}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  );
}
