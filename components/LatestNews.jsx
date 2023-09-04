let latestData = [
  {
    title: "Submitted my first research paper in ICCIT",
    date: "June 2023",
  },
  {
    title:
      "Nominated for “Research Fellowship” from SPARRSO for my research proposal.",
    date: "September, 2022",
    links: {
      name: "my undergrad thesis",
      link: "https://www.sparrso.gov.bd/",
    },
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
const LatestNews = () => {
  return (
    <section className="py-5 my-10">
      <h2 className="text-4xl font-bold text-center py-3 my-3">
        Latest News!!
      </h2>
      <ul className="text-justify list-disc pl-1 flex flex-col gap-5 mt-10">
        {latestData.map((data) => (
          <li className="flex flex-col gap-2">
            <span className="text-xl font-bold">
              {data.title}
              {data.links ? (
                <a
                  className="hover:underline font-normal"
                  href={data.links.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em> [{data.links.name}]</em>
                </a>
              ) : null}
            </span>
            <span className="text-sm">{data.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestNews;
