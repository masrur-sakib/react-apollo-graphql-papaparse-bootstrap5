import React from 'react';
import "./PropertyInfo.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/bootstrap/dist/js/bootstrap.min.js";

const PropertyInfo = (props) => {
    // const property = props;
    return (
        <div>
            <div className="container">
                {/* Card Section  */}
                <div className="card property-block" style={{ width: "25rem" }}>
                    <div className="card-body">
                        {/* Carousel Section */}
                        <div className="card-content">
                            <div id={props.property.carouselId} className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active" data-interval="5000">
                                        <img src={props.property.img1} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-interval="5000">
                                        <img src={props.property.img2} className="d-block w-100" alt="..." />
                                    </div>
                                    <div className="carousel-item" data-interval="5000">
                                        <img src={props.property.img3} className="d-block w-100" alt="..." />
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href={"#" + props.property.carouselId} role="button" data-slide="prev">
                                    <span className="carousel-control-prev-icon carousel-icon" aria-hidden="true"></span>
                                </a>
                                <a className="carousel-control-next" href={"#" + props.property.carouselId} role="button" data-slide="next">
                                    <span className="carousel-control-next-icon carousel-icon" aria-hidden="true"></span>
                                </a>
                            </div>

                            <div className="row">
                                <div className="col-md-8">
                                    <div className="property-price">
                                        <h6>NOK {props.property.price} / <span className="payment-period">per month</span></h6>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="property-icon">
                                        <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>

                            <div className="property--info">
                                <h5 className="card-title">{props.property.name}</h5>
                                <p className="card-text">Entire Place in Apartment</p>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-calendar3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                            <path fillRule="evenodd" d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                    </div>
                                    <div className="col-sm-10">
                                        {props.property.availableFrom} - Undetermined
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-1">
                                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
                                            <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
                                        </svg>
                                    </div>
                                    <div className="col-sm-10">
                                        Minimum Stay: {props.property.minimumStay}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PropertyInfo;