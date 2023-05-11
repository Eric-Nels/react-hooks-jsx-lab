import React from "react";
import { name, city } from "../data/data.js";

const firebrickStyle = {
  color: 'firebrick'
}
function Home() {
  return <div id="home">
    <h1 style={firebrickStyle}>{name} is a Web Developer from {city}</h1>
  </div>;
}

export default Home;
