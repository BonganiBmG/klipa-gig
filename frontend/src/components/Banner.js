import React from 'react'

const Banner = () => {
  return (
    <div>
        <section className="section-box">
        <div className="banner-hero hero-2">
          <div className="banner-inner">
            <div className="block-banner">
              <h1 className="text-42 color-white wow animate__ animate__fadeInUp animated" style={{visibility: `visible`, animationame: `fadeInUp`}}>The #1 <span className="color-green">Gig Economy</span><br className="d-none d-lg-block"/>Hire or Find your next job</h1>
              <div className="form-find mt-40 wow animate__ animate__fadeIn animated" data-wow-delay=".2s" style={{visibility: `visible`, animationDelay: `0.2s`, animationName: `fadeIn`}}>
                <form>
                  <input className="form-input input-keysearch mr-10" type="text" placeholder="I need a website"/>
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