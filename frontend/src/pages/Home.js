import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import TopJobs from '../components/TopJobs';
import TopCandidates from '../components/TopCandidates';

const Home = () => {
  return (
    <div>
      <Banner />

      <div class="py-8">
        <div class="container">
          <div class="row mt-20">
          <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center">
                <img src="https://powerlearnproject.org/static/media/logo.879e78bc92c159fe77f0.png" height="50" alt=""/>
              </div>
            </div>
            
            <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center">
                <img src="https://girlcode.co.za/wp-content/uploads/2021/02/GirlCode-PNG-Files-FINAL-26012021-01.png" height="65" alt=""/>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center">
                <img src="https://mypr.co.za/wp-content/uploads/2017/08/Logo_OfferZen.png" width="200" alt=""/>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center align-middle">
                <img src="https://findsajobs.com/wp-content/uploads/2022/04/cropped-Untitled-1.png" height="50" alt=""/>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center">
                <img src="https://yes4youth.co.za/wp-content/uploads/2020/11/YES-Logo-1.png" width="250" alt=""/>
              </div>
            </div>
            <div class="col-lg-2 col-md-4 col-6">
              <div class="mb-4 text-center">
                <img src="https://www.harambee.co.za/wp-content/uploads/2021/04/download.jpeg" height="50" alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TopJobs />
      <TopCandidates />
    </div>
  )
}

export default Home