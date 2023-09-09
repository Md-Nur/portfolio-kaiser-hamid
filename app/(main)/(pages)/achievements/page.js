import { GiTrophy } from "react-icons/gi";

let achievementData = {
  awards: [
    {
      date: "May 2022",
      descption:
        "Fatima Fellowship: I was selected in the top 10% of 700 applicants from all over the world to work as a research intern at Harvard University.",
    },
    {
      date: "2022",
      descption: "Selected for Part-time Research Assistant at SPARRSO",
    },
    {
      date: "2022",
      descption:
        "Placed in top 30 of University Grants Commission(UGC)'s Mujib 100 Ideas Contest (Hackathon)",
    },
    {
      date: "2021",
      descption: "Got Dean’s List Award in 7th and 8th semesters",
    },
    {
      date: "2021",
      descption:
        "Champion, Poster Presentation Competition, University Day 2020, RUET",
      youtubeLink: "https://www.youtube.com/watch?v=GcZv4N4CA9U",
      posterLink:
        "https://www.dropbox.com/s/t0ho450p97y1koy/Presentation.pdf?dl=0",
    },
    {
      date: "2019",
      descption:
        "Runner Up, Innovative Project Idea Contest, University Day 2019, KUET",
    },
    {
      date: "2014",
      descption:
        "Vocational Board Scholarship by Govt. Bangladesh for outstanding performance in SSC",
    },
    {
      date: "2011",
      descption:
        "Vocational Board Scholarship by Govt. Bangladesh for outstanding performance in JSC",
    },
  ],
  certifications: [
    {
      date: "2020",
      descption:
        "Certification for participating in Innovative Project Idea Contest, University Day 2020, RUET",
      youtubeLink: "https://www.youtube.com/watch?v=wGSHx8cNBMw",
    },
    {
      date: "2013",
      descption:
        "Certification for participating in Bangladesh Physics Olympiad",
    },
    {
      date: "2012",
      descption: "Certification for participating in Bangladesh Math Olympiad",
    },
  ],
};
const page = () => {
  return (
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-full">
          <h2 className="text-3xl mt-20 font-bold">Achievements & Awards</h2>
          <div className="flex flex-col justify-center w-full mt-5">
            {achievementData.awards.map((award, index) => (
              <div
                key={index}
                className="flex flex-wrap items-baseline gap-1 m-2"
              >
                <GiTrophy />
                <h3 className="text-xl font-bold md:text-lg lg:text-xl">
                  [{award.date}]
                </h3>
                <p className="text-sm px-5 md:text-base lg:text-lg">
                  {award.descption}
                </p>
                {award.youtubeLink ? (
                  <a
                    href={award.youtubeLink}
                    target="_blank"
                    className="text-sm text-center md:text-base lg:text-lg   hover:underline"
                  >
                    [Youtube Link]
                  </a>
                ) : null}
                {award.posterLink ? (
                  <a
                    href={award.posterLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-center md:text-base lg:text-lg   hover:underline"
                  >
                    [Poster Link]
                  </a>
                ) : null}
              </div>
            ))}
          </div>
          <h2 className="text-3xl mt-20 font-bold">Certifications</h2>
          <div className="flex flex-col w-full mt-5">
            {achievementData.certifications.map((certification, index) => (
              <div
                key={index}
                className="flex flex-wrap items-baseline gap-1 m-2"
              >
                <GiTrophy />
                <h3 className="text-xl font-bold md:text-lg lg:text-xl">
                  [{certification.date}]
                </h3>
                <p className="text-sm px-5 md:text-base lg:text-lg">
                  {certification.descption}
                </p>
                {certification.youtubeLink ? (
                  <a
                    href={certification.youtubeLink}
                    target="_blank"
                    className="text-sm text-center md:text-base lg:text-lg   hover:underline"
                  >
                    [Youtube Link]
                  </a>
                ) : null}
              </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default page;
