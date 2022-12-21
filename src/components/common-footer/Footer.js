/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import HR from './HR.svg'


const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="moto-text">
                    <h1>Have a nice day</h1>
                </div>
                <br />

                <div style={{ marginLeft: "-77%" }}>
                    <h3 className="footer-heading"> <span style={{ color: "#F34624" }}>Anytime</span><span style={{ color: "#FFB800" }}>Food</span></h3>
                </div>
                {/* <div style={{marginLeft:"10%",marginRight:"auto"}}><hr style={{width: "95%",textAlign: "center"}}></hr></div> */}
                <img src={HR} style={{ width: "81%", marginLeft: "9.5%" }} alt=""></img>
                <div className='container '>
                    <div className='row'>
                        <div className='col-12 col-lg-10 mx-auto'></div>
                        <div>
                            <div className='row'>
                                <div className='col-6 col-lg-3'>
                                    <h4>Company</h4>
                                    <ul>
                                        <li>
                                            <a href='#' class="text-decoration-none">About Us</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Team</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Careers</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Blog</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h4>Contact</h4>
                                    <ul>
                                        <li>
                                            <a href='#' class="text-decoration-none">Help and support</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Partner with us</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Ride with us</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h4>Legal</h4>
                                    <ul>
                                        <li>
                                            <a href='#' class="text-decoration-none">Terms and Conditions</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Refund and Cancellation</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href='#' class="text-decoration-none">Cookie Policy</a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='col-6 col-lg-3'>
                                    <h4>Follow Us</h4>
                                    <div className='coloumn' style={{ marginLeft: "20px" }}>
                                        <span style={{ paddingLeft: "10px" }}>
                                            <a href='#' >
                                                <i class='fa fa-instagram'></i>
                                            </a>
                                        </span>
                                        <span style={{ paddingLeft: "10px" }}>
                                            <a href='#' >
                                                <i className='fa fa-facebook'></i>
                                            </a>
                                        </span>
                                        <span style={{ paddingLeft: "10px" }}>
                                            <a href='#' >
                                                <i className='fa fa-twitter'></i>
                                            </a>
                                        </span>
                                        <div className="d-flex justify-content-center align-items-center row" style={{ width: "100%" }}>
                                            <div className="">
                                                <div className="card" style={{ backgroundColor: "transparent" }}>
                                                    <div class="text-center">
                                                        <div class="mx-2">
                                                            <div className="input-group mb-3 mt-4"> <input type="text" class="form-control" placeholder="Enter email" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                                                <button className="btn btn-success border-rad" type="button" id="button-addon2">Subscribe</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-5'></div>
                    </div>
                </div>
            </footer>

        </>
    );
}

export default Footer;