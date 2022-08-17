import React, {useState} from "react";
// import axios from "axios";
import '../CSS/DungChung/Header.scss';
import 'antd/dist/antd.min.css';
import img2 from '../../Static_File/img/news-800x500-2.jpg';
// import './index.css';
import { Button, Dropdown, Menu,Carousel } from 'antd';


function Header() {
    // const [text, setText] = useState("");
    const menu = (
        <Menu
            items={[
            {
                key: '1',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                    1st menu item
                </a>
                ),
            },
            {
                key: '2',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
                    2nd menu item
                </a>
                ),
            },
            {
                key: '3',
                label: (
                <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                    3rd menu item
                </a>
                ),
            },
            ]}
        />);

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

    return (
        <header class="header-web">
            <div class="container">
                <div class="header-content">
                    {/* Topbar Start */}
                    <div class="container-fluid d-none d-lg-block">
                        <div class="row align-items-center bg-dark px-lg-5">
                            <div class="col-lg-9">
                                <nav class="navbar navbar-expand-sm bg-dark p-0">
                                    <ul class="navbar-nav ml-n2">
                                        <li class="nav-item border-right border-secondary">
                                            <a class="nav-link text-body small" href="/">Monday, January 1, 2045</a>
                                        </li>
                                        <li class="nav-item border-right border-secondary">
                                            <a class="nav-link text-body small" href="/">Advertise</a>
                                        </li>
                                        <li class="nav-item border-right border-secondary">
                                            <a class="nav-link text-body small" href="/">Contact</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body small" href="/">Login</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div class="col-lg-3 text-right d-none d-md-block">
                                <nav class="navbar navbar-expand-sm bg-dark p-0">
                                    <ul class="navbar-nav ml-auto mr-n2">
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-twitter"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-facebook-f"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-linkedin-in"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-instagram"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-google-plus-g"></small></a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link text-body" href="/"><small class="fab fa-youtube"></small></a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div class="row align-items-center bg-white py-3 px-lg-5">
                            <div class="col-lg-4">
                                <a href="index.html" class="navbar-brand p-0 d-none d-lg-block">
                                    <h1 class="m-0 display-4 text-uppercase text-primary">Biz<span class="text-secondary font-weight-normal">News</span></h1>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/* Topbar End */}
                    {/* Navbar Start */}
                    <div class="container-fluid p-0">
                        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-2 py-lg-0 px-lg-5">
                            <a href="index.html" class="navbar-brand d-block d-lg-none">
                                <h1 class="m-0 display-4 text-uppercase text-primary">Biz<span class="text-white font-weight-normal">News</span></h1>
                            </a>
                            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="/navbarCollapse">
                                <span class="navbar-toggler-icon"></span>
                            </button>
                            <div class="collapse navbar-collapse justify-content-between px-0 px-lg-3" id="navbarCollapse">
                                <div class="navbar-nav mr-auto py-0">
                                    <a href="index.html" class="nav-item nav-link active">Home</a>
                                    <a href="category.html" class="nav-item nav-link">Category</a>
                                    <a href="single.html" class="nav-item nav-link">Single News</a>
                                    <div class="nav-item dropdown">
                                    <Dropdown overlay={menu} placement="topRight" arrow>
                                        <div class="nav-item dropdown">
                                            <a href="/" class="nav-link dropdown-toggle" data-toggle="dropdown">Dropdown</a>
                                        </div>
                                    </Dropdown>
                                    </div>
                                    <a href="contact.html" class="nav-item nav-link">Contact</a>
                                </div>
                                <div class="input-group ml-auto d-none d-lg-flex">
                                    <input type="text" class="form-control border-0" placeholder="Keyword" />
                                    <div class="input-group-append">
                                        <button class="input-group-text bg-primary text-dark border-0 px-3"><i
                                                class="fa fa-search"></i></button>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    {/* Navbar End */}
                    {/* Main News Slider Start */}
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-lg-7 px-0">
                                <div class="owl-carousel main-carousel position-relative slider-header-webx">
                                    <div class="position-relative overflow-hidden">
                                        <Carousel autoplay style={styleCarousel}>
                                            <div class="carousel-item">
                                                <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                            </div>
                                            <div>
                                                <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                            </div>
                                            <div>
                                                <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                            </div>
                                            <div>
                                                <img class="img-fluid w-100 h-100" src={img2} style={contentStyle}/>
                                            </div>
                                        </Carousel>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-5 px-0">
                                <div class="row mx-0">
                                    <div class="col-md-6 px-0">
                                        <div class="position-relative overflow-hidden">
                                            <img class="img-fluid w-100 h-100" src={img2}/>
                                            <div class="overlay">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-0">
                                        <div class="position-relative overflow-hidden">
                                            <img class="img-fluid w-100 h-100" src={img2} />
                                            <div class="overlay">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-0">
                                        <div class="position-relative overflow-hidden">
                                            <img class="img-fluid w-100 h-100" src={img2} />
                                            <div class="overlay">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6 px-0">
                                        <div class="position-relative overflow-hidden">
                                            <img class="img-fluid w-100 h-100" src={img2} />
                                            <div class="overlay">
                                                <div class="mb-2">
                                                    <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                                        href="">Business</a>
                                                    <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                                                </div>
                                                <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Main News Slider End */}
                </div>
            </div>
        </header>
    )
  }
export default Header;