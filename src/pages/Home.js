import React from 'react'
import Header from '../components/Header';
import Banner from '../components/Banner';
import TopJobs from '../components/TopJobs';
import TopCandidates from '../components/TopCandidates';

const Home = () => {
  return (
    <div>
      <Banner/>
      <TopJobs/>
      <TopCandidates/>
    </div>
  )
}

export default Home