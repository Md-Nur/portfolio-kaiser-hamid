import { useState, useEffect } from "react";
import appwriteService from "@/appwrite/config";
import Button from "@/components/basic/Button";
import Card from "@/components/basic/Card";
import conf from "@/conf/config";
const Edit = ({ updateId }) => {
  // is update also contains the document id of the latest news which is to be updated.
  const [education, setEducation] = useState({
    title: "",
    institution: "",
    duration: "",
    description: "",
  });

  let collectionId = conf.collections.education;
  const [error, setError] = useState(null);
  const [visibilty, setVisibilty] = useState("fixed");

  if (updateId) {
    useEffect(() => {
      appwriteService
        .readData(collectionId, updateId)
        .then((res) => {
          setEducation(res);
        })
        .catch((error) => {
          setError(error.message);
        });
    }, []);
  }

  const addEducation = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.createData(collectionId, education).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  const updateEducation = async (e) => {
    e.preventDefault();

    try {
      await appwriteService
        .updateData(collectionId, updateId, {
          title: education.title,
          institution: education.institution,
          duration: education.duration,
          description: education.description,
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
            Education Section
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <form
            // onSubmit={updateId ? updateEducation : addEducation}
            className="w-full"
          >
            <div className="space-y-5">
              <div>
                <div className="mt-2 space-y-5">
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={education.title}
                    onChange={(e) =>
                      setEducation((prev) => ({
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
                    value={education.institution}
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        institution: e.target.value,
                      }))
                    }
                    placeholder="Institution"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={education.duration}
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        duration: e.target.value,
                      }))
                    }
                    placeholder="Duration"
                    required
                  />
                  <input
                    className="flex h-10 w-full rounded-md px-3 py-2 text-black"
                    type="text"
                    value={education.description}
                    onChange={(e) =>
                      setEducation((prev) => ({
                        ...prev,
                        description: e.target.value,
                      }))
                    }
                    placeholder="Description"
                  />
                </div>

                <div className="flex items-center flex-wrap justify-evenly p-5 space-x-3">
                  <Button>
                    {updateId ? (
                      <button onClick={updateEducation}>Update</button>
                    ) : (
                      <button onClick={addEducation}>Add</button>
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
