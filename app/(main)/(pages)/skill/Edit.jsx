import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";

const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [skill, setSkill] = useState({
    name: "",
    type: "",
    icon: null,
  });

  let collectionId = "65017257bc6662f0fd4b";
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setSkill(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const addSkill = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, skill).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateSkill = async (e) => {
    e.preventDefault();
    if (skill.icon === "") {
      skill.icon = null;
    }
    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          name: skill.name,
          type: skill.type,
          icon: skill.icon,
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
            Skill Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateSkill : addSkill}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={skill.name}
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
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black bg-white"
                    name="type"
                    id=""
                    value={skill.type}
                    onChange={(e) =>
                      setSkill((prev) => ({
                        ...prev,
                        type: e.target.value,
                      }))
                    }
                    required
                  >
                    <option value="">Select Type</option>
                    <option value="Programing Languages">Programing Languages</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Database">Database</option>
                    <option value="Expert">Expert</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Beginner">Beginner</option>
                    <option value="Software">Software</option>
                    <option value="Others">Others</option>
                    <option value="Language">Language</option>
                  </select>
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="url"
                    value={skill.icon}
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
                  <Button>
                    {updateId ? (
                      <button onClick={updateSkill}>Update</button>
                    ) : (
                      <button onClick={addSkill}>Add</button>
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
