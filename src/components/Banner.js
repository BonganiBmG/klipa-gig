import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="section-box">
        <div className="banner-hero hero-2">
          <div className="banner-inner">
            <div className="block-banner">
              <h1 className="text-42 color-white wow animate__ animate__fadeInUp animated" style={{visibility: `visible`, animationame: `fadeInUp`}}>The #1 <span className="color-green">Gig Economy Online</span><br className="d-none d-lg-block"/>Hire or Find your next job</h1>
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
                    </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="2" style={{width: `149.641px`}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-33s9-container"><span className="select2-selection__rendered" id="select2-33s9-container" role="textbox" aria-readonly="true" title="Industry">Industry</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                  </div>
                  <select className="form-input mr-10 select-active select2-hidden-accessible" data-select2-id="4" tabindex="-1" aria-hidden="true">
                    <option value="" data-select2-id="6">Location</option>
                    <option value="ZA">South Africa</option>
                  </select><span className="select2 select2-container select2-container--default" dir="ltr" data-select2-id="5" style={{width: `129.562px`}}><span className="selection"><span className="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-p0g9-container"><span className="select2-selection__rendered" id="select2-p0g9-container" role="textbox" aria-readonly="true" title="Location">Location</span><span className="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span className="dropdown-wrapper" aria-hidden="true"></span></span>
                  <input className="form-input input-keysearch mr-10" type="text" placeholder="Your keyword... "/>
                  <button className="btn btn-default btn-find font-sm">Search</button>
                </form>
              </div>
              <div className="list-tags-banner mt-20 wow animate__ animate__fadeInUp animated" data-wow-delay=".3s" style={{visibility: `visible`, animationDelay: `0.3s`, animationName: `fadeInUp`}}><strong>Popular Searches:</strong><a href="#">Designer</a>, <a href="#">Web</a>, <a href="#">IOS</a>, <a href="#">Developer</a>, <a href="#">PHP</a>, <a href="#">Senior</a>, <a href="#">Engineer</a></div>
            </div>
            <div className="mt-60">
              <div className="row">
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"> <span className="count">2650</span></h4>
                    <p className="font-sm color-text-mutted">Jobs Posted</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"><span className="count">1700</span></h4>
                    <p className="font-sm color-text-mutted">Recruiters</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"> <span className="count">1500</span></h4>
                    <p className="font-sm color-text-mutted">Freelancers</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"> <span className="count">280</span></h4>
                    <p className="font-sm color-text-mutted">Blog Tips</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Banner