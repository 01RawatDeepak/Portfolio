import React from 'react'

export default function SideMenu() {
  return (
   <>
   	<div className="mr_menu" data-lenis-prevent>
			<button type="button" className="mr_menu_close"><i className="bi bi-x-lg"></i></button>
            <div className="logo"></div> 
			
            <h6>Menu</h6>
            <div className="mr_navmenu"></div>

            <h6>Contact Us</h6>
            <div className="wptb-icon-box1 style2">
                <div className="wptb-item--inner flex-start">
                    <div className="wptb-item--icon"><i className="bi bi-envelope"></i></div>
                    <div className="wptb-item--holder">
                        <p className="wptb-item--description"><a href="mailto:kimocare@gmail.com">kimocare@gmail.com</a></p>
                    </div>
                </div>
            </div>

            <div className="wptb-icon-box1 style2">
                <div className="wptb-item--inner flex-start">
                    <div className="wptb-item--icon"><i className="bi bi-geo-alt"></i></div>
                    <div className="wptb-item--holder">
                        <p className="wptb-item--description"><a href="contact-1.html">28 Street, New York, USA</a></p>
                    </div>
                </div>
            </div>

            <div className="wptb-icon-box1 style2">
                <div className="wptb-item--inner flex-start">
                    <div className="wptb-item--icon"><i className="bi bi-envelope"></i></div>
                    <div className="wptb-item--holder">
                        <p className="wptb-item--description"><a href="tel:+98765432122811">(+987) 654 321 228 11</a></p>
                    </div>
                </div>
            </div>

            <h6>Find Our Page</h6>
            <div className="social-box">
                <ul>
                    <li><a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                    <li><a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></li>
                    <li><a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a></li>
                    <li><a href="https://www.behance.com/"><i className="bi bi-behance"></i></a></li>
                    <li><a href="https://www.youtube.com/"><i className="bi bi-youtube"></i></a></li>
                </ul>
            </div>
		</div>
        <div className="aside_info_wrapper" data-lenis-prevent>
			<button className="aside_close">Close <i className="bi bi-x-lg"></i></button>

            <div className="aside_logo logo">
                <a href="index.html" className="light_logo"><img src="src/assets/web-assets/img/logo.svg" alt="logo"/></a>
                <a href="index.html" className="dark_logo"><img src="src/assets/web-assets/img/logo-dark.svg" alt="logo"/></a>
            </div>

			<div className="aside_info_inner">

                <h6>// Instagram</h6>
                <div className="insta-logo">
                    <i className="bi bi-instagram"></i> studio_kimono
                </div>
                <div className="wptb-instagram--gallery">
                    <div className="wptb-item--inner d-flex align-items-center justify-content-center flex-wrap">
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/6.jpg" alt="img"/>
                            </div>
                        </div>
    
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/7.jpg" alt="img"/>
                            </div>
                        </div>
    
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/8.jpg" alt="img"/>
                            </div>
                        </div>
    
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/9.jpg" alt="img"/>
                            </div>
                        </div>
    
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/10.jpg" alt="img"/>
                            </div>
                        </div>
                        
                        <div className="wptb-item">
                            <div className="wptb-item--image">
                                <img src="src/assets/web-assets/img/instagram/11.jpg" alt="img"/>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="wptb-icon-box1 style2">
                    <div className="wptb-item--inner flex-start">
                        <div className="wptb-item--icon"><i className="bi bi-envelope"></i></div>
                        <div className="wptb-item--holder">
                            <p className="wptb-item--description"><a href="mailto:kimocare@gmail.com">kimocare@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                <div className="wptb-icon-box1 style2">
                    <div className="wptb-item--inner flex-start">
                        <div className="wptb-item--icon"><i className="bi bi-geo-alt"></i></div>
                        <div className="wptb-item--holder">
                            <p className="wptb-item--description"><a href="contact-1.html">28 Street, New York, USA</a></p>
                        </div>
                    </div>
                </div>

                <div className="wptb-icon-box1 style2">
                    <div className="wptb-item--inner flex-start">
                        <div className="wptb-item--icon"><i className="bi bi-envelope"></i></div>
                        <div className="wptb-item--holder">
                            <p className="wptb-item--description"><a href="tel:+98765432122811">(+987) 654 321 228 11</a></p>
                        </div>
                    </div>
                </div>

                <h6>// Follow Us</h6>
                <div className="social-box style-square">
                    <ul>
                        <li><a href="https://www.facebook.com/"><i className="bi bi-facebook"></i></a></li>
                        <li><a href="https://www.instagram.com/"><i className="bi bi-instagram"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="bi bi-linkedin"></i></a></li>
                        <li><a href="https://www.behance.com/"><i className="bi bi-behance"></i></a></li>
                        <li><a href="https://www.youtube.com/"><i className="bi bi-youtube"></i></a></li>
                    </ul>
                </div>
			</div>
		</div>
        
		<div className="search-modal">
			<div className="modal fade" id="modalSearch">
				<div className="modal-dialog modal-dialog-centered modal-lg">
					<div className="modal-content">
						<div className="search_overlay">
							<form className="credential-form" method="post">
                                <div className="form-group">
                                    <input type="text" name="search" className="keyword form-control" placeholder="Search Here"/>
                                </div>
                                <button type="submit" className="btn-search">
                                    <span className="text-first"> <i className="bi bi-arrow-right"></i> </span>
                                </button>
                            </form>
						</div>
					</div>
				</div>
			</div>
		</div>
   </>
  )
}
