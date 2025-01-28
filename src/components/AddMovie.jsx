import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function AddMovie(){
    const navigate=useNavigate()
    const handleSubmit=(e)=>{
        e.preventDefault()
        navigate("/")
        alert("movie added successfully")
    }
    const handleCancel=()=>{
        navigate('/')
        alert("Action cancelled")
    }
    return (
        <div>
            <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#ffffff",
          padding: "2rem",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "400px",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1rem", color: "#333" }}>
          Add Movie
        </h2>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Title" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Title
          </label>
          <input
            type="text"
            id="Title"
            name="Title"
            placeholder="Enter the Title"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Director" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
          Director
          </label>
          <input
            type="text"
            id="Director"
            name="Director"
            placeholder="Enter the Director"
            required
            style={{
              width: "100%",
              padding: "0.8rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Genre" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
          Genre
          </label>
          <input
            type="text"
            id="Genre"
            name="Genre"
            placeholder="Enter the Genre"
            required
            style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
          ></input>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="Release year" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
          Release Year
          </label>
          <input
            type="Number"
            id="ReleaseYear"
            name="ReleaseYear"
            placeholder="Enter the Release Year"
            required
            style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
              }}
          ></input>
        </div>
        <div style={{ marginBottom: "1rem" }}>
            <label htmlFor="Synopsis" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
            Synopsis
            </label>
            <textarea
            id="Synopsis"
            name="Synopsis"
            placeholder="Enter the Synopsis"
            required
            style={{
                width: "100%",
                padding: "0.8rem",
                border: "1px solid #ccc",
                borderRadius: "5px",
            }}
            ></textarea>
            <div style={{ marginBottom: "1rem" }}>
              <label htmlFor="Poster Image URL" style={{ display: "block", marginBottom: "0.5rem", color: "#555" }}>
              Poster Image URL
              </label>
              <input
                type="url"
                id="PosterImageURL"
                name="PosterImageURL"
                placeholder="Enter the Poster Image URL"
                required
                style={{
                    width: "100%",
                    padding: "0.8rem",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                  }}
              ></input>
            </div>
        </div>
        <div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Movie
        </button>
        </div>
      </form>
        <div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "0.8rem",
            backgroundColor: "red",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleCancel}
        >
          Cancel
        </button>
        </div>
        </div>
    )
}

export default AddMovie