import React from 'react'

const CandidateDetail = () => {
  return (
    <div>
        <main className="main">
      <section className="section-box-2">
        <div className="container">
          <div className="banner-hero banner-image-single"><img src="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png" height="300" alt="jobbox"/></div>
          <div className="box-company-profile">
            <div className="image-compay"><img src="https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" alt="jobbox" height="150"/></div>
            <div className="row mt-10">
              <div className="col-lg-8 col-md-12">
                <h5 className="f-18">Lethabo Mokoena <span className="card-location font-regular ml-20">Johannesburg, SA</span></h5>
                <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
                <div className="mt-10 mb-15"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobbox"/><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobbox"/><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobbox"/><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobbox"/><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/star.svg" alt="jobbox"/><span className="font-xs color-text-mutted ml-10">(66)</span><img className="ml-30" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/candidates/verified.png" alt="jobbox"/></div>
              </div>
              <div className="col-lg-4 col-md-12 text-lg-end"><a className="btn btn-download-icon btn-apply btn-apply-big" href="#">Download CV</a></div>
            </div>
          </div>
          <div className="box-nav-tabs mt-40 mb-5">
            <ul className="nav" role="tablist">
              <li><a className="btn btn-border aboutus-icon mr-15 mb-5" href="#tab-short-bio" data-bs-toggle="tab" role="tab" aria-controls="tab-short-bio" aria-selected="false">Short Bio</a></li>
              <li><a className="btn btn-border recruitment-icon mr-15 mb-5 active" href="#tab-skills" data-bs-toggle="tab" role="tab" aria-controls="tab-skills" aria-selected="true">Skills</a></li>
              <li><a className="btn btn-border people-icon mb-5" href="#tab-work-experience" data-bs-toggle="tab" role="tab" aria-controls="tab-work-experience" aria-selected="false">Working Experience</a></li>
            </ul>
          </div>
          <div className="border-bottom pt-10 pb-10"></div>
        </div>
      </section>
      <section className="section-box mt-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 col-12">
              <div className="content-single">
                <div className="tab-content">
                  <div className="tab-pane fade" id="tab-short-bio" role="tabpanel" aria-labelledby="tab-short-bio">
                    <h4>About Me</h4>
                    <p>Hello there! My name is Lethabo Mokoena. I am a graphic designer, and I’m very passionate and dedicated to my work. With 10 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.</p>
                    <h4>Professional Skills</h4>
                    <div className="row mb-40">
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                        <h6 className="color-text-paragraph-2">Programming</h6>
                        <div className="box-progress-bar mt-20">
                          <p className="font-xs color-text-paragraph-2 mb-10">HTML &amp; CSS</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `78%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>78%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Javascript</p>
                          <div className="progress">
                            <div className="progress-bar bg-brand-2" role="progressbar" style={{width: `88%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span>88%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Database</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `62%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span>62%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">React JS</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `92%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span>92%</span></div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-sm-12 mb-30">
                        <h6 className="color-text-paragraph-2">Design</h6>
                        <div className="box-progress-bar mt-20">
                          <p className="font-xs color-text-paragraph-2 mb-10">Photoshop</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `29%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span>29%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Figma</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `20%`}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><span>20%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Illustrator</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `65%`}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"><span>65%</span></div>
                          </div>
                          <p className="font-xs color-text-paragraph-2 mb-10 mt-30">Sketch</p>
                          <div className="progress">
                            <div className="progress-bar bg-paragraph-2" role="progressbar" style={{width: `82%`}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span>82%</span></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p></p>
                  </div>
                  <div className="tab-pane fade active show" id="tab-skills" role="tabpanel" aria-labelledby="tab-skills">
                    <h4>Skills</h4>
                    <p></p>Hello there! My name is Lethabo Mokoena. I am a graphic designer, and I’m very passionate and dedicated to my work. With 10 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                    <p></p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                  </div>
                  <div className="tab-pane fade" id="tab-work-experience" role="tabpanel" aria-labelledby="tab-work-experience">
                    <h4>Work Experiences</h4>
                    <p></p>Hello there! My name is Lethabo Mokoena. I am a graphic designer, and I’m very passionate and dedicated to my work. With 20 years experience as a professional a graphic designer, I have acquired the skills and knowledge necessary to make your project a success.
                    <p></p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis illum fuga eveniet. Deleniti asperiores, commodi quae ipsum quas est itaque, ipsa, dolore beatae voluptates nemo blanditiis iste eius officia minus. Id nisi, consequuntur sunt impedit quidem, vitae mollitia!
                  </div>
                </div>
              </div>
              <div className="box-related-job content-page">
                <h3 className="mb-30">Work History</h3>
                <div className="box-list-jobs display-list">
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up wow animate__ animate__fadeIn animated" style={{visibility: `visible`, animationName: `fadeIn`}}><span className="flash"></span>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="">Quora JSC</a><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><a href="#">Senior System Engineer</a></h4>
                        <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time"><span>5</span><span> days ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                            <div className="col-lg-5 col-5 text-end"><a className="btn btn-apply-now" href="#">View Details</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up wow animate__ animate__fadeIn animated" style={{visibility: `visible`, animationName: `fadeIn`}}><span className="flash"></span>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-7.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="">Nintendo</a><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><a href="#">Products Manager</a></h4>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> days ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                            <div className="col-lg-5 col-5 text-end"><a className="btn btn-apply-now" href="#">View Details</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-12 col-12">
                    <div className="card-grid-2 hover-up wow animate__ animate__fadeIn animated" style={{visibility: `visible`, animationName: `fadeIn`}}><span className="flash"></span>
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12">
                          <div className="card-grid-2-image-left">
                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-8.png" alt="jobBox"/></div>
                            <div className="right-info"><a className="name-job" href="">Periscope</a><span className="location-small">New York, US</span></div>
                          </div>
                        </div>
                        <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                          <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                        </div>
                      </div>
                      <div className="card-block-info">
                        <h4><a href="#">Lead Quality Control QA</a></h4>
                        <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> days ago</span></span></div>
                        <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                        <div className="card-2-bottom mt-20">
                          <div className="row">
                            <div className="col-lg-7 col-7"><span className="card-text-price">Status:<span className="text-success">Done</span></span></div>
                            <div className="col-lg-5 col-5 text-end"><a className="btn btn-apply-now" href="#">View Details</a></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="paginations">
                  <ul className="pager">
                    <li><a className="pager-prev" href="#"></a></li>
                    <li><a className="pager-number active" href="#">1</a></li>
                    <li><a className="pager-number" href="#">2</a></li>
                    <li><a className="pager-number" href="#">3</a></li>
                    <li><a className="pager-number" href="#">4</a></li>
                    <li><a className="pager-number" href="#">5</a></li>
                    <li><a className="pager-number" href="#">6</a></li>
                    <li><a className="pager-number" href="#">7</a></li>
                    <li><a className="pager-next" href="#"></a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
              <div className="sidebar-border">
                <h5 className="f-18">Overview</h5>
                <div className="sidebar-list-job">
                  <ul>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-briefcase"></i></div>
                      <div className="sidebar-text-info"><span className="text-description">Experience</span><strong className="small-heading">10 years</strong></div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-dollar"></i></div>
                      <div className="sidebar-text-info"><span className="text-description">Expected Salary</span><strong className="small-heading">R26k - R30k</strong></div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-marker"></i></div>
                      <div className="sidebar-text-info"><span className="text-description">Language</span><strong className="small-heading">English, Zulu, Tsonga</strong></div>
                    </li>
                    <li>
                      <div className="sidebar-icon-item"><i className="fi-rr-time-fast"></i></div>
                      <div className="sidebar-text-info"><span className="text-description">Education Level</span><strong className="small-heading">Honours Degree</strong></div>
                    </li>
                  </ul>
                </div>
                <div className="sidebar-list-job">
                  <ul className="ul-disc">
                    <li>256 Juta Street, Braamfontein, Johannesburg</li>
                    <li>Phone: (123) 456-7890</li>
                    <li>Email: contact@lethabodev.com</li>
                  </ul>
                  <div className="mt-30"><a className="btn btn-send-message" href="#">Send Message</a></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default CandidateDetail