import React, {useState} from "react";
import axios from "axios";
import img1 from '../../Static_File/img/ads.png';
import img2 from '../../Static_File/img/news-800x500-2.jpg';
import { Carousel } from 'antd';
import 'antd/dist/antd.min.css';
import '../CSS/DungChung/Home.scss'



function Home() {

    const contentStyle = {
        height: '100%',
        color: '/fff',
        // lineHeight: '160px',
        textAlign: 'center',
        background: '/364d79',
    };

    const styleCarousel = {
        height: '100%',
    };

    const [text, setText] = useState("");

    function getQuote() {
      axios.get("https://localhost:7161/weatherforecast",  { crossdomain: true }).then(response => {
        console.log(response.data);
        setText(response.data[0].summary);
      });
      // WARNING: For GET requests, body is set to null by browsers.


    }

    function insertQuote() {
        axios.post("http://localhost:7161/api/todoitems",  
        { 
            crossdomain: true,
            id: "string",
            name: "string",
            address: "string",
            city: "string",
            age: 0,
            gender: "string"
        })
        .then(response => {
          console.log(response);
          setText(response.data[0].name);
        });
    }

    return (
        <div class="body-home-webx">
            <div class="container">
                {/* Featured News Slider Start */}
                <div class="pt-5 section-distance">
                    <div class="">
                        <div class="section-title">
                            <h4 class="m-0 text-uppercase font-weight-bold">Featured News</h4>
                        </div>
                        <div class="owl-carousel news-carousel carousel-item-4 position-relative body-home-carousel">
                            <Carousel autoplay draggable swipe dots={false} slidesToShow={4} style={styleCarousel}>
                                <div class="carousel-item">
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                                <div>
                                    <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                    <div class="">
                                        <div class="mb-2">
                                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                href="">Business</a>
                                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                        </div>
                                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
                {/* Featured News Slider End */}
                {/* News With Sidebar Start */}
                <div class="container-fluid section-distance">
                    <div class="">
                        <div class="row">
                            <div class="col-lg-8">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="section-title">
                                            <h4 class="m-0 text-uppercase font-weight-bold">Latest News</h4>
                                            <a class="text-secondary font-weight-medium text-decoration-none" href="">View All</a>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="position-relative mb-3">
                                            <img class="img-fluid w-100" src={img2} />
                                            <div class="bg-white border border-top-0 p-4">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                                <p class="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                                    rebum clita rebum dolor stet amet justo</p>
                                            </div>
                                            <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                <div class="d-flex align-items-center">
                                                    <img class="rounded-circle mr-2" src={img2} width="25" height="25" alt=""/>
                                                    <small>John Doe</small>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                                    <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="position-relative mb-3">
                                            <img class="img-fluid w-100" src={img2}/>
                                            <div class="bg-white border border-top-0 p-4">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                                <p class="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                                    rebum clita rebum dolor stet amet justo</p>
                                            </div>
                                            <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                <div class="d-flex align-items-center">
                                                    <img class="rounded-circle mr-2" src={img2} width="25" height="25" alt=""/>
                                                    <small>John Doe</small>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                                    <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <a href=""><img class="img-fluid w-100" src={img1} alt=""/></a> 
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="position-relative mb-3">
                                            <img class="img-fluid w-100" src={img2}/>
                                            <div class="bg-white border border-top-0 p-4">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                            <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                <div class="d-flex align-items-center">
                                                    <img class="rounded-circle mr-2" src={img2} width="25" height="25" alt=""/>
                                                    <small>John Doe</small>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                                    <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="position-relative mb-3">
                                            <img class="img-fluid w-100" src={img2}/>
                                            <div class="bg-white border border-top-0 p-4">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h4 d-block mb-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                            <div class="d-flex justify-content-between bg-white border border-top-0 p-4">
                                                <div class="d-flex align-items-center">
                                                    <img class="rounded-circle mr-2" src={img2} width="25" height="25" alt=""/>
                                                    <small>John Doe</small>
                                                </div>
                                                <div class="d-flex align-items-center">
                                                    <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                                    <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0"/>
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-12 mb-3">
                                        <a href=""><img class="img-fluid w-100" src={img1} alt=""/></a>
                                    </div>
                                    <div class="col-lg-12">
                                        <div class="row news-lg mx-0 mb-3">
                                            <div class="col-md-6 h-100 px-0">
                                                <img class="img-fluid h-100" src={img2}/>
                                            </div>
                                            <div class="col-md-6 d-flex flex-column border bg-white h-100 px-0">
                                                <div class="mt-auto p-4">
                                                    <div class="mb-2">
                                                        <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                            href="">Business</a>
                                                        <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                    </div>
                                                    <a class="h4 d-block mb-3 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                                    <p class="m-0">Dolor lorem eos dolor duo et eirmod sea. Dolor sit magna
                                                        rebum clita rebum dolor stet amet justo</p>
                                                </div>
                                                <div class="d-flex justify-content-between bg-white border-top mt-auto p-4">
                                                    <div class="d-flex align-items-center">
                                                        <img class="rounded-circle mr-2" src={img2} width="25" height="25" alt=""/>
                                                        <small>John Doe</small>
                                                    </div>
                                                    <div class="d-flex align-items-center">
                                                        <small class="ml-3"><i class="far fa-eye mr-2"></i>12345</small>
                                                        <small class="ml-3"><i class="far fa-comment mr-2"></i>123</small>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="col-lg-4">
                                {/* Social Follow Start */}
                                <div class="mb-3">
                                    <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase font-weight-bold">Follow Us</h4>
                                    </div>
                                    <div class="bg-white border border-top-0 p-3">
                                        <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style={{background : "#39569E"}}>
                                            <i class="fab fa-facebook-f text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Fans</span>
                                        </a>
                                        <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style={{background : "#52AAF4"}}>
                                            <i class="fab fa-twitter text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Followers</span>
                                        </a>
                                        <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style={{background : "#0185AE"}}>
                                            <i class="fab fa-linkedin-in text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Connects</span>
                                        </a>
                                        <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style={{background : "#C8359D"}}>
                                            <i class="fab fa-instagram text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Followers</span>
                                        </a>
                                        <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style={{background : "#DC472E"}}>
                                            <i class="fab fa-youtube text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Subscribers</span>
                                        </a>
                                        <a href="" class="d-block w-100 text-white text-decoration-none" style={{background : "#055570"}}>
                                            <i class="fab fa-vimeo-v text-center py-4 mr-3" style={{width: "65px", background: "rgba(0, 0, 0, .2)"}}></i>
                                            <span class="font-weight-medium">12,345 Followers</span>
                                        </a>
                                    </div>
                                </div>
                                {/* Social Follow End */}

                                {/* <!-- Ads Start --> */}
                                <div class="mb-3">
                                    <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase font-weight-bold">Advertisement</h4>
                                    </div>
                                    <div class="bg-white text-center border border-top-0 p-3">
                                        <a href=""><img class="img-fluid" src={img2} alt=""/></a>
                                    </div>
                                </div>
                                {/* <!-- Ads End --> */}

                                {/* <!-- Popular News Start --> */}
                                <div class="mb-3">
                                    <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase font-weight-bold">Tranding News</h4>
                                    </div>
                                    <div class="bg-white border border-top-0 p-3">
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                        <div class="d-flex align-items-center bg-white mb-3">
                                            <img class="img-fluid" src={img2} alt=""/>
                                            <div class="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2" href="">Business</a>
                                                    <a class="text-body" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-secondary text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* <!-- Popular News End --> */}

                                {/* <!-- Newsletter Start --> */}
                                <div class="mb-3">
                                    <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase font-weight-bold">Newsletter</h4>
                                    </div>
                                    <div class="bg-white text-center border border-top-0 p-3">
                                        <p>Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero kasd</p>
                                        <div class="input-group mb-2">
                                            <input type="text" class="form-control form-control-lg" placeholder="Your Email"/>
                                            <div class="input-group-append">
                                                <button class="btn btn-primary font-weight-bold px-3">Sign Up</button>
                                            </div>
                                        </div>
                                        <small>Lorem ipsum dolor sit amet elit</small>
                                    </div>
                                </div>
                                {/* <!-- Newsletter End --> */}

                                {/* <!-- Tags Start --> */}
                                <div class="mb-3">
                                    <div class="section-title mb-0">
                                        <h4 class="m-0 text-uppercase font-weight-bold">Tags</h4>
                                    </div>
                                <div class="bg-white border border-top-0 p-3">
                                    <div class="d-flex flex-wrap m-n1">
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Politics</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Corporate</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Health</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Education</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Science</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Business</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Foods</a>
                                        <a href="" class="btn btn-sm btn-outline-secondary m-1">Travel</a>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Tags End --> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- News With Sidebar End --> */}
            </div>
        </div>
    )
  }
export default Home;