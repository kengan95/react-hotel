import React from 'react';

import blov3 from '../assets/blov-003.jpg';
import blov2 from '../assets/blov-002.jpg';

function Blog(props) {
    return (
            <section id="blog">
                <div className="container">
                    <h1 className="titulo-blog">OUR NEWS</h1>
                    <p className="titulo2-blog">- BLOG -</p>
                    <div className="row row-cols-1 row-cols-xl-3 g-4">
                            <div className="col-xl">
                            <div className="card border-0">
                                <img src={blov3} className="card-img-top" alt="..." />
                                <div className="card-img-overlay d-flex align-container-end text-left flex-wrap ">
                                <div className="card-img-overlay d-flex align-container-end text-left flex-wrap ">
                                    <div className="align-self-end d-flex-row letra-2-blanco row">
                                    <div className="col-1">
                                        <img src="" alt="" className="person-icono" />
                                    </div>   
                                    <div className="col"> 
                                    <p className="card-text text-white texto-icono">By nicdark</p> 
                                    </div>
                                    <div className="col-1">
                                        <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-3-white.svg" alt="" className="person-icono" />
                                    </div>
                                    <div className="col">
                                    <p className="card-text text-white texto-icono">0 Comments</p>
                                    </div>
                                    </div>
                                    </div>
                                </div>  
                            </div>
                            <div className="position-relative">
                                <div className="img-circular position-absolute top-0 end-0 translate-middle badge">
                                <img src="" alt="" />
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">Lounge Bar</h5>
                                <p className="card-text">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                                <p className="card-text text-celeste">READ MORE</p>
                                </div> 
                            </div>
                            </div>


                            <div className="col-xl">
                            <div className="card border-0">
                                <div className="card-img-overlay d-flex align-container-end text-left flex-wrap ">
                                <div className="align-self-end d-flex-row letra-2-blanco row">
                                    <div className="col-1">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-user-white.svg" alt="" className="person-icono" />
                                    </div>   
                                    <div className="col"> 
                                    <p className="card-text text-white texto-icono">By nicdark</p> 
                                    </div>
                                    <div className="col-1">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-3-white.svg" alt="" className="person-icono" />
                                    </div>
                                    <div className="col">
                                    <p className="card-text text-white texto-icono">0 Comments</p>
                                    </div>
                                </div>
                                </div>
                                <div className="card-body">
                                <h5 className="card-title">Restaurants</h5>
                                <p className="card-text">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                                <p className="card-text text-celeste">READ MORE</p>
                                </div> 
                                <img src="assets/blov-003.jpg" className="card-img-top" alt="..." />

                                <div className="position-relative">
                                <div className="img-circular position-absolute top-0 end-0 translate-middle badge">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-picture-white.svg" alt="" />
                                </div>
                                </div>
                                
                            </div>
                            </div>

                            <div className="col-xl">
                            <div className="card border-0">
                                <img src={blov2} className="card-img-top" alt="..." />
                                <div className="card-img-overlay d-flex align-container-end text-left flex-wrap ">
                                <div className="align-self-end d-flex-row letra-2-blanco row">
                                    <div className="col-1">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-user-white.svg" alt="" className="person-icono" />
                                    </div>   
                                    <div className="col"> 
                                    <p className="card-text text-white texto-icono">By nicdark</p> 
                                    </div>
                                    <div className="col-1">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-3-white.svg" alt="" className="person-icono" />
                                    </div>
                                    <div className="col">
                                    <p className="card-text text-white texto-icono">0 Comments</p>
                                    </div>
                                </div>
                                </div>

                                <div className="position-relative">
                                <div className="img-circular position-absolute top-0 end-0 translate-middle badge">
                                    <img src="http://www.nicdarkthemes.com/themes/resort/wp/demo/hotel/wp-content/plugins/nd-shortcodes/img/icons/icon-picture-white.svg" alt="" />
                                </div>
                                </div>

                            </div>
                            <div className="card">
                                <div className="card-body">
                                <h5 className="card-title">Wellness</h5>
                                <p className="card-text">Phasellus enim libero, blandit vel sapien vitae, condimentum ultricies magna et. Quisque euismod orci ut et lobortis.</p>
                                <p className="card-text text-celeste">READ MORE</p>
                                </div> 
                            </div>
                            </div>    
                    </div>

                </div>
            </section>
    );
}

export default Blog;