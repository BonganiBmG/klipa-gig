import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    listJobDetails,
    createJobReview,
} from '../actions/jobActions'
import { JOB_CREATE_REVIEW_RESET } from '../constants/jobConstants'
import { useNavigate, useParams } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago'
import JobApply from '../components/JobApply';

const JobDetails = () => {
    const jobId = useParams();
    const [qty, setQty] = useState(1)
    const [rating, setRating] = useState(0)
    const [comment, setComment] = useState('')

    const dispatch = useDispatch()

    const jobDetails = useSelector((state) => state.jobDetails)
    const { loading, error, job } = jobDetails

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    const jobReviewCreate = useSelector((state) => state.jobReviewCreate)
    const {
        success: successJobReview,
        loading: loadingJobReview,
        error: errorJobReview,
    } = jobReviewCreate

    useEffect(() => {
        // if (successJobReview) {
        //     setRating(0)
        //     setComment('')
        // }
        if (!job._id || job._id !== jobId.id) {
            dispatch(listJobDetails(jobId.id))
            dispatch({ type: JOB_CREATE_REVIEW_RESET })
        }
    }, [dispatch, jobId, successJobReview])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            createJobReview(job.id, {
                rating,
                comment,
            })
        )
    }

    console.log(job)


    return (
        <div>
            <JobApply />
            <main className="main">
                {loading && job ? (
                    <p>Loading...</p>
                ) : (
                    <>
                        <section className="section-box-2">
                            <div className="container">
                                <div className="row mt-10">
                                    <div className="col-lg-8 col-md-12">
                                        <h3>{job.title}</h3>
                                        <div className="mt-0 mb-15"></div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 text-lg-end">
                                        <div className="btn btn-apply-icon btn-apply btn-apply-big hover-up" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                    </div>
                                </div>
                                <div className="border-bottom pt-10 pb-10"></div>
                            </div>
                        </section>
                        <section className="section-box mt-50">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-sm-12 col-12">
                                        <div className="job-overview">
                                            <h5 className="border-bottom pb-15 mb-30">Job Information</h5>
                                            <div className="row">
                                                <div className="col-md-6 d-flex">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/industry.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description industry-icon mb-10">Industry</span><strong className="small-heading">{job.category}</strong></div>
                                                </div>
                                                <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/job-level.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description joblevel-icon mb-10">Job Role</span><strong className="small-heading">Graphic Designer</strong></div>
                                                </div>
                                            </div>
                                            <div className="row mt-25">
                                                <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/salary.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description salary-icon mb-10">Budget</span><strong className="small-heading">R {job.budget}</strong></div>
                                                </div>
                                                <div className="col-md-6 d-flex">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/deadline.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description mb-10">Deadline</span><strong className="small-heading">{job.deadline}</strong></div>
                                                </div>
                                            </div>
                                            <div className="row mt-25">
                                                <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/updated.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description jobtype-icon mb-10">Updated</span><strong className="small-heading">{job.updatedAt ? (<ReactTimeAgo date={job.updatedAt} locale="en-US" />) : (<p>Loading</p>)}</strong></div>
                                                </div>
                                                <div className="col-md-6 d-flex mt-sm-15">
                                                    <div className="sidebar-icon-item"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/location.svg" alt="jobBox" /></div>
                                                    <div className="sidebar-text-info ml-10"><span className="text-description mb-10">Location</span><strong className="small-heading">Johannesburg, SA</strong></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-single">
                                            <h4>Job Description</h4>
                                            {job.description}
                                        </div>
                                        <div className="single-apply-jobs">
                                            <div className="row align-items-center">
                                                <div className="col-md-5"><a className="btn btn-default mr-15" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</a><a className="btn btn-border" href="#">Save job</a></div>
                                                <div className="col-md-7 text-lg-end social-share">
                                                    <h6 className="color-text-paragraph-2 d-inline-block d-baseline mr-10">Share this</h6><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/share-fb.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/share-tw.svg" /></a><a className="mr-5 d-inline-block d-middle" href="#"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/share-red.svg" /></a><a className="d-inline-block d-middle" href="#"><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/share-whatsapp.svg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-12 col-sm-12 col-12 pl-40 pl-lg-15 mt-lg-30">
                                        <div className="sidebar-border">
                                            <div className="sidebar-heading">
                                                <div className="avatar-sidebar">
                                                    <figure><img alt="jobBox" src="https://images.unsplash.com/photo-1519763421920-f2d769e01a37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=429&q=80" /></figure>
                                                    <div className="sidebar-info"><span className="sidebar-company">Lethabo Mokoena</span><span className="card-location">Johannesburg, SA</span><a className="link-underline mt-15" href="/jobs-grid">02 Open Jobs</a></div>
                                                </div>
                                            </div>
                                            <div className="sidebar-list-job">
                                                <div className="box-map">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0641767035154!2d28.027410525233364!3d-26.194590530481506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6c0d6957%3A0xfbe0d8fbd0b2ad62!2sTshimologong%20Precinct!5e0!3m2!1sen!2sza!4v1662280096961!5m2!1sen!2sza" width="600" height="200" style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                                <ul className="ul-disc">
                                                    <li>41 Juta Street, Braamfontein, Johannesburg, 2001</li>
                                                    <li>Phone: (123) 456-7890</li>
                                                    <li>Email: contact@mokoenabiz.com</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section-box mt-50 mb-50">
                            <div className="container">
                                <div className="text-left">
                                    <h2 className="section-title mb-10 wow animate__animated animate__fadeInUp" style={{ visibility: `visible`, animationName: `fadeInUp` }}>Projects To Get You Started</h2>
                                    <p className="font-lg color-text-paragraph-2 wow animate__animated animate__fadeInUp" style={{ visibility: `visible`, animationName: `fadeInUp` }}>Use these free resources to complete the job posted above</p>
                                </div>
                                <div className="row mt-30">
                                    <div className="col-3">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left"><span className="flash"></span>
                                                <div className="image-box"><img src="https://upload.wikimedia.org/wikipedia/en/8/86/Standard_Bank_of_South_Africa_logo.png" width="50" alt="jobBox" /></div>
                                                <div className="right-info"><a className="name-job" href="https://developer.standardbank.com/APIMarketplace/s/">Standard Bank API</a><span className="location-small">Johannesburg, SA</span></div>
                                            </div>
                                            <div className="card-block-info">
                                                <h6><a href="https://developer.standardbank.com/APIMarketplace/s/">Financial Services API</a></h6>
                                                <div className="mt-5"><span className="card-briefcase">Open Source</span><span className="card-briefcase">60 other candidates have used this</span></div>
                                                <p className="font-sm color-text-paragraph mt-15">Programmable Banking, through the Integrated Development Environment on Investec Online, allows you to deploy JavaScript code rule which executes before and after every card transaction.</p>
                                                <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">API</a>
                                                </div>
                                                <div className="card-2-bottom mt-30">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-7"><span className="card-text-price">Free</span><span className="text-muted"></span></div>
                                                        <div className="col-lg-5 col-5 text-end">
                                                            <a href="https://developer.standardbank.com/APIMarketplace/s/" className="btn btn-apply-now">Use now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left"><span className="flash"></span>
                                                <div className="image-box"><img src="https://www.mtn.com/wp-content/uploads/2022/02/MTN_2022_Logo_Black_RGB-sml.jpg" width="80" alt="jobBox" /></div>
                                                <div className="right-info"><a className="name-job" href="https://developers.mtn.com/">MTN API</a><span className="location-small">Johannesburg, SA</span></div>
                                            </div>
                                            <div className="card-block-info">
                                                <h6><a href="https://developers.mtn.com/">Financial Services API</a></h6>
                                                <div className="mt-5"><span className="card-briefcase">Open Source</span><span className="card-briefcase">60 other candidates have used this</span></div>
                                                <p className="font-sm color-text-paragraph mt-15">Programmable Banking, through the Integrated Development Environment on Investec Online, allows you to deploy JavaScript code rule which executes before and after every card transaction.</p>
                                                <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">API</a>
                                                </div>
                                                <div className="card-2-bottom mt-30">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-7"><span className="card-text-price">Free</span><span className="text-muted"></span></div>
                                                        <div className="col-lg-5 col-5 text-end">
                                                            <a href="https://developers.mtn.com/" className="btn btn-apply-now">Use now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left"><span className="flash"></span>
                                                <div className="image-box"><img src="https://is1-ssl.mzstatic.com/image/thumb/Purple118/v4/f5/5b/18/f55b184e-505e-58a9-f127-4830f1ba206b/source/512x512bb.jpg" width="50" alt="jobBox" /></div>
                                                <div className="right-info"><a className="name-job" href="https://developer.investec.com/za/getting-started">Investec API</a><span className="location-small">Johannesburg, SA</span></div>
                                            </div>
                                            <div className="card-block-info">
                                                <h6><a href="https://developer.investec.com/za/getting-started">Financial Services API</a></h6>
                                                <div className="mt-5"><span className="card-briefcase">Open Source</span><span className="card-briefcase">60 other candidates have used this</span></div>
                                                <p className="font-sm color-text-paragraph mt-15">Programmable Banking, through the Integrated Development Environment on Investec Online, allows you to deploy JavaScript code rule which executes before and after every card transaction.</p>
                                                <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">API</a>
                                                </div>
                                                <div className="card-2-bottom mt-30">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-7"><span className="card-text-price">Free</span><span className="text-muted"></span></div>
                                                        <div className="col-lg-5 col-5 text-end">
                                                            <a href="https://developer.investec.com/za/getting-started" className="btn btn-apply-now">Use now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="card-grid-2 hover-up">
                                            <div className="card-grid-2-image-left"><span className="flash"></span>
                                                <div className="image-box"><img src="https://www.go2ppo.com/wp-content/uploads/2021/03/eskom-logo.png" width="100" alt="jobBox"/></div>
                                                <div className="right-info"><a className="name-job" href="https://www.npmjs.com/package/eskom-loadshedding-api">Eskom API</a><span className="location-small">Johannesburg, SA</span></div>
                                            </div>
                                            <div className="card-block-info">
                                                <h6><a href="https://www.npmjs.com/package/eskom-loadshedding-api">Electric Services API</a></h6>
                                                <div className="mt-5"><span className="card-briefcase">Open Source</span><span className="card-briefcase">60 other candidates have used this</span></div>
                                                <p className="font-sm color-text-paragraph mt-15">Programmable Banking, through the Integrated Development Environment on Investec Online, allows you to deploy JavaScript code rule which executes before and after every card transaction.</p>
                                                <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">iOS</a><a className="btn btn-grey-small mr-5" href="#">Laravel</a><a className="btn btn-grey-small mr-5" href="#">API</a>
                                                </div>
                                                <div className="card-2-bottom mt-30">
                                                    <div className="row">
                                                        <div className="col-lg-7 col-7"><span className="card-text-price">Free</span><span className="text-muted"></span></div>
                                                        <div className="col-lg-5 col-5 text-end">
                                                            <a href="https://www.npmjs.com/package/eskom-loadshedding-api" className="btn btn-apply-now">Use now</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </>
                )}
            </main>
        </div>
    )
}

export default JobDetails