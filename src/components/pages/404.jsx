import React, { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export default function Error404() {
    const navigate = useNavigate();
    useEffect(async ()=>(

        setTimeout(async() =>{
            navigate("/about")
        }, 1000)

        ),[])
    return (
        <div>
            <h1 style={{ color: 'yellow', backgroundColor: "grey" }}>Page Not Found 😢</h1>
        </div>
    )
}