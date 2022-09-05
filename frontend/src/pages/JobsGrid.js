import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {
    listJobs,
    deleteJob,
    createJob,
} from '../actions/jobActions'
import { JOB_CREATE_RESET } from '../constants/jobConstants'
import ReactTimeAgo from 'react-time-ago'
import JobApply from '../components/JobApply';
import logo from '../images/kl.png'

const JobsGrid = () => {
    //const pageNumber = match.params.pageNumber || 1
    const pageNumber = 1

    const nav = useNavigate();
    const dispatch = useDispatch()

    const jobList = useSelector((state) => state.jobList)
    const { loading, error, jobs, page, pages } = jobList

    const jobDelete = useSelector((state) => state.jobDelete)
    const {
        loading: loadingDelete,
        error: errorDelete,
        success: successDelete,
    } = jobDelete

    const jobCreate = useSelector((state) => state.jobCreate)
    const {
        loading: loadingCreate,
        error: errorCreate,
        success: successCreate,
        job: createdJob,
    } = jobCreate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        dispatch({ type: JOB_CREATE_RESET })        

        // if (!userInfo || !userInfo.isAdmin) {
        //     nav('/signin')
        // }

        if (successCreate) {
            nav(`/job/${createdJob._id}/edit`)
        } else {
            dispatch(listJobs('', pageNumber))
        }
    }, [
        dispatch,
        userInfo,
        successDelete,
        successCreate,
        createdJob,
        pageNumber,
    ])

    const createJobHandler = () => {
         if (!userInfo || !userInfo.isAdmin) {
            nav('/signin')
        }
        dispatch(createJob())
    }


    return (
        <div>
            <JobApply/>
            <main className="main">
                <section className="section-box-2">
                    <div className="container">
                        <div className="banner-hero banner-single banner-single-bg">
                            <div className="block-banner text-center">
                                <h3 className="wow animate__ animate__fadeInUp animated" style={{ visibility: `visible`, animationName: `fadeInUp` }}><span className="color-brand-2">Jobs</span> Available Now</h3>
                                <div className="font-sm color-text-paragraph-2 mt-10 wow animate__ animate__fadeInUp animated" data-wow-delay=".1s" style={{ visibility: `visible`, animationDelay: `0.1s`, animationName: `fadeInUp` }}>Explore the latest jobs, earn cash</div>

                                <button onClick={createJobHandler} className="btn btn-default btn-find font-sm mt-50">Create A Job</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-box mt-30">
                    <div className="container">
                        <div className="row flex-row-reverse">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12 float-right">
                                <div className="content-page">
                                    <div className="box-filters-job">
                                        <div className="row">
                                            <div className="col-xl-6 col-lg-5"><span className="text-small text-showing">Showing <strong>1-12 </strong>of <strong>{jobs.length} </strong>jobs</span></div>
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
                                                    <div className="box-view-type"><a className="view-type" href="#"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-list.svg" alt="jobBox" /></a><a className="view-type" href="#"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-grid-hover.svg" alt="jobBox" /></a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        {jobs?.map((job) => (
                                            <div key={job._id} className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
                                                <div className="card-grid-2 hover-up">
                                                    
                                                    <div className="card-block-info">
                                                        <h6 className="mt-30"><Link to={`/job/${job._id}/detail`}>{job.title}</Link></h6>
                                                       
                                                        <p className="font-sm color-text-paragraph mt-15">{job.description}</p>
                                                        <div className="mt-30"><a className="btn btn-grey-small mr-5" href="#">Adobe XD</a><a className="btn btn-grey-small mr-5" href="#">Figma</a><a className="btn btn-grey-small mr-5" href="#">Photoshop</a>
                                                        </div>
                                                        <div className="card-2-bottom mt-30">
                                                            <div className="row">
                                                                <div className="col-lg-7 col-7"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                                <div className="col-lg-5 col-5 text-end">
                                                                    <a className="btn btn-apply-now" data-bs-toggle="modal" data-bs-target="#ModalApplyJobForm">Submit Offer</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="card-grid-2-image-left"><span className="flash"></span>
                                                        <div className="image-box"><img src={logo} width="50" alt="jobBox" /></div>
                                                        <div className="right-info"><a className="name-job" href="#">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</a><span className="location-small">Johannesburg, SA</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
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
                </section>
            </main>
        </div>
    )
}

export default JobsGrid