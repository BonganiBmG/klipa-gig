import React from 'react'
import logo from '../images/klipa1.png'

const Contact = () => {
  return (
    <div>
        <main className="main">
      <section className="section-box">
        <div className="breacrumb-cover bg-img-about">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h2 className="mb-10">About Us</h2>
                <p className="font-lg color-text-paragraph-2">Get the latest news, updates and tips</p>
              </div>
              <div className="col-lg-6 text-lg-end">
                <ul className="breadcrumbs mt-40">
                  <li><a className="home-icon" href="/">Home</a></li>
                  <li>Contact</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-80">
        <div className="container">
          <div className="box-info-contact">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12 mb-30"><a href="#"><img src={logo} alt="joxBox"/></a>
                <div className="font-sm color-text-paragraph">South Africa<br/> Phone: (123) 456-7890<br/> Email: contact@klipa.com</div><a className="text-uppercase color-brand-2 link-map" href="#">View map</a>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                <h6>Johannesburg</h6>
                <p className="font-sm color-text-paragraph mb-20">2118 Thornridge Cir. Syracuse,<br className="d-none d-lg-block"/> Connecticut 35624</p>
                <h6>Centurion</h6>
                <p className="font-sm color-text-paragraph mb-20">4517 Washington Ave.<br className="d-none d-lg-block"/> Manchester, Kentucky 39495</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                <h6>Benoni</h6>
                <p className="font-sm color-text-paragraph mb-20">3891 Ranchview Dr. Richardson,<br className="d-none d-lg-block"/> California 62639</p>
                <h6>Randburg</h6>
                <p className="font-sm color-text-paragraph mb-20">4140 Parker Rd. Allentown,<br className="d-none d-lg-block"/> New Mexico 31134</p>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12 mb-30">
                <h6>Upington</h6>
                <p className="font-sm color-text-paragraph mb-20">3891 Ranchview Dr. Richardson,<br className="d-none d-lg-block"/> California 62639</p>
                <h6>Cape Town</h6>
                <p className="font-sm color-text-paragraph mb-20">4140 Parker Rd. Allentown,<br className="d-none d-lg-block"/> New Mexico 31134</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-box mt-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-40"><span className="font-md color-brand-2 mt-20 d-inline-block">Contact us</span>
              <h2 className="mt-5 mb-10">Get in touch</h2>
              <p className="font-md color-text-paragraph-2">We want to hear from you</p>
              <form className="contact-form-style mt-30" id="contact-form" action="#" method="post">
                <div className="row wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{visibility: `visible`, animationDelay: `0.1s`, animationName: `fadeInUp`}}>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input className="font-sm color-text-paragraph-2" name="name" placeholder="Enter your name" type="text"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input className="font-sm color-text-paragraph-2" name="company" placeholder="Comapy (optioanl)" type="text"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input className="font-sm color-text-paragraph-2" name="email" placeholder="Your email" type="email"/>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="input-style mb-20">
                      <input className="font-sm color-text-paragraph-2" name="phone" placeholder="Phone number" type="tel"/>
                    </div>
                  </div>
                  <div className="col-lg-12 col-md-12">
                    <div className="textarea-style mb-30">
                      <textarea className="font-sm color-text-paragraph-2" name="message" placeholder="Tell us about yourself"></textarea>
                    </div>
                    <button className="submit btn btn-send-message" type="submit">Send message</button>
                    <label className="ml-20">
                      <input className="float-start mr-5 mt-6" type="checkbox"/> By clicking contact us button, you agree our terms and policy,
                    </label>
                  </div>
                </div>
              </form>
              <p className="form-messege"></p>
            </div>
            <div className="col-lg-4 text-center d-none d-lg-block"><img src="https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="joxBox"/></div>
          </div>
        </div>
      </section>
      {/* <section className="section-box mt-80">
        <div className="post-loop-grid">
          <div className="container">
            <div className="text-center">
              <h6 className="f-18 color-text-mutted text-uppercase">Our company</h6>
              <h2 className="section-title mb-10 wow animate__ animate__fadeInUp animated" style={{visibility: 'visible', animationName: `fadeInUp`}}>Meet Our Team</h2>
              <p className="font-sm color-text-paragraph w-lg-50 mx-auto wow animate__ animate__fadeInUp animated" style={{visibility: 'visible', animationName: `fadeInUp`}}>Get to know us</p>
            </div>
            <div className="row mt-70">
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Lebohang</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">Johannesburg</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Bongani</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">UI/UX Designer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>28</span><span>)</span></span></div><span className="card-location">Pretoria</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Sibusiso</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">Johannesburg</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Tank</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">Johannesburg</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Promise</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">Johannesburg</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12 mb-md-30">
                <div className="card-grid-4 text-center hover-up">
                  <div className="image-top-feature">
                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/about/team7.png"/></figure>
                  </div>
                  <div className="card-grid-4-info">
                    <h5 className="mt-10">Lesego</h5>
                    <p className="font-xs color-text-paragraph-2 mt-5 mb-5">Frontend Developer</p>
                    <div className="rate-reviews-small pt-5"><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobBox"/></span><span className="ml-10 color-text-mutted font-xs"><span>(</span><span>65</span><span>)</span></span></div><span className="card-location">Johannesburg</span>
                    <div className="text-center mt-30"><a className="share-facebook social-share-link" href="#"></a><a className="share-twitter social-share-link" href="#"></a><a className="share-instagram social-share-link" href="#"></a><a className="share-linkedin social-share-link" href="#"></a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
    </div>
  )
}

export default Contact