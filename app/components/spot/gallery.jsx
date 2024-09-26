"use client";

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import Image from "next/image"; // Import Image from next/image
import { RxCross2 } from "react-icons/rx";

const Gallery = ({ place }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState("");
  const [modalStyle, setModalStyle] = useState({});

  const openModal = (imageSrc) => {
    const img = new window.Image();
    img.src = imageSrc;
    img.onload = () => {
      const maxHeight = window.innerHeight * 0.9; // 90% of viewport height
      const maxWidth = window.innerWidth * 0.9; // 90% of viewport width
      const ratio = img.width / img.height;
      const width = Math.min(maxWidth, img.width);
      const height = width / ratio;

      setModalStyle({
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          width: `${width}px`,
          height: `${height}px`,
          overflow: "hidden",
        },
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
      });

      setCurrentImage(imageSrc);
      setModalIsOpen(true);
    };
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 ">
        {place.gallery.map((image, index) => (
          <div className="relative h-64" key={index}>
            {/* Replace img tag with Image */}
            <Image
              src={image.url}
              alt={`Gallery image ${index + 1}`}
              layout="fill" // Adjust according to your requirement (fill or fixed)
              className="cursor-pointer object-cover opacity-90 dark:opacity-80"
              onClick={() => openModal(image.url)}
            />
            <div className="absolute -bottom-1 left-0 text-slate-100 uppercase opacity-95 font-extralight p-2 text-sm">
              {image.title || ""}
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={modalStyle}
      >
        <Image
          src={currentImage}
          alt="Enlarged view"
          layout="fill"
          className="object-cover"
        />
        <button
          onClick={closeModal}
          style={{ position: "absolute", top: 25, right: 25, color: "#fff" }}
        >
          <RxCross2 />
        </button>
      </Modal>
    </div>
  );
};

export default Gallery;