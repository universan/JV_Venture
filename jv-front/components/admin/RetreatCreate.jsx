"use client";
import { useEffect } from "react";
import { useRetreat } from "@/context/retreat";

export default function RetreatCreate() {
  const {
    retreat,
    setRetreat,
    updatingRetreat,
    setUpdatingRetreat,
    createRetreat,
    updateRetreat,
    deleteRetreat,
    uploading,
    setUploading,
    uploadImages,
    deleteImage,
  } = useRetreat();


  const imagePreviews = updatingRetreat
    ? updatingRetreat?.images ?? []
    : retreat?.images ?? [];

  return (
    <div className="w-3/5 flex flex-col items-center justify-center">
      <p className="text-4xl text-yellow-900 font-bold text-center relative mt-16 dark:text-gray-300">
      {updatingRetreat ? "Update" : "Create"} Retreat
      </p>
      <div class="m-10 mx-auto w-full">
        <div class="mb-5">
            <label for="title" className="mb-3 block text-xl font-medium text-yellow-800">
                Title:
            </label>
            <input
                type="text"
                name="title"
                id="title"
                placeholder="Title"
                value={updatingRetreat ? updatingRetreat?.title : retreat?.title}
                onChange={(e) =>
                updatingRetreat
                    ? setUpdatingRetreat({ ...updatingRetreat, title: e.target.value })
                    : setRetreat({ ...retreat, title: e.target.value })
                }
                className="w-full rounded-md border border-yellow-900 bg-transparent py-3 px-6 text-base font-medium text-yellow-700 outline-none focus:border-[#6A64F1] focus:shadow-md" />
        </div>
        <div class="mb-5">
            <label for="des" className="mb-3 block text-xl font-medium text-yellow-800">
                Description:
            </label>
            <textarea
                id = 'des'
                cols="5"
                className="w-full rounded-md border border-yellow-900 bg-transparent py-3 px-6 text-base font-medium text-yellow-700 outline-none focus:border-[#6A64F1] focus:shadow-md" 
                placeholder="Description"
                value={
                updatingRetreat ? updatingRetreat?.description : retreat?.description
                }
                onChange={(e) =>
                updatingRetreat
                    ? setUpdatingRetreat({
                        ...updatingRetreat,
                        description: e.target.value,
                    })
                    : setRetreat({ ...retreat, description: e.target.value })
                }
            ></textarea>
        </div>
        <div class="mb-5">
            <label for="period" className="mb-3 block text-xl font-medium text-yellow-800">
                Opening period:
            </label>
            <input
                type="text"
                placeholder="Period"
                value={updatingRetreat ? updatingRetreat?.period : retreat?.period}
                onChange={(e) =>
                updatingRetreat
                    ? setUpdatingRetreat({ ...updatingRetreat, period: e.target.value })
                    : setRetreat({ ...retreat, period: e.target.value })
                }
                className="w-full rounded-md border border-yellow-900 bg-transparent py-3 px-6 text-base font-medium text-yellow-700 outline-none focus:border-[#6A64F1] focus:shadow-md"
            />
        </div>
        <div className="form-group mb-5">
            <label
                className={`mb-3 cursor-pointer shadow-inner border border-yellow-800 rounded w-1/5 block text-base text-center font-medium text-yellow-800 ${uploading ? "disabled" : ""}`}
            >
            {uploading ? "Processing" : "Upload Images"}
            <input
                type="file"
                multiple
                hidden
                accept="images/*"
                onChange={uploadImages}
                disabled={uploading}
            />
            </label>
        </div>
        
        <div className="flex">
            {imagePreviews?.map((img) => (
            <div key={img?.public_id}>
                <img
                src={img?.secure_url}
                className="img-thumbnail mx-1 shadow"
                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                />
                <br />
                <div
                    className="text-center cursor-pointer"
                    onClick={() => deleteImage(img?.public_id)}
                >
                    ❌
                </div>
            </div>
            ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center mt-5 px-20 gap-20">
            <button
                className="text-white bg-blue-900 hover:bg-blue-800 
                focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                onClick={() => (updatingRetreat ? updateRetreat() : createRetreat())}
            >
            {updatingRetreat ? "Update" : "Create"}
            </button>

            {updatingRetreat && (
            <>
                <button
                    onClick={() => deleteRetreat()}
                    className="text-white bg-red-900 hover:bg-red-800 
                        focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 focus:outline-none dark:focus:ring-red-800"
                >
                    Delete
                </button>
                <button
                    onClick={() => window.location.reload()}
                    className="text-white bg-green-900 hover:bg-green-800 
                        focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"
                >
                    Clear
                </button>
            </>
            )}
        </div>

       </div>
    </div>
  );
}
