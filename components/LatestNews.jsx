import { useState, useEffect } from "react";

import appwriteService from "@/appwrite/config";
const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    let databaseId = "64f798cc47419119ff83";
    let collectionId = "64f7fd3a6a66c55ce7f4";
    let documentId = "64f7fe0b2a16191eda7a";
    appwriteService
      .getAllData(databaseId, collectionId, documentId)
      .then((res) => {
        setLatestNews(res.documents.reverse());
      })

      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <section className="py-5 my-10">
      <h2 className="text-4xl font-bold text-center py-3 my-3">
        Latest News!!
      </h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      <ul className="text-justify list-disc pl-1 flex flex-col gap-5 mt-10">
        {latestNews.map((data) => (
          <li className="flex flex-col gap-2">
            <span className="text-xl font-bold">
              {data.title}
              {data.linksTitle ? (
                <a
                  className="hover:underline font-normal"
                  href={data.linksUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <em> [{data.linksTitle}]</em>
                </a>
              ) : null}
            </span>
            {data.date && <span className="text-sm">{data.date}</span>}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default LatestNews;
