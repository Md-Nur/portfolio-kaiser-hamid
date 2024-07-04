import { useState } from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";

const Edit = ({ data }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [professionalXp, setProfessionalXp] = useState(data);

  let collectionId = conf.collections.professionalXp;
  const [error, setError] = useState(null);

  const addProfessionalXp = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .createData(collectionId, professionalXp)
        .then((res) => {
          setVisibilty("hidden");
          window.location.reload();
        });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateProfessionalXp = async (e) => {
    e.preventDefault();
    try {
      await appwriteService
        .updateData(collectionId, data?.$id, {
          title: professionalXp?.title,
          date: professionalXp?.date,
          description: professionalXp?.description,
          company: professionalXp?.company,
        })
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
          document.getElementById(`addUpdate${data?.$id}`).showModal()
        }
      >
        {data ? "Update" : "Add"}
      </button>
      <dialog id={`addUpdate${data?.$id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <div className="flex gap-y-4 flex-wrap">
            <h2 className="text-2xl font-bold text-center leading-tight w-full">
              Professional Experience Section
            </h2>
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
                <strong className="font-bold">Error!</strong>
                <span className="block sm:inline"> {error}</span>
              </div>
            )}
            <form method="action" className="w-full">
              <div className="space-y-5">
                <div>
                  <div className="mt-2 space-y-5">
                    <input
                      className="flex h-10 w-full rounded-md px-3 py-2 "
                      type="text"
                      value={professionalXp?.title}
                      onChange={(e) =>
                        setProfessionalXp((prev) => ({
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
                      value={professionalXp?.date}
                      onChange={(e) =>
                        setProfessionalXp((prev) => ({
                          ...prev,
                          date: e.target.value,
                        }))
                      }
                      placeholder="Time Period"
                      required
                    />
                    <input
                      className="flex h-10 w-full rounded-md px-3 py-2  "
                      type="text"
                      value={professionalXp?.description}
                      onChange={(e) =>
                        setProfessionalXp((prev) => ({
                          ...prev,
                          description: e.target.value,
                        }))
                      }
                      placeholder="Description"
                      required
                    />
                    <input
                      className="flex h-10 w-full rounded-md px-3 py-2  "
                      type="text"
                      value={professionalXp?.company}
                      onChange={(e) =>
                        setProfessionalXp((prev) => ({
                          ...prev,
                          company: e.target.value,
                        }))
                      }
                      placeholder="Company"
                      required
                    />
                  </div>

                  <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                    {data ? (
                      <button
                        className="btn btn-info"
                        onClick={updateProfessionalXp}
                      >
                        Update
                      </button>
                    ) : (
                      <button
                        className="btn btn-accent"
                        onClick={addProfessionalXp}
                      >
                        Add
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default Edit;
