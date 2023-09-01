import React from "react";

import Swal from "sweetalert2";

import { useState } from "react";

export default function NewDeveloper() {
  const [id, setId] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastname] = useState("");
  const [picture, setPicture] = useState("");
  const [bio, setBio] = useState("");

  const handleId = (e) => {
    setId(e.target.value);
  };

  const handlefirstName = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastName = (e) => {
    setLastname(e.target.value);
  };

  const handlePicture = (e) => {
    setPicture(e.target.value);
  };

  const handleBio = (e) => {
    setBio(e.target.value);
  };

  const [developers, setDevelopers] = useState([]);

  const addDeveloper = async (id) => {
    let isExisting = false;
    try {
      const devs = await fetch("http://localhost:8080/developers");
      const data2 = await devs.json();
      for (let i = 0; i < data2.length; i++) {
        if (data2[i].id == id) {
          isExisting = true;
          break;
        }
      }
      const response = await fetch(
        id == null || isExisting === false
          ? "http://localhost:8080/addDeveloper"
          : "http://localhost:8080/developer/" + id,
        {
          method: id == null || isExisting === false ? "POST" : "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            picture: picture,
            bio: bio,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setDevelopers(data);
    } catch (error) {
      console.log(error);
    }
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title:
        id == null || isExisting === false
          ? "Successfully added new developer!"
          : "Successfully updated developer details!",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Id" value={id} onChange={handleId} />
        <input
          type="text"
          placeholder="First name"
          value={firstName}
          onChange={handlefirstName}
        />
        <input
          type="text"
          placeholder="Last name"
          value={lastName}
          onChange={handleLastName}
        />
        <input
          type="text"
          placeholder="Picture"
          value={picture}
          onChange={handlePicture}
        />
        <input type="text" placeholder="Bio" value={bio} onChange={handleBio} />
        <button
          onClick={() => {
            addDeveloper(id);
          }}
        >
          Add / Edit
        </button>
      </form>

      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
