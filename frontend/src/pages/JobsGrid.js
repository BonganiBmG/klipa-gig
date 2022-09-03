import React from 'react'

const JobsGrid = () => {
    return (
        <div>
            <main className="main">
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-single banner-single-bg">
                            <div className="block-banner text-center">
                                <h3 className="wow animate__ animate__fadeInUp animated" style={{ visibility: `visible`, animationName: `fadeInUp` }}><span className="color-brand-2">22 Jobs</span> Available Now</h3>
                                <div className="font-sm color-text-paragraph-2 mt-10 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: `visible`, animationDelay: `0.1s`, animationName: `fadeInUp` }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero repellendus magni, <br className="d-none d-xl-block" />atque delectus molestias quis?</div>
                                <div className="form-find text-start mt-40 wow animate__ animate__fadeInUp animated" data-wow-delay=".2s" style={{ visibility: `visible`, animationDelay: `0.2s`, animationName: `fadeInUp` }}>
                                    <form>
                                        <input className="form-input input-keysearch mr-10" type="text" placeholder="I need a website" />
                                        <button className="btn btn-default btn-find font-sm">Search</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-9 col-md-12 col-sm-12 col-12 float-right">
                                <div className="content-page">
                                    <div className="box-filters-job">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-5"><span className="text-small text-showing">Showing <strong>41-60 </strong>of <strong>944 </strong>jobs</span></div>
                                            <div className="col-xl-6 col-lg-7 text-lg-end mt-sm-15">
                                                <div className="display-flex2">
                                                    <div className="box-border mr-10"><span className="text-sortby">Show:</span>
                                                        <div className="dropdown dropdown-sort">
                                                            <button className="btn dropdown-toggle" id="dropdownSort" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>12</span><i className="fi-rr-angle-small-down"></i></button>
                                                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort">
                                                                <li><a className="dropdown-item active" href="#">10</a></li>
                                                                <li><a className="dropdown-item" href="#">12</a></li>
                                                                <li><a className="dropdown-item" href="#">20</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="box-border"><span className="text-sortby">Sort by:</span>
                                                        <div className="dropdown dropdown-sort">
                                                            <button className="btn dropdown-toggle" id="dropdownSort2" type="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-display="static"><span>Newest Post</span><i className="fi-rr-angle-small-down"></i></button>
                                                            <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="dropdownSort2">
                                                                <li><a className="dropdown-item active" href="#">Newest Post</a></li>
                                                                <li><a className="dropdown-item" href="#">Oldest Post</a></li>
                                                                <li><a className="dropdown-item" href="#">Rating Post</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="box-view-type"><a className="view-type" href="jobs-list.html"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-list.svg" alt="jobBox" /></a><a className="view-type" href="jobs-grid.html"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">UI / UX Designer fulltime</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R500</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-2.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Full Stack Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-3.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Bing Search</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Java Software Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Python</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">AWS</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-4.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Dailymotion</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Frontend Developer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Typescript</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Java</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-5.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Linkedin</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">React Native Web Developer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Angular</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R500</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Senior System Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">PHP</a><a className="btn btn-grey-small mr-5" href="/job-details">Android</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-7.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Nintendo</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Products Manager</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">ASP .Net</a><a className="btn btn-grey-small mr-5" href="/job-details">Figma</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Lead Quality Control QA</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">iOS</a><a className="btn btn-grey-small mr-5" href="/job-details">Laravel</a><a className="btn btn-grey-small mr-5" href="/job-details">Golang</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">UI / UX Designer fulltime</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R500</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-2.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Full Stack Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-3.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Bing Search</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Java Software Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Python</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">AWS</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-4.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Dailymotion</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Frontend Developer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Typescript</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Java</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-5.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Linkedin</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">React Native Web Developer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Angular</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R500</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Senior System Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">PHP</a><a className="btn btn-grey-small mr-5" href="/job-details">Android</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-7.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Nintendo</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Products Manager</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">ASP .Net</a><a className="btn btn-grey-small mr-5" href="/job-details">Figma</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Periscope</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Lead Quality Control QA</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="/job-details">iOS</a><a className="btn btn-grey-small mr-5" href="/job-details">Laravel</a><a className="btn btn-grey-small mr-5" href="/job-details">Golang</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">LinkedIn</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">UI / UX Designer fulltime</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Adobe XD</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Figma</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">Photoshop</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R500</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                            <div className="card-grid-2 hover-up">
                                                <div className="card-grid-2-image-left"><span className="flash"></span>
                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-2.png" alt="jobBox" /></div>
                                                    <div className="right-info"><a className="name-job" href="company-details.html">Adobe Ilustrator</a><span className="location-small">Johannesburg, SA</span></div>
                                                </div>
                                                <div className="card-block-info">
                                                    <h6><a href="/job-details">Full Stack Engineer</a></h6>
                                                    <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                    <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                    <div className="mt-30"><a className="btn btn-grey-small mr-5" href="jobs-grid.html">React</a><a className="btn btn-grey-small mr-5" href="jobs-grid.html">NodeJS                            </a>
                                                    </div>
                                                    <div className="card-2-bottom mt-30">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted">/Hour</span></div>
                                                            <div className="col-lg-5 col-5 text-end">
                                                                <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="paginations">
                                    <ul className="pager">
                                        <li><a className="pager-prev" href="#"></a></li>
                                        <li><a className="pager-number" href="#">1</a></li>
                                        <li><a className="pager-number" href="#">2</a></li>
                                        <li><a className="pager-number" href="#">3</a></li>
                                        <li><a className="pager-number" href="#">4</a></li>
                                        <li><a className="pager-number" href="#">5</a></li>
                                        <li><a className="pager-number active" href="#">6</a></li>
                                        <li><a className="pager-number" href="#">7</a></li>
                                        <li><a className="pager-next" href="#"></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-12 col-sm-12 col-12">
                                <div className="sidebar-shadow none-shadow mb-30">
                                    <div className="sidebar-filters">
                                        <div className="filter-block head-border mb-30">
                                            <h5>Advance Filter <a className="link-reset" href="#">Reset</a></h5>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <div className="form-group select-style select-style-icon">
                                                <select className="form-control form-icons select-active select2-hidden-accessible" data-select2-id="7" tabindex="-1" aria-hidden="true">
                                                    <option data-select2-id="9">Johannesburg, SA</option>
                                                    <option>London</option>
                                                    <option>Paris</option>
                                                    <option>Berlin</option>
                                                </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="8" style={{ width: `293.5px` }}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-4bbu-container"><span className="select2-selection__rendered" id="select2-4bbu-container" role="textbox" aria-readonly="true" title="Johannesburg, SA">Johannesburg, SA</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span><i className="fi-rr-marker"></i>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Industry</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">All</span><span className="checkmark"></span>
                                                        </label><span className="number-item">180</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Software</span><span className="checkmark"></span>
                                                        </label><span className="number-item">12</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Finance</span><span className="checkmark"></span>
                                                        </label><span className="number-item">23</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Recruting</span><span className="checkmark"></span>
                                                        </label><span className="number-item">43</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Management</span><span className="checkmark"></span>
                                                        </label><span className="number-item">65</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Advertising</span><span className="checkmark"></span>
                                                        </label><span className="number-item">76</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-25">Salary Range</h5>
                                            <div className="list-checkbox pb-20">
                                                <div className="row position-relative mt-10 mb-20">
                                                    <div className="col-sm-12 box-slider-range">
                                                        <div id="slider-range" className="noUi-target noUi-ltr noUi-horizontal noUi-background"><div className="noUi-base"><div className="noUi-origin noUi-stacking" style={{ left: `56%` }}><div className="noUi-handle noUi-handle-lower"><div className="noUi-tooltip">280</div></div></div></div></div>
                                                    </div>
                                                    <div className="box-input-money">
                                                        <input className="input-disabled form-control min-value-money" type="text" name="min-value-money" disabled="disabled" value="" />
                                                        <input className="form-control min-value" type="hidden" name="min-value" value="280" />
                                                    </div>
                                                </div>
                                                <div className="box-number-money">
                                                    <div className="row mt-30">
                                                        <div className="col-sm-6 col-6"><span className="font-sm color-brand-1">R0</span></div>
                                                        <div className="col-sm-6 col-6 text-end"><span className="font-sm color-brand-1">R500</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-group mb-20">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">All</span><span className="checkmark"></span>
                                                        </label><span className="number-item">145</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R0k - R20k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">56</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R20k - R40k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">37</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R40k - R60k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">75</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R60k - R80k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">98</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R80k - R100k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">14</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">R100k - R200k</span><span className="checkmark"></span>
                                                        </label><span className="number-item">25</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <h5 className="medium-heading mb-10">Popular Keyword</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">Software</span><span className="checkmark"></span>
                                                        </label><span className="number-item">24</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Developer</span><span className="checkmark"></span>
                                                        </label><span className="number-item">45</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Web</span><span className="checkmark"></span>
                                                        </label><span className="number-item">57</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <h5 className="medium-heading mb-10">Position</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Senior</span><span className="checkmark"></span>
                                                        </label><span className="number-item">12</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">Junior</span><span className="checkmark"></span>
                                                        </label><span className="number-item">35</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Fresher</span><span className="checkmark"></span>
                                                        </label><span className="number-item">56</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <h5 className="medium-heading mb-10">Experience Level</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Internship</span><span className="checkmark"></span>
                                                        </label><span className="number-item">56</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Entry Level</span><span className="checkmark"></span>
                                                        </label><span className="number-item">87</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">Associate</span><span className="checkmark"></span>
                                                        </label><span className="number-item">24</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Mid Level</span><span className="checkmark"></span>
                                                        </label><span className="number-item">45</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Director</span><span className="checkmark"></span>
                                                        </label><span className="number-item">76</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Executive</span><span className="checkmark"></span>
                                                        </label><span className="number-item">89</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <h5 className="medium-heading mb-10">Onsite/Remote</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">On-site</span><span className="checkmark"></span>
                                                        </label><span className="number-item">12</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">Remote</span><span className="checkmark"></span>
                                                        </label><span className="number-item">65</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Hybrid</span><span className="checkmark"></span>
                                                        </label><span className="number-item">58</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-30">
                                            <h5 className="medium-heading mb-10">Job Posted</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">All</span><span className="checkmark"></span>
                                                        </label><span className="number-item">78</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">1 day</span><span className="checkmark"></span>
                                                        </label><span className="number-item">65</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">7 days</span><span className="checkmark"></span>
                                                        </label><span className="number-item">24</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">30 days</span><span className="checkmark"></span>
                                                        </label><span className="number-item">56</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="filter-block mb-20">
                                            <h5 className="medium-heading mb-15">Job type</h5>
                                            <div className="form-group">
                                                <ul className="list-checkbox">
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Full Time</span><span className="checkmark"></span>
                                                        </label><span className="number-item">25</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" checked="checked" /><span className="text-small">Part Time</span><span className="checkmark"></span>
                                                        </label><span className="number-item">64</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Remote Jobs</span><span className="checkmark"></span>
                                                        </label><span className="number-item">78</span>
                                                    </li>
                                                    <li>
                                                        <label className="cb-container">
                                                            <input type="checkbox" /><span className="text-small">Freelancer</span><span className="checkmark"></span>
                                                        </label><span className="number-item">97</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50 mb-50">
                    <div className="container">
                        <div className="text-start">
                            <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ visibility: `hidden`, animationName: `none` }}>News and Blog</h2>
                            <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp" style={{ visibility: `hidden`, animationName: `none` }}>Get the latest news, updates and tips</p>
                        </div>
                    </div>
                    <div className="container">
                        <div className="mt-50">
                            <div className="box-swiper style-nav-top">
                                <div className="swiper-container swiper-group-3 swiper swiper-initialized swiper-horizontal swiper-pointer-events swiper-backface-hidden">
                                    <div className="swiper-wrapper pb-70 pt-5" id="swiper-wrapper-3258c29cf10af9158" aria-live="off" style={{ transform: `translate3d(-1808px, 0px, 0px)`, transitionDuration: `0ms` }}><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="1 / 3">
                                        <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                            <div className="text-center card-grid-3-image"><a href="#">
                                                <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news1.png" /></figure></a></div>
                                            <div className="card-block-info">
                                                <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                <h5><a href="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</a></h5>
                                                <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                <div className="card-2-bottom mt-20">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-6">
                                                            <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user1.png" alt="jobBox" />
                                                                <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="2 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news2.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">Events</a></div>
                                                    <h5><a href="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user2.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="3 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news3.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                    <h5><a href="blog-details.html">Interview Question: Why Dont You Have a Degree?</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user3.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="0" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="1 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news1.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                    <h5><a href="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user1.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="1" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="2 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news2.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">Events</a></div>
                                                    <h5><a href="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user2.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="2" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="3 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news3.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                    <h5><a href="blog-details.html">Interview Question: Why Dont You Have a Degree?</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user3.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="0" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="1 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news1.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                    <h5><a href="blog-details.html">21 Job Interview Tips: How To Make a Great Impression</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user1.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Sarah Harding</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">8 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="1" style={{ width: `422px`, marginRight: `30px` }} role="group" aria-label="2 / 3">
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news2.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">Events</a></div>
                                                    <h5><a href="blog-details.html">39 Strengths and Weaknesses To Discuss in a Job Interview</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Our mission is to create the world&amp;rsquo;s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user2.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Steven Jobs</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">6 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="2" role="group" aria-label="3 / 3" style={{ width: `422px`, marginRight: `30px` }}>
                                            <div className="card-grid-3 hover-up wow animate__animated animate__fadeIn" style={{ visibility: `hidden`, animationName: `none` }}>
                                                <div className="text-center card-grid-3-image"><a href="#">
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/img-news3.png" /></figure></a></div>
                                                <div className="card-block-info">
                                                    <div className="tags mb-15"><a className="btn btn-tag" href="blog-grid.html">News</a></div>
                                                    <h5><a href="blog-details.html">Interview Question: Why Dont You Have a Degree?</a></h5>
                                                    <p className="mt-10 color-text-paragraph font-sm">Learn how to respond if an interviewer asks you why you dont have a degree, and read example answers that can help you craft</p>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-6 col-6">
                                                                <div className="d-flex"><img className="img-rounded" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/user3.png" alt="jobBox" />
                                                                    <div className="info-right-img"><span className="font-sm font-bold color-brand-1 op-70">Wiliam Kend</span><br /><span className="font-xs color-text-paragraph-2">06 September</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-end col-6 pt-15"><span className="color-text-paragraph-2 font-xs">9 mins to read</span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div></div>
                                    <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                <div className="swiper-button-next" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-3258c29cf10af9158"></div>
                                <div className="swiper-button-prev" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-3258c29cf10af9158"></div>
                            </div>
                            <div className="text-center"><a className="btn btn-brand-1 btn-icon-load mt--30 hover-up" href="blog-grid.html">Load More Posts</a></div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-50 mb-20">
                    <div className="container">
                        <div className="box-newsletter">
                            <div className="row">
                                <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/newsletter-left.png" alt="joxBox" /></div>
                                <div className="col-lg-12 col-xl-6 col-12">
                                    <h2 className="text-md-newsletter text-center">New Things Will Always<br /> Update Regularly</h2>
                                    <div className="box-form-newsletter mt-40">
                                        <form className="form-newsletter">
                                            <input className="input-newsletter" type="text" value="" placeholder="Enter your email here" />
                                            <button className="btn btn-default font-heading icon-send-letter">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-12 text-center d-none d-xl-block"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/newsletter-right.png" alt="joxBox" /></div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default JobsGrid