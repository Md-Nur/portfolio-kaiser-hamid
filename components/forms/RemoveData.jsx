import Button from "../basic/Button";
import Card from "@/components/basic/Card";
import { useState } from "react";
import appwriteService from "@/appwrite/config";

const RemoveData = ({ docId, clId }) => {
  const collectionId = clId;
  const documentId = docId;
  const [error, setError] = useState(null);

  const [visibilty, setVisibilty] = useState("fixed");
  const rmData = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.deleteData(collectionId, documentId).then((res) => {
        setVisibilty("hidden");
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Are you sure to remove this data
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div className="flex gap-5 justify-evenly w-full">
            <button onClick={rmData}>
              <Button>Remove</Button>
            </button>
            <button
              onClick={() => {
                setVisibilty("hidden"), window.location.reload();
              }}
            >
              <Button>Cancel</Button>
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default RemoveData;
