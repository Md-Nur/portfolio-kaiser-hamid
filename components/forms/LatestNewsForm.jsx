import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "../basic/Button";
import Card from "@/components/basic/Card";

const LatestNewsForm = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [latestNews, setLatestNews] = useState({
    title: "",
    date: "",
    linksTitle: "",
    linksUrl: "",
  });

  let collectionId = "64f7fd3a6a66c55ce7f4";
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setLatestNews(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const addLatestNews = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, latestNews).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateLatestNews = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          title: latestNews.title,
          date: latestNews.date,
          linksTitle: latestNews.linksTitle,
          linksUrl: latestNews.linksUrl,
        })
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    //  Create a card for adding latest news
    <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Latest News Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateLatestNews : addLatestNews}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
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
                    className="flex h-10 w-full rounded-md px-3 py-2  "
                    type="text"
                    id="date"
                    value={latestNews.date}
                    onChange={(e) =>
                      setLatestNews((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    placeholder="Date"
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2  "
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
                    className="flex h-10 w-full rounded-md px-3 py-2  "
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

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateLatestNews}>Update</button>
                    ) : (
                      <button onClick={addLatestNews}>Add</button>
                    )}
                  </Button>
                  <Button>
                    <button onClick={() => setVisibilty("hidden")}>
                      Close
                    </button>
                  </Button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default LatestNewsForm;
