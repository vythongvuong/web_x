import React, {useState} from "react";
import axios from "axios";
import img2 from '../../Static_File/img/news-800x500-2.jpg';


function Home() {
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
      <div class="body-webx">
        <div class="container">
        {/* Main News Slider Start */}
          <div class="container-fluid">
            <div class="row">
              <div class="col-lg-7 px-0">
                <div class="owl-carousel main-carousel position-relative">
                  <div class="position-relative overflow-hidden" style={{height: "500px",}}>
                      <img class="img-fluid h-100" src={img2} />
                      <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a class="text-white" href="">Jan 01, 2045</a>
                        </div>
                        <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                      </div>
                  </div>
                  <div class="position-relative overflow-hidden" style={{height: "500px",}}>
                      <img class="img-fluid h-100" src={img2} />
                      <div class="overlay">
                          <div class="mb-2">
                              <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                  href="">Business</a>
                              <a class="text-white" href="">Jan 01, 2045</a>
                          </div>
                          <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                      </div>
                  </div>
                  <div class="position-relative overflow-hidden" style={{height: "500px",}}>
                      <img class="img-fluid h-100" src={img2} />
                      <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a class="text-white" href="">Jan 01, 2045</a>
                        </div>
                        <a class="h2 m-0 text-white text-uppercase font-weight-bold" href="">Lorem ipsum dolor sit amet elit. Proin vitae porta diam...</a>
                      </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-5 px-0">
                  <div class="row mx-0">
                      <div class="col-md-6 px-0">
                          <div class="position-relative overflow-hidden" style={{height: "250px",}}>
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
                          <div class="position-relative overflow-hidden" style={{height: "250px",}}>
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
                          <div class="position-relative overflow-hidden" style={{height: "250px",}}>
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
                          <div class="position-relative overflow-hidden" style={{height: "250px",}}>
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

          {/* Featured News Slider Start */}
          <div class="container-fluid pt-5 mb-3">
            <div class="container">
              <div class="section-title">
                  <h4 class="m-0 text-uppercase font-weight-bold">Featured News</h4>
              </div>
              <div class="owl-carousel news-carousel carousel-item-4 position-relative">
                <div class="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img class="img-fluid h-100" src={img2} />
                    <div class="overlay">
                      <div class="mb-2">
                          <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                              href="">Business</a>
                          <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                      </div>
                      <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img class="img-fluid h-100" src={img2}/>
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img class="img-fluid h-100" src={img2} />
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img class="img-fluid h-100" src={img2} />
                    <div class="overlay">
                        <div class="mb-2">
                            <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                href="">Business</a>
                            <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                        </div>
                        <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">Lorem ipsum dolor sit amet elit...</a>
                    </div>
                </div>
                <div class="position-relative overflow-hidden" style={{height: "300px"}}>
                    <img class="img-fluid h-100" src={img2} />
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
        {/* Featured News Slider End */}
        </div>
      </div>

    )
  }
export default Home;