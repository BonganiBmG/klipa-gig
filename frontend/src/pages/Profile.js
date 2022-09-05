import React from 'react'
import JobApply from '../components/JobApply'

const Profile = () => {
    return (
        <div>
            <JobApply/>
            <main className="main">
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-image-single"><img src="https://thepracticaldev.s3.amazonaws.com/i/6hqmcjaxbgbon8ydw93z.png" height="300" alt="jobbox" /><a className="btn-editor" href="#"></a></div>
                        <div className="box-company-profile">
                            <div className="image-compay"><img src="https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" alt="jobbox" height="150" /></div>
                            <div className="row mt-10">
                                <div className="col-lg-8 col-md-12">
                                    <h5 className="f-18">Lethabo Mokoena <span className="card-location font-regular ml-20">Johannesburg, SA</span></h5>
                                    <p className="mt-0 font-md color-text-paragraph-2 mb-15">UI/UX Designer. Front end Developer</p>
                                </div>
                                <div className="col-lg-4 col-md-12 text-lg-end"><a className="btn btn-preview-icon btn-apply btn-apply-big" href="/candidate/detail">Preview</a></div>
                            </div>
                        </div>
                        <div className="border-bottom pt-10 pb-10"></div>
                    </div>
                </section>
                <section className="section-box mt-50">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-12">
                                <div className="box-nav-tabs nav-tavs-profile mb-5">
                                    <ul className="nav" role="tablist">
                                        <li><a className="btn btn-border aboutus-icon mb-20 active" href="#tab-my-profile" data-bs-toggle="tab" role="tab" aria-controls="tab-my-profile" aria-selected="true">My Profile</a></li>
                                        <li><a className="btn btn-border recruitment-icon mb-20" href="#tab-my-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-my-jobs" aria-selected="false">My Jobs</a></li>
                                        <li><a className="btn btn-border people-icon mb-20" href="#tab-saved-jobs" data-bs-toggle="tab" role="tab" aria-controls="tab-saved-jobs" aria-selected="false">Saved Jobs</a></li>
                                    </ul>
                                    <div className="border-bottom pt-10 pb-10"></div>
                                    <div className="mt-20 mb-20"><a className="link-red" href="#">Delete Account</a></div>
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-8 col-sm-12 col-12 mb-50">
                                <div className="content-single">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active" id="tab-my-profile" role="tabpanel" aria-labelledby="tab-my-profile">
                                            <h3 className="mt-0 mb-15 color-brand-1">My Account</h3><a className="font-md color-text-paragraph-2" href="#">Update your profile</a>
                                            <div className="mt-35 mb-40 box-info-profie">
                                                <div className="image-profile"><img src="https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" alt="jobbox" /></div><a className="btn btn-apply">Upload Avatar</a><a className="btn btn-link">Delete</a>
                                            </div>
                                            <div className="row form-contact">
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="form-group">
                                                        <label className="font-sm color-text-mutted mb-10">Full Name *</label>
                                                        <input className="form-control" type="text" value="Lethabo Mokoena" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-sm color-text-mutted mb-10">Email *</label>
                                                        <input className="form-control" type="text" value="lethabomokoena@gmail.com" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-sm color-text-mutted mb-10">Contact number</label>
                                                        <input className="form-control" type="text" value="01 - 234 567 89" />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-sm color-text-mutted mb-10">Bio</label>
                                                        <textarea className="form-control" rows="4">I am a creative and dedicated individual who loves web development. We are passionate team with the mission for achieving the perfection in web design.</textarea>
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="font-sm color-text-mutted mb-10">Personal website</label>
                                                        <input className="form-control" type="url" value="https://lethabomokoena.com" />
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">Country</label>
                                                                <input className="form-control" type="text" value="South Africa" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">Province</label>
                                                                <input className="form-control" type="text" value="Gauteng" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">City</label>
                                                                <input className="form-control" type="text" value="Johannesburg" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">Zip code</label>
                                                                <input className="form-control" type="text" value="2056" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom pt-10 pb-10 mb-30"></div>
                                                    <h6 className="color-orange mb-20">Change your password</h6>
                                                    <div className="row">
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">Password</label>
                                                                <input className="form-control" type="password" value="123456789" />
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6">
                                                            <div className="form-group">
                                                                <label className="font-sm color-text-mutted mb-10">Re-Password *</label>
                                                                <input className="form-control" type="password" value="123456789" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="border-bottom pt-10 pb-10"></div>
                                                    <div className="box-agree mt-30">
                                                        <label className="lbl-agree font-xs color-text-paragraph-2">
                                                            <input className="lbl-checkbox" type="checkbox" value="1" />Available for freelancers
                                                        </label>
                                                    </div>
                                                    <div className="box-button mt-15">
                                                        <button className="btn btn-apply-big font-md font-bold">Save All Changes</button>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-12">
                                                    <div className="box-skills">
                                                        <h5 className="mt-0 color-brand-1">Skills</h5>
                                                        <div className="form-contact">
                                                            <div className="form-group">
                                                                <input className="form-control search-icon" type="text" value="" placeholder="E.g. Angular, Laravel..." />
                                                            </div>
                                                        </div>
                                                        <div className="box-tags mt-30"><a className="btn btn-grey-small mr-10">Figma<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">Adobe XD<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">NextJS<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">React<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">App<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">Digital<span className="close-icon"></span></a><a className="btn btn-grey-small mr-10">NodeJS<span className="close-icon"></span></a></div>
                                                        <div className="mt-40"> <span className="card-info font-sm color-text-paragraph-2">You can add up to 15 skills</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane fade" id="tab-my-jobs" role="tabpanel" aria-labelledby="tab-my-jobs">
                                            <h3 className="mt-0 color-brand-1 mb-50">My Jobs</h3>
                                            <div className="row display-list">
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up"><span className="flash"></span>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-5.png" alt="jobBox" /></div>
                                                                    <div className="right-info"><a className="name-job" href="">Linkedin</a><span className="location-small">Johannesburg, SA</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                                <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                                                            </div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h4><a href="#">React Native Web Developer</a></h4>
                                                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time"><span>4</span><span> mins ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                            <div className="card-2-bottom mt-20">
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
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up"><span className="flash"></span>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                                    <div className="right-info"><a className="name-job" href="">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                                <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                                                            </div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h4><a href="#">Senior System Engineer</a></h4>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time"><span>5</span><span> mins ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="card-2-bottom mt-20">
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
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up"><span className="flash"></span>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-7.png" alt="jobBox" /></div>
                                                                    <div className="right-info"><a className="name-job" href="">Nintendo</a><span className="location-small">Johannesburg, SA</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                                <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                                                            </div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h4><a href="#">Products Manager</a></h4>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> mins ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="card-2-bottom mt-20">
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
                                                <div className="col-xl-12 col-12">
                                                    <div className="card-grid-2 hover-up"><span className="flash"></span>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-md-6 col-sm-12">
                                                                <div className="card-grid-2-image-left">
                                                                    <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-8.png" alt="jobBox" /></div>
                                                                    <div className="right-info"><a className="name-job" href="">Periscope</a><span className="location-small">Johannesburg, SA</span></div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-6 text-start text-md-end pr-60 col-md-6 col-sm-12">
                                                                <div className="pl-15 mb-15 mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a></div>
                                                            </div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h4><a href="#">Lead Quality Control QA</a></h4>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time"><span>6</span><span> mins ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-10">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="card-2-bottom mt-20">
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
                                        <div className="tab-pane fade" id="tab-saved-jobs" role="tabpanel" aria-labelledby="tab-saved-jobs">
                                            <h3 className="mt-0 color-brand-1 mb-50">Saved Jobs</h3>
                                            <div className="row">
                                                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                    <div className="card-grid-2 hover-up">
                                                        <div className="card-grid-2-image-left"><span className="flash"></span>
                                                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-1.png" alt="jobBox" /></div>
                                                            <div className="right-info"><a className="name-job" href="#">LinkedIn</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">UI / UX Designer fulltime</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a><a className="btn btn-grey-small mr-5" href="#">Photoshop</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Adobe Ilustrator</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Full Stack Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">React</a><a className="btn btn-grey-small mr-5" href="#">NodeJS</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Bing Search</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Java Software Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">Python</a><a className="btn btn-grey-small mr-5" href="#">AWS</a><a className="btn btn-grey-small mr-5" href="#">Photoshop</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Dailymotion</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Frontend Developer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">Typescript</a><a className="btn btn-grey-small mr-5" href="#">Java</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Linkedin</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">React Native Web Developer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Fulltime</span><span className="card-time">4<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">Angular</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Senior System Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">PHP</a><a className="btn btn-grey-small mr-5" href="#">Android</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Nintendo</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Products Manager</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">ASP .Net</a><a className="btn btn-grey-small mr-5" href="#">Figma</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Periscope</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Lead Quality Control QA</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">Golang</a>
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
                                                            <div className="right-info"><a className="name-job" href="#">Periscope</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Lead Quality Control QA</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Full time</span><span className="card-time">6<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">Golang</a>
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

export default Profile