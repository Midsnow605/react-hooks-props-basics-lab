import React from "react";
import Links from "./Links"; // Make sure to import the Links component
import user from "../data/user"; // Import the user data

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      {user.bio && user.bio !== "" && <p>{user.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={user.links.github} linkedin={user.links.linkedin} />
          </div>
  );
}

export default About;