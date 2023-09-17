import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [achievments, setAchievments] = useState({
    date: "",
    descption: "",
    youtubeLink: null,
    posterLink: null,
    type: null,
  });

  let collectionId = conf.achievementsCollectionId;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  const addAchievments = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .createData(collectionId, achievments)
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateAchievement = async (e) => {
    e.preventDefault();
    if (achievments.youtubeLink === "") {
      achievments.youtubeLink = null;
    }
    if (achievments.posterLink === "") {
      achievments.posterLink = null;
    }
    if (achievments.type === "") {
      achievments.type = null;
    }
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          date: achievments.date,
          descption: achievments.descption,
          youtubeLink: achievments.youtubeLink,
          posterLink: achievments.posterLink,
          type: achievments.type,
        })
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    if (updateId) {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setAchievments(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }
    setVisibilty("fixed");
  }, []);

  const handleClose = () => {
    setVisibilty("hidden");
    window.location.reload();
  };

  return (
    //  Create a card for adding latest news
    <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Achievements Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div
            // onSubmit={updateId ? updateAchievement : addAchievments}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={achievments.date}
                    onChange={(e) =>
                      setAchievments((prev) => ({
                        ...prev,
                        date: e.target.value,
                      }))
                    }
                    placeholder="Date"
                    required
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={achievments.descption}
                    onChange={(e) =>
                      setAchievments((prev) => ({
                        ...prev,
                        descption: e.target.value,
                      }))
                    }
                    placeholder="Description"
                    required
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="url"
                    value={achievments.youtubeLink}
                    onChange={(e) =>
                      setAchievments((prev) => ({
                        ...prev,
                        youtubeLink: e.target.value,
                      }))
                    }
                    placeholder="Youtube Link"
                  />

                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="url"
                    value={achievments.posterLink}
                    onChange={(e) =>
                      setAchievments((prev) => ({
                        ...prev,
                        posterLink: e.target.value,
                      }))
                    }
                    placeholder="Poster Link"
                  />
                  <select
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black bg-white"
                    name="type"
                    id=""
                    value={achievments.type}
                    onChange={(e) =>
                      setAchievments((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="award">Award</option>
                    <option value="certification">Certification</option>
                  </select>
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateAchievement}>Update</button>
                    ) : (
                      <button onClick={addAchievments}>Add</button>
                    )}
                  </Button>
                  <Button>
                    <button onClick={handleClose}>Close</button>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Edit;
