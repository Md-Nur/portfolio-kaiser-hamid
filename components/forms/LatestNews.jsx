import { useState } from "react";
import appwriteService from "@/appwrite/config";
import Button from "../basic/Button";

const LatestNews = () => {
  const [latestNews, setLatestNews] = useState({
    title: "",
    date: "",
    linksTitle: "",
    linksUrl: "",
  });
  const [error, setError] = useState(null);
  const addLatestNews = async (e) => {
    let databaseId = "64f798cc47419119ff83";
    let collectionId = "64f7fd3a6a66c55ce7f4";

    e.preventDefault();
    try {
      await appwriteService
        .createData(databaseId, collectionId, latestNews)
        .then((res) => {
          setLatestNews({
            title: null,
            date: null,
            linksTitle: null,
            linksUrl: null,
          });
          document.getElementById("title").value = "";
          document.getElementById("date").value = "";
          document.getElementById("linksTitle").value = "";
          document.getElementById("linksUrl").value = "";
        })
        .then(() => {
          alert("Latest News Added");
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    //  Create a card for adding latest news
    <div className="bg-color3 dark:bg-color2 my-16 rounded-xl px-8 py-8 w-full flex gap-y-4 flex-wrap">
      <h2 className="text-2xl font-bold text-center leading-tight w-full">
        Latest News Section
      </h2>
      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
          <strong className="font-bold">Error!</strong>
          <span className="block sm:inline"> {error}</span>
        </div>
      )}
      <form onSubmit={addLatestNews} className="w-full">
        <div className="space-y-5">
          <div>
            <div className="mt-2 space-y-5">
              <input
                className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                type="text"
                id="title"
                value={latestNews.title}
                onChange={(e) =>
                  setLatestNews((prev) => ({
                    ...prev,
                    title: e.target.value,
                  }))
                }
                placeholder="Title"
                required
              />

              <input
                className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                type="text"
                id="date"
                value={latestNews.date}
                onChange={(e) =>
                  setLatestNews((prev) => ({ ...prev, date: e.target.value }))
                }
                placeholder="Date"
              />

              <input
                className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                type="text"
                id="linksTitle"
                value={latestNews.linksTitle}
                onChange={(e) =>
                  setLatestNews((prev) => ({
                    ...prev,
                    linksTitle: e.target.value,
                  }))
                }
                placeholder="Links Title"
              />

              <input
                className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                type="text"
                id="linksUrl"
                value={latestNews.linksUrl}
                onChange={(e) =>
                  setLatestNews((prev) => ({
                    ...prev,
                    linksUrl: e.target.value,
                  }))
                }
                placeholder="Links Url"
              />
            </div>

            <div className="flex items-center flex-wrap justify-evenly space-x-3">
              <Button type="submit">Add</Button>
              <Button type="reset"> Clear</Button>
              <Button>View</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LatestNews;
