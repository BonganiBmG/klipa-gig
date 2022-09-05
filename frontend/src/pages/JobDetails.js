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
            <JobApply/>
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
                                                    <div className="sidebar-text-info ml-10"><span className="text-description jobtype-icon mb-10">Updated</span><strong className="small-heading">{ job.updatedAt ? (<ReactTimeAgo date={job.updatedAt} locale="en-US"/>) : (<p>Loading</p>)}</strong></div>
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
                                                    <figure><img alt="jobBox" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/job-single/avatar.png" /></figure>
                                                    <div className="sidebar-info"><span className="sidebar-company">ABC Company</span><span className="card-location">Johannesburg, SA</span><a className="link-underline mt-15" href="/jobs-grid">02 Open Jobs</a></div>
                                                </div>
                                            </div>
                                            <div className="sidebar-list-job">
                                                <div className="box-map">
                                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.0641767035154!2d28.027410525233364!3d-26.194590530481506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950c1b6c0d6957%3A0xfbe0d8fbd0b2ad62!2sTshimologong%20Precinct!5e0!3m2!1sen!2sza!4v1662280096961!5m2!1sen!2sza" width="600" height="200" style={{ border: `0` }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                                </div>
                                                <ul className="ul-disc">
                                                    <li>41 Juta Street, Braamfontein, Johannesburg, 2001</li>
                                                    <li>Phone: (123) 456-7890</li>
                                                    <li>Email: contact@alithemes</li>
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
                                <div className="mt-50">
                                    <div className="box-swiper style-nav-top">
                                        <div className="swiper-container swiper-group-4 swiper swiper-initialized swiper-horizontal swiper-pointer-events">
                                            <div className="swiper-wrapper pb-10 pt-5" id="swiper-wrapper-ba5abfe4b812dabc" aria-live="off" style={{ transform: `translate3d(-2034px, 0px, 0px)`, transitionDuration: `0ms` }}>
                                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="1 / 4">
                                                    <div className="card-grid-2 hover-up">
                                                        <div className="card-grid-2-image-left"><span className="flash"></span>
                                                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                            <div className="right-info"><a className="name-job" href="#">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Senior System Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">PHP</a><a className="btn btn-grey-small mr-5" href="#">Android    </a>
                                                            </div>
                                                            <div className="card-2-bottom mt-30">
                                                                <div className="row">
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="2 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="3 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="4 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide" data-swiper-slide-index="0" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="1 / 4">
                                                    <div className="card-grid-2 hover-up">
                                                        <div className="card-grid-2-image-left"><span className="flash"></span>
                                                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                            <div className="right-info"><a className="name-job" href="#">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Senior System Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">PHP</a><a className="btn btn-grey-small mr-5" href="#">Android    </a>
                                                            </div>
                                                            <div className="card-2-bottom mt-30">
                                                                <div className="row">
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-prev" data-swiper-slide-index="1" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="2 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-active" data-swiper-slide-index="2" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="3 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-next" data-swiper-slide-index="3" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="4 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate" data-swiper-slide-index="0" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="1 / 4">
                                                    <div className="card-grid-2 hover-up">
                                                        <div className="card-grid-2-image-left"><span className="flash"></span>
                                                            <div className="image-box"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/brands/brand-6.png" alt="jobBox" /></div>
                                                            <div className="right-info"><a className="name-job" href="#">Quora JSC</a><span className="location-small">Johannesburg, SA</span></div>
                                                        </div>
                                                        <div className="card-block-info">
                                                            <h6><a href="#">Senior System Engineer</a></h6>
                                                            <div className="mt-5"><span className="card-briefcase">Part time</span><span className="card-time">5<span> minutes ago</span></span></div>
                                                            <p className="font-sm color-text-paragraph mt-15">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae architecto eveniet, dolor quo repellendus pariatur.</p>
                                                            <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">PHP</a><a className="btn btn-grey-small mr-5" href="#">Android    </a>
                                                            </div>
                                                            <div className="card-2-bottom mt-30">
                                                                <div className="row">
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R800</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-prev" data-swiper-slide-index="1" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="2 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-active" data-swiper-slide-index="2" style={{ width: `309px`, marginRight: `30px` }} role="group" aria-label="3 / 4">
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div><div className="swiper-slide swiper-slide-duplicate swiper-slide-duplicate-next" data-swiper-slide-index="3" role="group" aria-label="4 / 4" style={{ width: `309px`, marginRight: `30px` }}>
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
                                                                    <div className="col-lg-7 col-7"><span className="card-text-price">R250</span><span className="text-muted"></span></div>
                                                                    <div className="col-lg-5 col-5 text-end">
                                                                        <div className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Apply now</div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div></div>
                                            <span className="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
                                        <div className="swiper-button-next swiper-button-next-4" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-ba5abfe4b812dabc"></div>
                                        <div className="swiper-button-prev swiper-button-prev-4" tabindex="0" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-ba5abfe4b812dabc"></div>
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