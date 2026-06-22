"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function PopupCtaForm({
  buttonText = "Get a Quote",
  buttonClass = "primary-btn1",
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleModal = (e) => {
    if (e) e.preventDefault();
    setIsOpen(!isOpen);
  };

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const modalContent = isOpen ? (
    <div className="popup-cta-overlay" onClick={toggleModal}>
      <div
        className="popup-cta-content"
        onClick={(e) => e.stopPropagation()} // Prevent clicking inside modal from closing it
      >
        <div className="popup-cta-header">
          <div>
            <h3>Request a Consultation</h3>
            <p className="mb-0 mt-1 text-muted" style={{ fontSize: "0.85rem" }}>
              Fill out the form below and our team will get back to you shortly.
            </p>
          </div>
          <button
            className="close-btn"
            onClick={toggleModal}
            aria-label="Close"
          >
            <i className="bi bi-x"></i>
          </button>
        </div>

        <div className="popup-cta-body">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Form submitted!");
              toggleModal();
            }}
          >
            <div className="row g-3 mb-3">
              <div className="col-md-6">
                <label className="form-label">First Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="John"
                  required
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Last Name *</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Doe"
                  required
                />
              </div>
            </div>

            <div className="mb-3">
              <label className="form-label">Email Address *</label>
              <input
                type="email"
                className="form-control"
                placeholder="john@company.com"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="mb-4">
              <label className="form-label">How can we help you? *</label>
              <textarea
                className="form-control"
                rows="3"
                placeholder="Please describe your requirements or inquiry..."
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="primary-btn1 w-100 justify-content-center"
              style={{ border: "none" }}
            >
              <span>Submit Request</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  ) : null;

  return (
    <>
      {/* The Trigger Button */}
      <button
        onClick={toggleModal}
        className={buttonClass}
        style={{ border: "none", cursor: "pointer" }}
      >
        <span>{buttonText}</span>
        {/* <span>{buttonText}</span> */}
        <svg className="arrow" width="23" height="23" viewBox="0 0 23 23">
          <g>
            <path d="M0.113861 0H22.9999V4.28425L4.32671 22.9997L0 18.7154L12.7524 6.08815L0.113861 6.20089V0Z" />
            <path d="M23 22.9996V8.56848L16.8516 14.6566V22.9996H23Z" />
          </g>
        </svg>
      </button>

      {/* The Modal Rendered via Portal */}
      {mounted && isOpen && createPortal(modalContent, document.body)}
    </>
  );
}
