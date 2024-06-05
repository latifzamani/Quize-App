import React from "react";
import { useOutletContext, useParams } from "react-router-dom";

export default function First(props){
       const {id}=useParams();
       const {ID} =useOutletContext();
    //    console.log(id);
    return(
        <div>
            <h1>This is the First Page</h1>
            <h2>New  ID is :{ID}{id}</h2>
            
        </div>
    )
}