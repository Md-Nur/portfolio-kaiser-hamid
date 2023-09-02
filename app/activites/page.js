import { SiTodoist } from "react-icons/si";

let activitesData = {
  extraCurricular: [
    {
      date: "May 2022",
      descption: "Worked as a member of Badhon, BUET Branch.",
    },
    {
      date: "2022",
      descption:
        "Working as the Vice President of ABSB People which is a non-profit community organization.",
    },
    {
      date: "2022",
      descption:
        "Participated in reviewing and creating digital content for the National ICT books as a team member of CSE, BUET.",
    },
    {
      date: "2021",
      descption: "Actively worked as an organizer of BUET CSE FEST 2018, 2019.",
    },
  ],
  quotes: [
    "If You Can not Do Great Things, Do Small Things In A Great Way",
    "Never be afraid to fail in life, because it's an opportunity to rebuild yourself",
  ],
};
const page = () => {
  return (
    <section className="mx-3 py-10 lg:mx-auto md:w-[95vw] lg:w-[90vw] xl:w-[85vw] 2xl:w-[80vw] flex flex-col items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full">
        <h2 className="text-3xl mt-20 font-bold">
          Extra-Curricular Activities
        </h2>
        <div className="flex flex-col justify-center w-full mt-5">
          {activitesData.extraCurricular.map((award, index) => (
            <div
              key={index}
              className="flex flex-wrap items-baseline gap-1 my-2"
            >
              <SiTodoist />
              <h3 className="text-sm  md:text-base lg:text-lg">
                {award.date} -
              </h3>
              <p className="text-sm md:text-base lg:text-lg">
                {award.descption}
              </p>
            </div>
          ))}
        </div>
        <h2 className="text-3xl mt-20 font-bold">My Quote</h2>
        <ul className="flex flex-col w-full my-5 p-5 list-disc">
          {activitesData.quotes.map((quote, index) => (
            <li key={index} className="my-1">
              <strong>{quote}</strong>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default page;
