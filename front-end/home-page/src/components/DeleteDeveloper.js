import React from "react";

import Swal from "sweetalert2";

import { DevelopersContext } from "../context/DevelopersContext";
import { useContext } from "react";

export default function DeleteDeveloper({ user }) {
  const { developers, setDevelopers } = useContext(DevelopersContext);

  const handleDelete = async (id) => {
    // console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        try {
          const response = fetch(
            "http://localhost:8080/deleteDeveloper/" + id,
            {
              method: "DELETE",
            }
          );

          if (!response.ok) {
            throw new Error("Something went wrong!");
          }
          const data = response.json();
          setDevelopers(data);
        } catch (error) {
          console.log(error);
        }
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
      }
    });
  };

  const { id, firstName, lastName, picture, bio } = user;
  return (
    <div>
      <h1>{id}</h1>
      <h1>{firstName}</h1>
      <h1>{lastName}</h1>
      <h1>{picture}</h1>
      <h1>{bio}</h1>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        delete
      </button>
      <hr></hr>
    </div>
  );
}
