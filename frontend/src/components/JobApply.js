import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


const JobApply = () => {
    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    return (
        <div>
            <div className="modal fade" id="ModalApplyJobForm" tabindex="-1" style={{ display: `none` }} aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content apply-job-form">
                        <button className="btn-close" type="button" data-bs-dismiss="modal" aria-label="Close"></button>
                        <div className="modal-body pl-30 pr-30 pt-50">
                            <div className="text-center">
                                <p className="font-sm text-brand-2">Client Offer </p>
                                <h4 className="mt-10 mb-5 text-brand-1 text-capitalize">Inform the client that you have completed the job</h4>
                                <p className="font-sm text-muted mb-30">If the client agrees, then you will receive instant payment</p>
                            </div>
                            <form className="login-register text-start mt-20 pb-30" action="#">
                                <div className="form-group">
                                    <label className="form-label" for="input-1">Full Name *</label>
                                    <input className="form-control" id="input-1" type="text" required="" name="fullname" value={userInfo?.name} placeholder="Lethabo Mokoena" />
                                </div>
                                <div className="form-group">
                                    <label className="form-label" for="input-2">Email *</label>
                                    <input className="form-control" id="input-2" type="email" required="" name="emailaddress" value={userInfo?.email } placeholder="lethabomokoena@gmail.com" />
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
                                    <label className="form-label" for="file">Upload First Stage Prototype For Client</label>
                                    <input className="form-control" id="file" name="resume" type="file" />
                                </div>
                                <div className="login_footer form-group d-flex justify-content-between">
                                    <label className="cb-container">
                                        <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark"></span>
                                    </label><a className="text-muted" href="#">Learn more</a>
                                </div>
                                <div className="form-group">
                                    <button className="btn btn-default hover-up w-100" type="submit" name="login">Submit &amp; Apply</button>
                                </div>
                                <div className="text-muted text-center">Do you need support? <a href="/contact">Contact Us</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobApply