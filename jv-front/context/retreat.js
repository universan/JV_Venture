"use client";
import { createContext, useState, useEffect, useContext } from "react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import Resizer from "react-image-file-resizer";

export const RetreatContext = createContext();

export const RetreatProvider = ({ children }) => {
  // State
  const [retreat, setRetreat] = useState(null);
  const [retreats, setRetreats] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [updatingRetreat, setUpdatingRetreat] = useState(null);
  const [uploading, setUploading] = useState(false);
  // image preview modal
  const [showImagePreviewModal, setShowImagePreviewModal] = useState(false);
  const [currentImagePreviewUrl, setCurrentImagePreviewUrl] = useState("");
  // rating system
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [comment, setComment] = useState("");
  // brands
  const [brands, setBrands] = useState([]);
  // text based search
  const [RetreatSearchQuery, setRetreatSearchQuery] = useState("");
  const [RetreatSearchResults, setRetreatSearchResults] = useState([]);

  const router = useRouter();

  useEffect(() => {
    // close modal on clicks on the page
    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };

    function handleClickOutside(event) {
      if (event.target.classList.contains("modal")) {
        closeModal();
      }
    }
  }, []);

  const openImagePreviewModal = (url) => {
    setCurrentImagePreviewUrl(url);
    setShowImagePreviewModal(true);
  };

  const closeModal = () => {
    setShowImagePreviewModal(false);
    setCurrentImagePreviewUrl("");
    setShowRatingModal(false);
  };

  const uploadImages = (e) => {
    const files = e.target.files;

    let allUploadedFiles = updatingRetreat
      ? updatingRetreat?.images || []
      : retreat
      ? retreat?.images || []
      : [];

    if (files) {
      // check if the total combined images exceed 4
      const totalImages = allUploadedFiles?.length + files?.length;
      if (totalImages > 10) {
        toast.error("You can upload maximum 10 images");
        return;
      }

      setUploading(true);
      const uploadPromises = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        const promise = new Promise((resolve) => {
          Resizer.imageFileResizer(
            file,
            1280,
            720,
            "JPEG",
            100,
            0,
            (uri) => {
              fetch(`${process.env.API}/admin/upload/image`, {
                method: "POST",
                body: JSON.stringify({ image: uri }),
              })
                .then((response) => response.json())
                .then((data) => {
                  allUploadedFiles.unshift(data);
                  resolve();
                })
                .catch((err) => {
                  console.log("image upload err => ", err);
                  resolve();
                });
            },
            "base64"
          );
        });
        uploadPromises.push(promise);
      }

      Promise.all(uploadPromises)
        .then(() => {
          updatingRetreat
            ? setUpdatingRetreat({
                ...updatingRetreat,
                images: allUploadedFiles,
              })
            : setRetreat({ ...retreat, images: allUploadedFiles });
          setUploading(false);
        })
        .catch((err) => {
          console.log("image upload err => ", err);
          setUploading(false);
        });
    }
  };

  const deleteImage = (public_id) => {
    setUploading(true);
    fetch(`${process.env.API}/admin/upload/image`, {
      method: "PUT",
      body: JSON.stringify({ public_id }),
    })
      .then((response) => response.json())
      .then((data) => {
        const filteredImages = updatingRetreat
          ? updatingRetreat?.images?.filter(
              (image) => image?.public_id !== public_id
            )
          : retreat?.images?.filter((image) => image?.public_id !== public_id);

        updatingRetreat
          ? setUpdatingRetreat({ ...updatingRetreat, images: filteredImages })
          : setRetreat({ ...retreat, images: filteredImages });
      })
      .catch((err) => {
        console.log("image delete err => ", err);
      })
      .finally(() => setUploading(false));
  };

  const createRetreat = async () => {
    try {
      const response = await fetch(`${process.env.API}/admin/retreat`, {
        method: "POST",
        body: JSON.stringify(retreat),
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data.err);
      } else {
        toast.success(`Retreat "${data?.title}" created`);
        // router.push("/dashboard/admin/Retreat");
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchRetreats = async (page = 1) => {
    try {
      const response = await fetch(`${process.env.API}/retreat?page=${page}`, {
        method: "GET",
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.err);
      } else {
        setRetreats(data?.retreats);
        setCurrentPage(data?.currentPage);
        setTotalPages(data?.totalPages);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const fetchBrands = async () => {
    try {
      const response = await fetch(`${process.env.API}/retreat/brands`, {
        method: "GET",
      });

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.err);
      } else {
        setBrands(data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const updateRetreat = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/retreat/${updatingRetreat?._id}`,
        {
          method: "PUT",
          body: JSON.stringify(updatingRetreat),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.err);
      } else {
        toast.success(`Retreat "${data?.title}" updated`);
        // router.back();
        window.location.href = "/admin/retreats";
      }
    } catch (err) {
      console.log(err);
    }
  };

  const deleteRetreat = async () => {
    try {
      const response = await fetch(
        `${process.env.API}/admin/retreat/${updatingRetreat?._id}`,
        {
          method: "DELETE",
        }
      );

      const data = await response.json();

      if (!response.ok) {
        toast.error(data?.err);
      } else {
        toast.success(`Retreat "${data?.title}" deleted`);
        // router.back();
        window.location.reload();
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <RetreatContext.Provider
      value={{
        retreat,
        setRetreat,
        retreats,
        setRetreats,
        currentPage,
        setCurrentPage,
        totalPages,
        setTotalPages,
        updatingRetreat,
        setUpdatingRetreat,
        uploading,
        setUploading,
        uploadImages,
        deleteImage,
        createRetreat,
        fetchRetreats,
        updateRetreat,
        deleteRetreat,
        showImagePreviewModal,
        setShowImagePreviewModal,
        currentImagePreviewUrl,
        setCurrentImagePreviewUrl,
        openImagePreviewModal,
        closeModal,
        showRatingModal,
        setShowRatingModal,
        currentRating,
        setCurrentRating,
      }}
    >
      {children}
    </RetreatContext.Provider>
  );
};

export const useRetreat = () => useContext(RetreatContext);
