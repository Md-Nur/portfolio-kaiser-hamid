import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import conf from "@/conf/config";

const Edit = ({ data }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [skill, setSkill] = useState(data);

  let collectionId = conf.collections.skills;
  const [error, setError] = useState(null);

  const addSkill = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, skill).then((res) => {
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();
    if (!skill?.icon) {
      skill.icon = null;
    }
    try {
      await appwriteService
        .updateData(collectionId, data.$id, {
          name: skill.name,
          type: skill.type,
          icon: skill.icon,
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
          document.getElementById(`skill-${data?.$id}`).showModal()
        }
      >
        {data ? "Update" : "Add"}
      </button>
      <dialog id={`skill-${data?.$id}`} className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Skill Section
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
                value={skill?.name}
                onChange={(e) =>
                  setSkill((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                placeholder="Enter the name of the skill"
                required
              />
              <select
                className="flex h-10 w-full rounded-md px-3 py-2   bg-white"
                name="type"
                id=""
                value={skill?.type}
                onChange={(e) =>
                  setSkill((prev) => ({
                    ...prev,
                    type: e.target.value,
                  }))
                }
                required
              >
                <option value="">Select Type</option>
                <option value="Programing Languages">
                  Programing Languages
                </option>
                <option value="Web Development">Web Development</option>
                <option value="Database">Database</option>
                <option value="Software">Software</option>
                <option value="Others">Others</option>
                <option value="Language">Language</option>
              </select>
              <input
                className="flex h-10 w-full rounded-md px-3 py-2  "
                type="url"
                value={skill?.icon}
                onChange={(e) =>
                  setSkill((prev) => ({
                    ...prev,
                    icon: e.target.value,
                  }))
                }
                placeholder="Enter the icon url"
              />
            </div>

            <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
              {data ? (
                <button className="btn btn-info" onClick={updateSkill}>
                  Update
                </button>
              ) : (
                <button className="btn btn-accent" onClick={addSkill}>
                  Add
                </button>
              )}
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default Edit;
