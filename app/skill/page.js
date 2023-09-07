import Card from "@/components/basic/Card";
import MainContainer from "@/components/basic/MainContainer";

let skillData = [
  [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/512px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/512px-Unofficial_JavaScript_logo_2.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/512px-React.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/512px-Git_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/512px-Postgresql_elephant.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/512px-Sass_Logo_Color.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/512px-Visual_Studio_Code_1.35_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/512px-Git_icon.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/1200px-C_Programming_Language.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/512px-ISO_C%2B%2B_Logo.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/512px-Python-logo-notext.svg.png",
  ],
  {
    "Programing Languages": ["C", "C++", "Python", "Java", "JavaScript"],
    "Web Development": ["HTML", "CSS", "React", "Node.js", "Express.js"],
    Database: ["MongoDB", "PostgreSQL", "SQLite"],
    Expert: ["HTML", "CSS", "React", "Node.js", "Express.js"],
    Intermediate: ["MongoDB", "PostgreSQL", "SQLite"],
    Beginner: ["Sass", "VS Code", "Git"],
    Software: ["Adobe Photoshop", "Adobe Illustrator", "Adobe XD"],
    Others: ["Sass", "VS Code", "Git"],
  },
  ["Bangla", "English", "Hindi", "Arabic", "Korean", "Spanish"],
];

const page = () => {
  return (
    <MainContainer>
      <section className="py-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-center md:text-4xl lg:text-5xl">
          Skills
        </h1>
        <div className="flex flex-wrap justify-center items-baseline w-full mt-5">
          {skillData[0].map((skill, index) => (
            <div key={index}>
              <img src={skill} alt="skill" className="h-16 m-2" />
            </div>
          ))}
        </div>
        <h2 className="text-3xl mt-20 font-bold">Technical Skills</h2>
        <div className="flex flex-wrap justify-center items-center w-full mt-5">
          {Object.keys(skillData[1]).map((skill, index) => (
            <Card key={index}>
              <div className="flex flex-col items-center justify-center min-h-[200px]">
                <h1 className="text-xl font-bold text-center md:text-lg lg:text-xl">
                  {skill}
                </h1>
                <ul className="list-disc w-full px-5 mt-5">
                  {skillData[1][skill].map((skill, index) => (
                    <div key={index}>
                      <li className="">{skill}</li>
                    </div>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
        <h2 className="text-3xl mt-20 font-bold">Language Skills</h2>
        <ul className="w-full my-5 justify-center list-disc flex gap-10 flex-wrap">
          {skillData[2].map((skill, index) => (
            <li key={index}>
              <span className="text-sm font-bold text-center md:text-base lg:text-lg">
                {skill}
              </span>
            </li>
          ))}
        </ul>
      </section>
    </MainContainer>
  );
};

export default page;
