import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [activities, setActivities] = useState({
    date: "",
    "desc-quote": "",
    type: null,
  });

  let collectionId = "64ff687d550f62a435ff";
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setActivities(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const addActivities = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, activities).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateActivities = async (e) => {
    e.preventDefault();
    if (activities.type === "") {
      activities.type = null;
    }
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          date: activities.date,
          "desc-quote": activities["desc-quote"],
          type: activities.type,
        })
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

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
            Activities Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateActivities : addActivities}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={activities.date}
                    onChange={(e) =>
                      setActivities((prev) => ({
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
                    value={activities["desc-quote"]}
                    onChange={(e) =>
                      setActivities((prev) => ({
                        ...prev,
                        "desc-quote": e.target.value,
                      }))
                    }
                    placeholder="Descption / Quote"
                    required
                  />
                  <select
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black bg-white"
                    name="type"
                    id=""
                    value={activities.type}
                    onChange={(e) =>
                      setActivities((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="curricular">Curricular</option>
                    <option value="quote">Quote</option>
                  </select>
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateActivities}>Update</button>
                    ) : (
                      <button onClick={addActivities}>Add</button>
                    )}
                  </Button>
                  <Button>
                    <button onClick={handleClose}>Close</button>
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

export default Edit;
