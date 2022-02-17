import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

function Jumbo() {
    return (
        <div className="container-fluid bg-light" id="caja12" >
            <div className="col-6">
                <h1>A Warm Wellcome!</h1>
            </div>
            <div >
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent luctus ex ut sapien gravida sagittis. Suspendisse malesuada est nec metus molestie condimentum. Nunc fermentum tellus elementum, varius velit ut, pharetra nunc. Aenean ultrices finibus eros. Quisque tellus elit, sodales id consectetur nec, laoreet ac lorem</p>
            </div>
            <button className="btn btn-primary">Call to action!</button>
        </div>





    )
}

export default Jumbo;