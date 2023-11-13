import React from "react";
import { Link } from "react-router-dom";
export default function NewPage() {
    return (
        <div>
            <h1>hello solo</h1>
            <h2><Link to='/'>back</Link></h2>
        </div>
    )
}