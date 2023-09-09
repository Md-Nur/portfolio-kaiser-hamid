import Card from "@/components/basic/Card";

let professionalData = [
  {
    title: "Joined as a Full-Time Software Engineer in IQVIA",
    date: "August, 2021",
    description:
      "I joined IQVIA as a Full-Time Software Engineer. I am working on a project that is based on ReactJS, Redux, and NodeJS.",
    company: "IQVIA",
  },
  {
    title: "Joined as an Adjunct Lecturer in East Delta University",
    date: "August, 2020",
    description:
      "I joined East Delta University as an Adjunct Lecturer. I am teaching the course “Data Structures and Algorithms” to the students of the CSE department.",
    company: "East Delta University",
  },
  {
    title: "Joined as a Research Assistant in the Department of CSE, BUET",
    date: "January, 2020",
    description:
      "I joined the Department of CSE, BUET as a Research Assistant. I am working on a research project that is based on Machine Learning and Deep Learning.",
    company: "BUET",
  },
];
const page = () => {
  return (
      <div className="py-20 flex flex-col items-center gap-3">
        <h1 className="text-4xl font-bold my-5">
          Professional Experience
        </h1>
        <div className="flex flex-col gap-3">
          {professionalData.map((data, index) => (
            <Card>
              <div
                key={index}
                className="flex flex-wrap my-5 justify-between gap-3"
              >
                <h2 className="text-2xl sm:text-3xl font-bold">{data.title}</h2>
                <span className="text-sm px-5 sm:text-lg  ">{data.date}</span>
                <span className="text-sm px-5 sm:text-lg">
                  {data.description}
                </span>
                <span className="text-sm px-5 sm:text-lg  ">
                  {data.company}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
  );
};

export default page;
