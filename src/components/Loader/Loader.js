import React from "react";

function Loader({isLoading}) {
    return <div style={{display: isLoading ? "block" : "none"}}>Loading...</div>
}

export default Loader;