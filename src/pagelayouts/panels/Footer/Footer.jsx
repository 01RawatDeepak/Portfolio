import React from 'react'

export default function Footer() {
  return (
   <>
    <footer className="footer style1 bg-image-2"  style={{backgroundImage: "url('src/assets/web-assets/img/background/bg-5.png')"}}>
            <div className="footer-top">
                <div className="container">
                    <div className="footer--inner">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-6 mb-5 mb-md-0">
                                <div className="footer-widget">
                                    <div className="footer-nav">
                                        <ul>
                                            <li className="menu-item"><a href="about.html">About Us</a></li>
                                            <li className="menu-item"><a href="team-1.html">Our Team</a></li>
                                            <li className="menu-item"><a href="packages.html">Packages</a></li>
                                            <li className="menu-item"><a href="project-general.html">Gallery</a></li>
                                            <li className="menu-item"><a href="services-1.html">Services</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 mb-5 mb-md-0 order-1 order-md-0">
                                <div className="footer-widget text-center">
                                    <div className="logo mr-bottom-55">
                                        <a href="index.html" className=""><img src="src/assets/web-assets/img/logo.svg" alt="logo"/></a>
                                    </div>

                                    <h6 className="widget-title">Sign up for all the latest <br/> news and offers </h6>
                                    <form className="newsletter-form" method="post">
                                        <div className="form-group">
                                            <input type="email" name="email" className="form-control" placeholder="Enter your email" required/>
                                        </div>
                                        <button type="submit" className="btn btn-two">
                                            <span className="btn-wrap">
                                                <span className="text-first">Subscribe</span>
                                                <span className="text-second"><i className="bi bi-arrow-up-right"></i> <i className="bi bi-arrow-up-right"></i></span>
                                            </span>
                                        </button>
                                    </form>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-4 col-sm-6 mb-5 mb-md-0">
                                <div className="footer-widget text-md-end">
                                    <div className="footer-nav">
                                        <ul>
                                            <li className="menu-item"><a href="#">Booking</a></li>
                                            <li className="menu-item"><a href="shop.html">Products</a></li>
                                            <li className="menu-item"><a href="blog-grid.html">Recent Posts</a></li>
                                            <li className="menu-item"><a href="blog-grid.html">Latest News</a></li>
                                            <li className="menu-item"><a href="contact-1.html">Contact Us</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <div className="copyright">
                            <p><a href="https://themeforest.net/user/wpthemebooster">kimono</a> photography, All Rights Reserved</p>
                        </div>
                        <div className="social-box style-oval">
                            <ul>
                                <li><a href="https://www.facebook.com/" className="bi bi-facebook"></a></li>
                                <li><a href="https://www.instagram.com/" className="bi bi-instagram"></a></li>
                                <li><a href="https://www.linkedin.com/" className="bi bi-linkedin"></a></li>
                                <li><a href="https://www.behance.com/" className="bi bi-behance"></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

        <div className="totop">
            <a href="#"><i className="bi bi-chevron-up"></i></a>
        </div>
   </>
  )
}
