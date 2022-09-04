import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Banner = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  return (
    <div>
        <section className="section-box">
        <div className="banner-hero hero-2">
          <div className="banner-inner">
            <div className="block-banner">
              <h1 className="text-42 color-white wow animate__ animate__fadeInUp animated" style={{visibility: `visible`, animationame: `fadeInUp`}}>Hello <span className="color-green">{userInfo?.name}</span><br className="d-none d-lg-block"/>Find your next job, earn cash</h1>
              <div className="form-find mt-40 wow animate__ animate__fadeIn animated" data-wow-delay=".2s" style={{visibility: `visible`, animationDelay: `0.2s`, animationName: `fadeIn`}}>
                <form>
                  <input className="form-input input-keysearch mr-10" type="text" placeholder="I need a website"/>
                  <button className="btn btn-default btn-find font-sm">Search</button>
                </form>
              </div>
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
                    <h4 className="color-white"><span className="count">170+</span></h4>
                    <p className="font-sm color-text-mutted">Recruiters</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"> <span className="count">150+</span></h4>
                    <p className="font-sm color-text-mutted">Candidates</p>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-3 col-6 text-center mb-20">
                  <div className="d-inline-block text-start">
                    <h4 className="color-white"> <span className="count">R 10 500</span></h4>
                    <p className="font-sm color-text-mutted">Average Daily Payouts</p>
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