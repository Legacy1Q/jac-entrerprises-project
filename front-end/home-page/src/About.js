import "./App.css";
import { useState, useEffect } from "react";
import Developers from "./components/Developers";
import NewDeveloper from "./components/NewDeveloper";
import { DevelopersContext } from "./context/DevelopersContext";

function About() {
  const [developers, setDevelopers] = useState([]);

  const fetchDevelopersName = async (name) => {
    try {
      const response = await fetch("http://localhost:8080/developers");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      setDevelopers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchDevelopersName();
  }, []);

  return (
    <DevelopersContext.Provider value={{ developers, setDevelopers }}>
      <div>
        <NewDeveloper />
        <Developers></Developers>
      </div>
    </DevelopersContext.Provider>
  );
}

export default About;
