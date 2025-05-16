import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Navbar({ img, title = 'Jay Mataji' }) {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <motion.nav
        className="navbar navbar-expand-lg shadow-sm"
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          background: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        }}
      >
        <div className="container-fluid">
          {/* Clickable Logo */}
          <button
            onClick={() => setShowModal(true)}
            className="navbar-brand d-flex align-items-center gap-2 border-0 bg-transparent p-0 m-0"
            style={{ cursor: 'pointer' }}
          >
            <div
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '8px',
                padding: '4px 8px',
                boxShadow: '0 0 8px rgba(0,0,0,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '50px',
              }}
            >
              <img
                src={img}
                alt="Logo"
                style={{ height: '100%', width: 'auto', objectFit: 'contain' }}
              />
            </div>

            <span
              className="fw-bold d-none d-md-inline"
              style={{
                fontFamily: 'Poppins, cursive',
                fontSize: '1.3rem',
                color: '#ffffff',
              }}
            >
              {title}
            </span>
          </button>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {[
                { path: '/', label: 'About' },
                { path: '/Portfolio', label: 'Portfolio' },
              ].map((item) => (
                <li className="nav-item" key={item.path}>
                  <Link
                    to={item.path}
                    className={`nav-link px-3 ${location.pathname === item.path ? 'active fw-semibold' : ''
                      }`}
                    style={{
                      transition: 'all 0.3s ease',
                      color: location.pathname === item.path ? '#ffffff' : '#ccc',
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.nav>

      {/* Modal for Full Image View */}
      {showModal && (
        <div
          className="modal fade show"
          style={{
            display: 'block',
            backgroundColor: 'rgba(0,0,0,0.6)',
          }}
          tabIndex="-1"
          onClick={() => setShowModal(false)}
        >
          <div
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Logo Preview</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body text-center">
                <img
                  src={img}
                  alt="Full Logo"
                  style={{ maxWidth: '100%', height: 'auto' }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Navbar.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string,
};
