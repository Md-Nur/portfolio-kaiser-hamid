import Button from "../basic/Button";
import Card from "@/components/basic/Card";
import { useState } from "react";
import appwriteService from "@/appwrite/config";

const RemoveData = ({ docId, clId }) => {
  const collectionId = clId;
  const documentId = docId;
  const [error, setError] = useState(null);

  const rmData = async (e) => {
    e.preventDefault();
    try {
      await appwriteService.deleteData(collectionId, documentId).then((res) => {
        console.log(res);
        setError(null);
        window.location.reload();
      });
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm btn-error m-1"
        onClick={() => document.getElementById(`remove_${docId}`).showModal()}
      >
        Remove
      </button>
      <dialog
        id={`remove_${docId}`}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h2 className="text-2xl font-bold text-center leading-tight w-full">
            Are you sure to remove this data
          </h2>
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
            </div>
          )}
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-error" onClick={rmData}>
                Remove
              </button>
              <button className="btn mx-1">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

{
  /* <div
      className={`${visibilty} h-screen top-0 bg-gray-700 bg-opacity-70 z-30 left-0 flex flex-col items-center justify-center w-screen px-3 md:px-40`}
    >
      <Card>
        <div className="flex gap-y-4 flex-wrap">
          
          <div className="flex gap-5 justify-evenly w-full">
            
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
    </div> */
}

export default RemoveData;
