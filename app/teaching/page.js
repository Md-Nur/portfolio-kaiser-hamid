import React from "react";

let teachingData = [
  {
    title: "Data Structures and Algorithms",
    date: "Spring, 2021",
    description:
      "I taught the course “Data Structures and Algorithms” to the students of the CSE department.",
    company: "East Delta University",
  },
  {
    title: "Civil Engineering Drawing",
    date: "Fall, 2020",
    description:
      "I taught the course “Civil Engineering Drawing” to the students of the Civil department.",
    company: "BRAC University",
  },
  {
    title: "Electrical Circuits and Electronic Device",
    date: "Spring, 2020",
    description:
      "I taught the course “Electrical Circuits” to the students of the CSE department.",
    company: "Daffodil International University",
  },
];
const page = () => {
  return (
    <section
      id="teaching"
      className="m-3 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw]"
    >
      <div className="py-20 flex flex-col items-center gap-3">
        <h1 className="text-3xl sm:text-5xl font-bold my-5">
          Teaching Experience
        </h1>
        <div className="flex flex-col gap-3">
          {teachingData.map((data, index) => (
            <div
              key={index}
              className="flex flex-wrap my-5 justify-between gap-3"
            >
              <h2 className="text-2xl sm:text-4xl font-bold">{data.title}</h2>
              <span className="text-sm px-5 sm:text-lg  ">
                {data.date}
              </span>
              <span className="text-sm px-5 sm:text-lg">
                {data.description}
              </span>
              <span className="text-sm px-5 sm:text-lg  ">
                {data.company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
