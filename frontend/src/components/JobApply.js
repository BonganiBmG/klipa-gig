import React from 'react'

const JobApply = () => {
    return (
        <div>
            <div className="modal fade" id="ModalApplyJobForm" tabindex="-1" style={{ display: `none` }} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content apply-job-form">
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body pl-30 pr-30 pt-50">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Job Application </p>
                                <h2 className="mt-10 mb-5 text-brand-1 text-capitalize">Start your career today</h2>
                                <p className="font-sm text-muted mb-30">Please fill in your information and send it to the employer.                   </p>
                            </div>
                            <form className="login-register text-start mt-20 pb-30" action="#">
                                <div className="form-group">
                                    <label className="form-label" for="input-1">Full Name *</label>
                                    <input className="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Lethabo Mokoena" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="input-2">Email *</label>
                                    <input className="form-control" id="input-2" type="email" required="" name="emailaddress" placeholder="lethabomokoena@gmail.com" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="number">Contact Number *</label>
                                    <input className="form-control" id="number" type="text" required="" name="phone" placeholder="(+01) 234 567 89" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="des">Description</label>
                                    <input className="form-control" id="des" type="text" required="" name="Description" placeholder="Your description..." />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="file">Upload Resume</label>
                                    <input className="form-control" id="file" name="resume" type="file" />
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark"></span>
                                    </label><a className="text-muted" href="page-contact.html">Learn more</a>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default hover-up w-100" type="submit" name="login">Apply Job</button>
                                </div>
                                <div className="text-muted text-center">Do you need support? <a href="page-contact.html">Contact Us</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobApply