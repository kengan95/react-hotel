<<<<<<< HEAD
import React from 'react';
import './MainFooter.css';
import { Link } from 'react-router-dom';

import iconfacebook from '../assets/icon-facebook-grey.png';
import iconyoutube from '../assets/icon-youtube-grey.png';
import icontwitter from '../assets/icon-twitter-grey.png';
import icongplus from '../assets/icon-gplus-grey.png';
import icontripadvisor from '../assets/icon-tripadvisor-grey.png';
import iconairbnb from '../assets/icon-airbnb-grey.png';
import iconbooking from '../assets/icon-booking-grey.png';
import iconhostelworld from '../assets/icon-hostelworld-grey.png';
import cards from '../assets/cards.png';

function MainFooter(props) {
    return (
        <footer id="main-footer">
            <section id="opcion-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 ">
                            <h3 className="titulo-opcion-footer">
                                Mian Contacts:
                            </h3>
                            <div className="contenido-opcion-footer">
                                <p>
                                    <Link href="/">Asburd 14 ( Miami )</Link> <br />
                                    <Link href="/">info@resort.com</Link> <br />
                                    <Link href="/">+23 3453776547</Link> <br />
                                    <Link href="/">Reception 24 H</Link> <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <h3 className="titulo-opcion-footer">
                                Site Links
                            </h3>
                            <div className="contenido-opcion-footer">
                                <p>
                                    <Link href="/">ABOUT US</Link> <br />
                                    <Link href="/">OUR SERVICES</Link> <br />
                                    <Link href="/">OUR ROOMS</Link> <br />
                                    <Link href="/">PAYMENTS</Link> <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h3 className="titulo-opcion-footer">
                                Newsletter
                            </h3>
                            <form action="" className="card p-2 border-0">
                                <div className="input-group ">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />
                                    <div className="boton">
                                        <button type="submit" className="btn boton-celeste">SUBCRIBE</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-xl-6 socio">
                                    <h3>Social :</h3>
                                    <Link href="/" className="icono-socio"><img src={iconfacebook} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={iconyoutube} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={icontwitter} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={icongplus} alt="" /></Link>
                                </div>
                                <div className="col-xl-6 also">
                                    <h3>Find us also :</h3>
                                    <Link href="/" className="icono-also"><img src={icontripadvisor} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconairbnb} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconbooking} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconhostelworld} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="terminos-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="terminos-footer-texto">
                                <p>Terms of Use · Privacy Policy</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="terminos-footer-texto">
                                <p>Copyright 2021 HOTEL OCEAN</p>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="terminos-footer-tarjetas">
                                <img src={cards} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

=======
import React from 'react';
import './MainFooter.css';
import { Link } from 'react-router-dom';

import iconfacebook from '../assets/icon-facebook-grey.png';
import iconyoutube from '../assets/icon-youtube-grey.png';
import icontwitter from '../assets/icon-twitter-grey.png';
import icongplus from '../assets/icon-gplus-grey.png';
import icontripadvisor from '../assets/icon-tripadvisor-grey.png';
import iconairbnb from '../assets/icon-airbnb-grey.png';
import iconbooking from '../assets/icon-booking-grey.png';
import iconhostelworld from '../assets/icon-hostelworld-grey.png';
import cards from '../assets/cards.png';

function MainFooter(props) {
    return (
        <footer id="main-footer">
            <section id="opcion-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-3 ">
                            <h3 className="titulo-opcion-footer">
                                Mian Contacts:
                            </h3>
                            <div className="contenido-opcion-footer">
                                <p>
                                    <Link href="/">Asburd 14 ( Miami )</Link> <br />
                                    <Link href="/">info@resort.com</Link> <br />
                                    <Link href="/">+23 3453776547</Link> <br />
                                    <Link href="/">Reception 24 H</Link> <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <h3 className="titulo-opcion-footer">
                                Site Links
                            </h3>
                            <div className="contenido-opcion-footer">
                                <p>
                                    <Link href="/">ABOUT US</Link> <br />
                                    <Link href="/">OUR SERVICES</Link> <br />
                                    <Link href="/">OUR ROOMS</Link> <br />
                                    <Link href="/">PAYMENTS</Link> <br />
                                </p>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <h3 className="titulo-opcion-footer">
                                Newsletter
                            </h3>
                            <form action="" className="card p-2 border-0">
                                <div className="input-group ">
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="email" />
                                    <div className="boton">
                                        <button type="submit" className="btn boton-celeste">SUBCRIBE</button>
                                    </div>
                                </div>
                            </form>
                            <div className="row">
                                <div className="col-xl-6 socio">
                                    <h3>Social :</h3>
                                    <Link href="/" className="icono-socio"><img src={iconfacebook} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={iconyoutube} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={icontwitter} alt="" /></Link>
                                    <Link href="/" className="icono-socio"><img src={icongplus} alt="" /></Link>
                                </div>
                                <div className="col-xl-6 also">
                                    <h3>Find us also :</h3>
                                    <Link href="/" className="icono-also"><img src={icontripadvisor} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconairbnb} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconbooking} alt="" /></Link>
                                    <Link href="/" className="icono-also"><img src={iconhostelworld} alt="" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section id="terminos-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="terminos-footer-texto">
                                <p>Terms of Use · Privacy Policy</p>
                            </div>
                        </div>
                        <div className="col-xl-3">
                            <div className="terminos-footer-texto">
                                <p>Copyright 2021 HOTEL OCEAN</p>
                            </div>
                        </div>

                        <div className="col-xl-3">
                            <div className="terminos-footer-tarjetas">
                                <img src={cards} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    );
}

>>>>>>> f376a05808d8d9b0e0d3436895f67a19b0bad0c4
export default MainFooter;