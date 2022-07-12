import { useState } from "react";

const About=()=>{
const[visible,setVisible]=useState(false);

const changeVisibility=()=>{
    setVisible(!visible);
};
    return(
    <div>
        <h1>
            Villegas Ramírez Luis Eduardo
        </h1>
        {visible ?<h4>luis@eduardo.com </h4>:"Click on the button below"}
        <br></br>
        <button className="btn btn-primary" onClick={changeVisibility}>Show info</button>

        <br/>
        <br/>
    </div>
    );
};

export default About;



