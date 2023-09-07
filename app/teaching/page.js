import MainContainer from "@/components/basic/MainContainer";
import Card from "@/components/basic/Card";
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
    <MainContainer>
      <div className="py-10 flex flex-col items-center gap-3">
        <h1 className="text-3xl sm:text-4xl font-bold my-5">
          Teaching Experience
        </h1>
        <div className="flex flex-col gap-3">
          {teachingData.map((data) => (
            <Card key={data}>
              <div className="flex flex-wrap my-5 justify-between gap-3">
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
    </MainContainer>
  );
};

export default page;
