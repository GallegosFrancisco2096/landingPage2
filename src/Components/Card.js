import React from "react";
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";


function Card() {
  return (
    <div className="card mx-3 mt-3 col-8 col-sm-2 ">
      <img src="https://pm1.narvii.com/6650/1e1210b9c20ad495d949496e77b195597813315f_hq.jpg" className="card-img-top" alt="..." style={{
      maxwidth: 250,
      maxheight: 400,
    }} />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>  )


}

export default Card;


