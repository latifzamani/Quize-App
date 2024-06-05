import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Booklayout(){
    return(
        <>
        <Link to='/first/1'>Page One</Link>
        <Link to='/first/2'>Page Two</Link>
        <Link to='/first/3'>Page Three</Link>
        <Outlet context={{ID:'2384fh2'}}/>
        </>
    )
}