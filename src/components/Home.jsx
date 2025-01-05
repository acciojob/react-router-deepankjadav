import React from "react";
import { Link } from "react-router-dom";

const Home = () =>{


    return(
        <div>
            <Link to={"/about"}>About</Link>
            <Link to={"/"}>Home</Link>
            <h1>Welcome to my website!</h1>
        </div>
    )
}

export default Home;