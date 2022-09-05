import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listJobs } from '../actions/jobActions'
import ReactTimeAgo from 'react-time-ago'
import logo from '../images/kl.png'

const TopJobs = () => {
    const keyword = ""
    const pageNumber = 1

    const dispatch = useDispatch()

    const jobList = useSelector((state) => state.jobList)
    const { loading, error, jobs, page, pages } = jobList

    useEffect(() => {
        dispatch(listJobs(keyword, pageNumber))
    }, [dispatch, keyword, pageNumber])

    return (
        <div>
            <section className="section-box mt-70">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-title mb-10 wow animate__ animate__fadeInUp animated" style={{ visibility: `visible`, animationName: `fadeInUp` }}>Jobs of the day</h2>
                        <p className="font-lg color-text-paragraph-2 wow animate__ animate__fadeInUp animated" style={{ visibility: `visible`, animationName: `fadeInUp` }}>Search and connect with the right candidates faster.</p>
                        <div className="list-tabs mt-40">
                            <ul className="nav nav-tabs" role="tablist">
                                <li><a className="active" id="nav-tab-job-1" href="#tab-job-1" data-bs-toggle="tab" role="tab" aria-controls="tab-job-1" aria-selected="true"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/management.svg" alt="jobBox" /> Web Development</a></li>
                                <li><a id="nav-tab-job-2" href="#tab-job-2" data-bs-toggle="tab" role="tab" aria-controls="tab-job-2" aria-selected="false"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/marketing.svg" alt="jobBox" /> Marketing &amp; Sales</a></li>
                                <li><a id="nav-tab-job-3" href="#tab-job-3" data-bs-toggle="tab" role="tab" aria-controls="tab-job-3" aria-selected="false"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/finance.svg" alt="jobBox" />Graphic Design</a></li>
                                <li><a id="nav-tab-job-4" href="#tab-job-4" data-bs-toggle="tab" role="tab" aria-controls="tab-job-4" aria-selected="false"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/human.svg" alt="jobBox" />Social Influencer Collaborations</a></li>
                                <li><a id="nav-tab-job-5" href="#tab-job-5" data-bs-toggle="tab" role="tab" aria-controls="tab-job-5" aria-selected="false"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/retail.svg" alt="jobBox" />Promotions</a></li>
                                <li><a id="nav-tab-job-6" href="#tab-job-6" data-bs-toggle="tab" role="tab" aria-controls="tab-job-6" aria-selected="false"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/homepage1/content.svg" alt="jobBox" /> Content Writer</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-50">
                        <div className="tab-content" id="myTabContent-1">
                            <div className="tab-pane fade show active" id="tab-job-1" role="tabpanel" aria-labelledby="tab-job-1">
                                <div className="row">
                                    {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-job-2" role="tabpanel" aria-labelledby="tab-job-2">
                                <div className="row">
                                {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-job-3" role="tabpanel" aria-labelledby="tab-job-3">
                                <div className="row">
                                   {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-job-4" role="tabpanel" aria-labelledby="tab-job-4">
                                <div className="row">
                                   {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-job-5" role="tabpanel" aria-labelledby="tab-job-5">
                                <div className="row">
                                   {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="tab-pane fade" id="tab-job-6" role="tabpanel" aria-labelledby="tab-job-6">
                                <div className="row">
                                   {jobs?.map((job) => (
                                        <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12">
                                            <div className="card-grid-2 grid-bd-16 hover-up">
                                                <div className="card-block-info pt-25">
                                                    <h6><a href={`/job/${job._id}/detail`}>{job.title}</a></h6>
                                                   
                                                    <div className="mb-20"><span className="card-time"><ReactTimeAgo date={job.createdAt} locale="en-US"/></span></div>

                                                    <span className="mt-40">{job.description}</span>
                                                    <div className="mt-20 border-bottom pb-20"><a className="btn btn-grey-small bg-14 mb-5 mr-5" href="#">{job.category}</a>
                                                    </div>
                                                    <div className="card-2-bottom mt-20">
                                                        <div className="row">
                                                            <div className="col-lg-7 col-md-7">
                                                                <div className="d-flex"><img className="img-rounded" src={logo} alt="jobBox" />
                                                                    <div className="info-right-img">
                                                                        <h6 className="color-brand-1 lh-14">{job.deadline ? (<>Deadline: <ReactTimeAgo date={job.deadline} locale="en-US"/></>) : (<span>Deadline</span>)}</h6><span className="card-location font-xxs pl-15 color-text-paragraph-2">Johannesburg, SA</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-5 col-md-5 text-end"><span className="card-text-price">R{job.budget}</span><span className="text-muted"></span></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default TopJobs