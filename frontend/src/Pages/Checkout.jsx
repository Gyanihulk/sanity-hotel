import React, { useState } from "react";
import { CustomerDetailsForm } from "../Components/CustomerDetailsForm";

const Checkout = () => {
  const [customerForm,setCustomerForm]=useState(false)

  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <div className="col-9 ">
            <div className="card mt-5">
              <div className="card-header">Featured</div>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">
                  With supporting text below as a natural lead-in to additional
                  content.
                </p>
                <button onClick={()=>{setCustomerForm(!customerForm)}} className="btn btn-primary">
                  Book
                </button>
                {customerForm && <CustomerDetailsForm />}
              </div>
            </div>
          </div>
          <div className="col-3 mt-5">
            <div className="card">
              <img className="card-img-top" src="..." alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Cras justo odio</li>
                <li className="list-group-item">Dapibus ac facilisis in</li>
                <li className="list-group-item">Vestibulum at eros</li>
              </ul>
              <div className="card-body">
                <a href="#" className="card-link">
                  Card link
                </a>
                <a href="#" className="card-link">
                  Another link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
