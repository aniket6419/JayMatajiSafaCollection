import React, { useState } from "react";
import { motion } from "framer-motion";
import img1 from "./images/img1.jpeg";
import img2 from "./images/img2.jpeg";
import img4 from "./images/img4.jpeg";
import img5 from "./images/img5.jpeg";
import img6 from "./images/img6.jpeg";
import img7 from "./images/img7.jpeg";
import img8 from "./images/img8.jpeg";
import img9 from "./images/img9.jpg";
import img10 from "./images/img10.jpg";
import img11 from "./images/img11.jpg";
import img12 from "./images/img12.jpg";
import img13 from "./images/img13.jpg";
import img14 from "./images/img14.jpg";

const images = [img1, img2, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14];

export default function Portfolio(props) {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (img) => {
    setSelectedImage(img);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="container py-5">
      <motion.h1
        className="text-center mb-5"
        style={{ fontFamily: "cursive", fontSize: "2.5rem" }}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {props.heading}
      </motion.h1>

      <div className="row g-4">
        {images.map((img, index) => (
          <motion.div
            className="col-sm-6 col-md-4 col-lg-3"
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="card h-100 shadow border-0 rounded-4 overflow-hidden"
              whileHover={{ scale: 1.03, boxShadow: "0 12px 24px rgba(0,0,0,0.2)" }}
              transition={{ duration: 0.3 }}
              style={{ cursor: "pointer" }}
              onClick={() => openModal(img)}
            >
              <div
                style={{
                  height: "220px",
                  width: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={img}
                  alt={`Portfolio ${index + 1}`}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              {/* <div className="card-body text-center">
                <h5 className="card-title" style={{ fontWeight: 600 }}>
                  Project {index + 1}
                </h5>
              </div> */}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {modalOpen && (
        <div
          onClick={closeModal}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1050,
            cursor: "pointer",
          }}
        >
          <img
            src={selectedImage}
            alt="Full View"
            style={{
              maxHeight: "90vh",
              maxWidth: "90vw",
              boxShadow: "0 4px 20px rgba(0,0,0,0.5)",
              borderRadius: "8px",
              cursor: "auto",
            }}
            onClick={(e) => e.stopPropagation()} // Prevent modal close on image click
          />
        </div>
      )}
    </div>
  );
}

