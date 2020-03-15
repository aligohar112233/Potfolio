import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css'
import Header from './Header';



class App  extends Component {
  render(){
    return(
      <div>

        <Header />


          <div class="site-blocks-cover overlay bg-light" id="home-section">

               <div class="container">
                 <div class="row justify-content-center">

                   <div class="col-md-12 mt-lg-5 text-left align-self-center text-intro">
                     <div class="row">
                       <div class="col-lg-6">
                         <h1 class="text-black">I'm Faseeh Ali</h1>
                         <p class="lead">I'm Software Engineer</p>
                         <p><a href="#portfolio-section" class="btn smoothscroll btn-primary">Portfolio</a></p>

                       </div>
                     </div>
                   </div>

                 </div>
               </div>

               <img src="images/port.png " alt="Image" class="img-face p " data-aos="fade"/>


             </div>


             <section class="site-section block__62272" id="portfolio-section m1">


                  <div class="container">
                    <div class="row mb-5">
                      <div class="col-12 position-relative">
                        <h2 class="section-title text-center mb-5">My Portfolio</h2>
                      </div>
                    </div>


                    <div id="posts" class="row no-gutter">
                      <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/p1.png" class="item-wrap fancybox">
                          <span class="icon-search2"></span>
                          <img class="img-fluid" src="images/p1.png"/>
                        </a>
                      </div>
                      <div class="item web col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/p3.png" class="item-wrap fancybox">
                          <span class="icon-search2"></span>
                          <img class="img-fluid" src="images/p3.png"/>
                        </a>
                      </div>

                      <div class="item brand col-6 col-sm-6 col-md-6 col-lg-4 col-xl-4 mb-4">
                        <a href="images/p2.png" class="item-wrap fancybox">
                          <span class="icon-search2"></span>
                          <img class="img-fluid" src="images/p2.png"/>
                        </a>
                      </div>
                      <div>

                    </div>
                      </div>
                    </div>



                          </section>


             <div class="site-section" id="services-section">

               <div class="container">

                 <div class="row ">

                   <div class="col-12 mb-5 position-relative">
                   <h2 class = "mt-5 text-center">Skills</h2>
                     <h2 class="section-title text-center mb-5 mt-1"></h2>
                   </div>

                   <div class="col-md-6 mb-4">
                     <div class="service d-flex h-100">
                       <div class="service-number mr-4"><span class="icon-style"></span></div>
                       <div class="service-about">
                         <h3>UI/UX Designer</h3>
                         <p> I have awesome grip on Html5,Css3,Jquery,

                         </p>
                       </div>
                     </div>
                   </div>

                   <div class="col-md-6 mb-4 ">
                     <div class="service d-flex h-100">
                       <div class="service-number mr-4"><span class="icon-business_center"></span></div>
                       <div class="service-about ">
                         <h3>Software Quality Assurance</h3>
                         <p>Black box Testing , White box Testing , Regression Testing and much more</p>
                       </div>
                     </div>
                   </div>

                   <div class="col-md-6 mb-4 ">
                     <div class="service d-flex h-100">
                       <div class="service-number mr-4"><span class="icon-desktop_windows"></span></div>
                       <div class="service-about">
                         <h3>Other Skills</h3>
                         <p>Software development lifecycles and procedures,Continuous Integration and technical documents,MS Office,Communications Skills,Good English Speaking and Writing capabilities,Ability to work individually and as a team member.,MVC Architecture



         </p>
                       </div>
                     </div>
                   </div>

                   <div class="col-md-6 mb-4">
                     <div class="service d-flex h-100">
                       <div class="service-number mr-4"><span class="icon-layers"></span></div>
                       <div class="service-about">
                         <h3>Web Design Frameworks</h3>
                         <p>Javascript ES6=> React Js,Bootstrap3,Bootstrap4</p>


                       </div>
                     </div>
                   </div>

                 </div>
               </div>
             </div>

             <div class="site-section" id="about-section">
               <div class="container">
                 <div class="row ">
                   <div class="col-12 mb-4 position-relative">
                     <h2 class="section-title">About Me</h2>
                   </div>
                   <div class="col-lg-4 order-1 order-lg-2 mb-4 mb-lg-0">
                     <div class="">
                     <img src="images/me.jpg" alt="Image" class="me "/>
                     </div>
                   </div>
                   <div class="col-lg-4 order-2 order-lg-1">
                     <p>I am Faseeh Ali I have done my graduation from University Of Gujrat </p>
                     <p>I am graduated in Bs Software Engineering got awesome experience in software development </p>
                   </div>
                   <div class="col-lg-4 order-3 order-lg-3">
                     <p>My passion is creating, and I find happiness in being a better me today than the me yesterday</p>
                     <p>I want to be in an organization where I can work using my skills and knowledge. To do something creative and different which can help me in getting me and this company a fame.</p>
                     <p><a href="#contact-section" class="btn smoothscroll btn-primary">Contact Me</a></p>
                   </div>

                 </div>
               </div>
             </div>





             <section class="site-section bg-dark">
      <div class="container">
        <div class="row">
          <div class="col-12 mb-5 position-relative">
            <h2 class="section-title text-center mb-5 text-white">testimonials</h2>
          </div>
        </div>
        <div class="owl-carousel slide-one-item">
          <div class="slide">
            <blockquote>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
              <p><cite>&mdash; Jean Smith</cite></p>
            </blockquote>
          </div>
          <div class="slide">
            <blockquote>
              <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
              <p><cite>&mdash; Carl Spencer</cite></p>
            </blockquote>
          </div>
          <div class="slide">
            <blockquote>
              <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.</p>
              <p><cite>&mdash; Ryan Peters</cite></p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>




        <section class="site-section" id="contact-section">
          <div class="container">
            <div class="row">
              <div class="col-12 mb-5 position-relative">
                <h2 class="section-title text-center mb-5">Contact Me</h2>
              </div>
            </div>
            <form action="#" class="form">
              <div class="row mb-4">
                <div class="form-group col-6">
                Firstname: Faseeh Ali
                </div>
                <div class="form-group col-6">
                 Lastname: Gohar
                </div>
              </div>

              <div class="row mb-4">
                <div class="form-group col-12">
                  Email:aligohar112233@gmail.com
                </div>
              </div>



              <div class="row">
                <div class="col-md-6">
              No:+923008030084
                </div>
              </div>

            </form>
          </div>
        </section>







        <footer class="site-section bg-light footer mine">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-3">
            <h3 class="footer-title">Me Address</h3>
            <p><span class="d-inline-block d-md-block">Pakistan,Punjab</span> Lahore 54000</p>
          </div>
          <div class="col-md-5 mx-auto">
            <div class="row">
              <div class="col-lg-4">
                <h3 class="footer-title">Skills</h3>
                <ul class="list-unstyled">
                  <li><a href="#">Software Qualiy assurance</a></li>
                  <li><a href="#">Front End Development</a></li>
                </ul>
              </div>
     <div class="col-lg-4">
            <h3 class="footer-title">Follow Me</h3>
            <a href="https://web.facebook.com/aligohar112233" class="social-circle"><span class="icon-facebook"></span></a>
            <a href="https://www.instagram.com/_gohar112233/" class="social-circle"><span class="icon-instagram"></span></a>
            <a href="https://www.linkedin.com/in/ali-gohar-396551139/" class="social-circle"><span class="icon-linkedin"></span></a>
          </div>

            </div>
          </div>

        </div>

        <div class="row">
          <div class="col-12 text-center">
          <p>

            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved |
            </p>
            </div>
        </div>
      </div>
    </footer>






























      </div>
    );
  }
}


export default App;
