import { useState } from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";

const Edit = ({ data }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [achievments, setAchievments] = useState(data);

  const collectionId = conf.collections.achievements;

  const [error, setError] = useState(null);

  const addAchievments = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, achievments).then(() => {
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateAchievement = async (e) => {
    e.preventDefault();
    if (!achievments) return setError("No data to update");
    if (!achievments?.youtubeLink) {
      delete achievments.youtubeLink;
    }
    delete achievments.$id;
    delete achievments.$databaseId;
    delete achievments.$collectionId;

    try {
      await appwriteService
        .updateData(collectionId, data.$id, achievments)
        .then(() => {
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-info btn-sm"
        onClick={() =>
          document.getElementById(`achivement-${data?.$id}`).showModal()
        }
      >
        {data ? "Update" : "Add"}
      </button>
      <dialog id={`achivement-${data?.$id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
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
            <form method="action" className="w-full space-y-5">
              <div className="mt-2 space-y-5">
                <input
                  className="flex h-10 w-full rounded-md px-3 py-2  "
                  type="text"
                  value={achievments?.date}
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
                  className="flex h-10 w-full rounded-md px-3 py-2  "
                  type="text"
                  value={achievments?.descption}
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
                  className="flex h-10 w-full rounded-md px-3 py-2  "
                  type="url"
                  value={achievments?.youtubeLink}
                  onChange={(e) =>
                    setAchievments((prev) => ({
                      ...prev,
                      youtubeLink: e.target.value,
                    }))
                  }
                  placeholder="Youtube Link"
                />

                <input
                  className="flex h-10 w-full rounded-md px-3 py-2  "
                  type="url"
                  value={achievments?.posterLink}
                  onChange={(e) =>
                    setAchievments((prev) => ({
                      ...prev,
                      posterLink: e.target.value,
                    }))
                  }
                  placeholder="Poster Link"
                />
                <select
                  className="flex h-10 w-full rounded-md px-3 py-2   bg-white"
                  name="type"
                  id=""
                  value={achievments?.type}
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
                {data ? (
                  <button className="btn btn-info" onClick={updateAchievement}>
                    Update
                  </button>
                ) : (
                  <button className="btn btn-accent" onClick={addAchievments}>
                    Add
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
export default Edit;
