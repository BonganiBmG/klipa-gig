import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="section-box">
        <div className="banner-hero hero-2 hero-3">
          <div className="banner-inner">
            <div className="block-banner">
              <h1 className="text-42 color-white wow animate__ animate__fadeInUp animated" style={{visibility: `visible`, animationName: `fadeInUp`}}>The #1 <span className="color-green">Job Board for</span><br className="d-none d-lg-block"/>Hiring or Find your next job</h1>
              <div className="font-lg font-regular color-white mt-20 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{visibility: `visible`, animationDelay: `0.1s`, animationName: `fadeInUp`}}>Each month, more than 3 million job seekers turn to website in their search for work, making over 140,000 applications every single day</div>
              <div className="form-find mt-40 wow animate__ animate__fadeIn animated" data-wow-delay=".2s" style={{visibility: `visible`, animationDelay: `0.2s`, animationName: `fadeIn`}}>
                <form>
                  <div className="box-industry">
                    <select className="form-input mr-10 select-active input-industry select2-hidden-accessible" data-select2-id="1" tabindex="-1" aria-hidden="true">
                      <option value="0" data-select2-id="3">Industry</option>
                      <option value="1">Software</option>
                      <option value="2">Finance</option>
                      <option value="3">Recruting</option>
                      <option value="4">Management</option>
                      <option value="5">Advertising</option>
                      <option value="6">Development</option>
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{width: `149.641px`}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-zrvx-container"><span className="select2-selection__rendered" id="select2-zrvx-container" role="textbox" aria-readonly="true" title="Industry">Industry</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <select className="form-input mr-10 select-active select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="6">Location</option>
                    <option value="ZA">South Africa</option>
                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{width: `128.25px`}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-cfrp-container"><span className="select2-selection__rendered" id="select2-cfrp-container" role="textbox" aria-readonly="true" title="Location">Location</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                  <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... "/>
                  <button className="btn btn-default btn-find font-sm">Search</button>
                </form>
              </div>
              <div className="list-tags-banner mt-20 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{visibility: `visible`, animationDelay: `0.3s`, animationName: `fadeInUp`}}><strong>Popular Searches:</strong><a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>, <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>, <a href="#">Engineer</a></div>
            </div>
          </div>
          <div className="container mt-60">
            <div className="box-swiper mt-50">
              <div className="swiper-container swiper-group-5 swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                <div className="swiper-wrapper pb-25 pt-5" id="swiper-wrapper-a8f8bffcf8d96aa8" aria-live="off" style={{transform: `translate3d(-4023px, 0px, 0px)`, transitionDuration: `0ms`}}><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="5" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="6 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/management.svg"/></div>
                        <div className="text-info-right">
                          <h4>Management</h4>
                          <p className="font-xs">965<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="6" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="7 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/retail.svg"/></div>
                        <div className="text-info-right">
                          <h4>Retail &amp; Products</h4>
                          <p className="font-xs">563<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="7" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="8 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/security.svg"/></div>
                        <div className="text-info-right">
                          <h4>Security Analyst</h4>
                          <p className="font-xs">254<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="8" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="9 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/content.svg"/></div>
                        <div className="text-info-right">
                          <h4>Content Writer</h4>
                          <p className="font-xs">142<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="9" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="10 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/research.svg"/></div>
                        <div className="text-info-right">
                          <h4>Market Research</h4>
                          <p className="font-xs">532<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up swiper-slide-duplicate-active" data-swiper-slide-index="0" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="1 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/marketing.svg"/></div>
                        <div className="text-info-right">
                          <h4>Marketing &amp; Sale</h4>
                          <p className="font-xs">1526<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up swiper-slide-duplicate-next" data-swiper-slide-index="1" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="2 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/customer.svg"/></div>
                        <div className="text-info-right">
                          <h4>Customer Help</h4>
                          <p className="font-xs">185<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="2" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="3 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/finance.svg"/></div>
                        <div className="text-info-right">
                          <h4>Finance</h4>
                          <p className="font-xs">168<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="3" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="4 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/lightning.svg"/></div>
                        <div className="text-info-right">
                          <h4>Software</h4>
                          <p className="font-xs">1856<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="4" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="5 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/human.svg"/></div>
                        <div className="text-info-right">
                          <h4>Human Resource</h4>
                          <p className="font-xs">165<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="5" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="6 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/management.svg"/></div>
                        <div className="text-info-right">
                          <h4>Management</h4>
                          <p className="font-xs">965<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="6" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="7 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/retail.svg"/></div>
                        <div className="text-info-right">
                          <h4>Retail &amp; Products</h4>
                          <p className="font-xs">563<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="7" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="8 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/security.svg"/></div>
                        <div className="text-info-right">
                          <h4>Security Analyst</h4>
                          <p className="font-xs">254<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up" data-swiper-slide-index="8" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="9 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/content.svg"/></div>
                        <div className="text-info-right">
                          <h4>Content Writer</h4>
                          <p className="font-xs">142<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                  <div className="swiper-slide hover-up swiper-slide-prev" data-swiper-slide-index="9" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="10 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/research.svg"/></div>
                        <div className="text-info-right">
                          <h4>Market Research</h4>
                          <p className="font-xs">532<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div>
                <div className="swiper-slide hover-up swiper-slide-duplicate swiper-slide-active" data-swiper-slide-index="0" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="1 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/marketing.svg"/></div>
                        <div className="text-info-right">
                          <h4>Marketing &amp; Sale</h4>
                          <p className="font-xs">1526<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate swiper-slide-next" data-swiper-slide-index="1" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="2 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/customer.svg"/></div>
                        <div className="text-info-right">
                          <h4>Customer Help</h4>
                          <p className="font-xs">185<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="2" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="3 / 10"><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/finance.svg"/></div>
                        <div className="text-info-right">
                          <h4>Finance</h4>
                          <p className="font-xs">168<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="3" style={{width: `253.2px`, marginRight: `15px`}} role="group" aria-label="4 / 10"><a href="jobs-list.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/lightning.svg"/></div>
                        <div className="text-info-right">
                          <h4>Software</h4>
                          <p className="font-xs">1856<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div><div className="swiper-slide hover-up swiper-slide-duplicate" data-swiper-slide-index="4" role="group" aria-label="5 / 10" style={{width: `253.2px`, marginRight: `15px`}}><a href="jobs-grid.html">
                      <div className="item-logo">
                        <div className="image-left"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/human.svg"/></div>
                        <div className="text-info-right">
                          <h4>Human Resource</h4>
                          <p className="font-xs">165<span> Jobs Available</span></p>
                        </div>
                      </div></a>
                  </div></div>
                <div className="swiper-pagination swiper-pagination-style-2 swiper-pagination-custom swiper-pagination-horizontal"><span className="swiper-pagination-customs swiper-pagination-customs-active"></span><span className="swiper-pagination-customs"></span><span className="swiper-pagination-customs"></span><span className="swiper-pagination-customs"></span><span className="swiper-pagination-customs"></span></div>
              <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner