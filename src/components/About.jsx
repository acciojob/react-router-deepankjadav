import React from "react";
import { Link } from "react-router-dom";

const About = () =>{


    return(

        <div>
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Home</Link>
            <h1>About</h1>
            <p>This is a sample React Router program.</p>
        </div>
    )
}

export default About;