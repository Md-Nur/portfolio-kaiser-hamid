import { useState, useEffect } from "react";
import Button from "@/components/basic/Button";
import appwriteService from "@/appwrite/config";
import LatestNewsForm from "@/components/forms/LatestNewsForm";
import RemoveData from "./forms/RemoveData";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [error, setError] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  let collectionId = "64f7fd3a6a66c55ce7f4";
  const [visibilty, setVisibilty] = useState(false);
  const [updateId, setUpdateId] = useState(""); // updateId variable is used to check if the user wants to update the latest news or add a new one moreover it contains the document id of the latest news which is to be updated.
  const [rmAlert, setRmAlert] = useState(false);
  const [rmDocId, setRmDocId] = useState(""); // rmDocId variable is used to store the document id of the latest news which is to be removed.

  useEffect(() => {
    appwriteService
      .getAllData(collectionId)
      .then((res) => {
        setLatestNews(res.documents.reverse());
      })
      .catch((error) => {
        setError(error.message);
      });

    appwriteService
      .isLoggedIn()
      .then(setLoggedIn)
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  const addData = () => {
    setVisibilty(true);
  };

  const removeData = (docId) => {
    setRmDocId(docId);
    setRmAlert(true);
  };
  
  const updateData = (docId) => {
    setUpdateId(docId);
    setVisibilty(true);
  };
  
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
      {rmAlert && <RemoveData docId={rmDocId} clId={collectionId} />}
      {visibilty && <LatestNewsForm updateId={updateId} />}
      <ul className="text-justify list-disc pl-1 flex flex-col gap-10 mt-10">
        {latestNews.map((data) => (
          <li className="flex flex-col gap-2">
            <span className="text-xl font-bold">
              {/* {data.$id} {" - "} */}
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
            {loggedIn && (
              <div className="space-x-5">
                <button onClick={() => removeData(data.$id)}>
                  <Button>Remove</Button>
                </button>
                <button onClick={() => updateData(data.$id)}>
                  <Button>Update</Button>
                </button>
              </div>
            )}
          </li>
        ))}
      </ul>
      {loggedIn && (
        <button className="mt-16" onClick={addData}>
          <Button>Add a new latest news</Button>
        </button>
      )}
    </section>
  );
};

export default LatestNews;
