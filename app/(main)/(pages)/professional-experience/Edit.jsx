import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";


const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [professionalXp, setProfessionalXp] = useState({
    title: "",
    date: "",
    description: "",
    company: "",
  });

  let collectionId = conf.collections.professionalXp;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setProfessionalXp(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

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
        .updateData(collectionId, updateId, {
          title: professionalXp.title,
          date: professionalXp.date,
          description: professionalXp.description,
          company: professionalXp.company,
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
            Professional Experience Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateProfessionalXp : addProfessionalXp}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={professionalXp.title}
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
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={professionalXp.date}
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
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={professionalXp.description}
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
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={professionalXp.company}
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
                  <Button>
                    {updateId ? (
                      <button onClick={updateProfessionalXp}>Update</button>
                    ) : (
                      <button onClick={addProfessionalXp}>Add</button>
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
