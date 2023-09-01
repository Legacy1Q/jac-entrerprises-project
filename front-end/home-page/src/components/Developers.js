import React from "react";
import User from "./DeleteDeveloper";
import { DevelopersContext } from "../context/DevelopersContext";
import { useContext } from "react";

export default function Developers() {
  const { developers, setDevelopers } = useContext(DevelopersContext);

  return (
    <section>
      {developers.map((developer) => (
        <User key={developer.id} user={developer} />
      ))}
    </section>
  );
}
