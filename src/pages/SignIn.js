import React from 'react'

const SignIn = () => {
    return (
        <div>
            <main className="main">
                <section className="pt-100 login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Welcome back! </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Member Login</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                    <button className="btn social-login hover-up mb-20"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-google.svg" alt="jobbox" /><strong>Sign in with Google</strong></button>
                                    <div className="divider-text-center"><span>Or continue with</span></div>
                                </div>
                                <form className="login-register text-start mt-20" action="#">
                                    <div className="form-group">
                                        <label className="form-label" for="input-1">Username or Email address *</label>
                                        <input className="form-control" id="input-1" type="text" required="" name="fullname" placeholder="Steven Job" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" for="input-4">Password *</label>
                                        <input className="form-control" id="input-4" type="password" required="" name="password" placeholder="************" />
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox" /><span className="text-small">Remenber me</span><span className="checkmark"></span>
                                        </label><a className="text-muted" href="page-contact.html">Forgot Password</a>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Login</button>
                                    </div>
                                    <div className="text-muted text-center">Don't have an Account? <a href="page-signin.html">Sign up</a></div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block"><img className="shape-1" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/login-register/img-4.svg" alt="JobBox" /></div>
                            <div className="img-2"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/login-register/img-3.svg" alt="JobBox" /></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SignIn