import React, { useState, useEffect } from 'react'
import { register } from '../actions/userActions'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [message, setMessage] = useState(null)
    const nav = useNavigate();

    const dispatch = useDispatch()

    const userRegister = useSelector((state) => state.userRegister)
    const { loading, error, userInfo } = userRegister

    useEffect(() => {
        if (userInfo) {
            nav("/")
        }
    }, [userInfo])

    const submitHandler = (e) => {
        e.preventDefault()
        if (password !== confirmPassword) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
    }

    return (
        <div>
            <main className="main">
                <section className="login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-4 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Register </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Start for free Today</h2>
                                    <p className="font-sm text-muted mb-30">Access to all features. No credit card required.</p>
                                    <button className="btn social-login hover-up mb-20"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/template/icons/icon-google.svg" alt="jobbox" /><strong>Sign up with Google</strong></button>
                                    <div className="divider-text-center"><span>Or continue with</span></div>
                                </div>
                                <form onSubmit={submitHandler} className="login-register text-start mt-20" action="#">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">Full Name *</label>
                                        <input className="form-control" id="input-1" type="text" required="" name="fullname"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Lethabo Mokoena" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">Email *</label>
                                        <input className="form-control" id="input-2" type="email" required="" name="emailaddress"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            placeholder="lethabomokoena@gmail.com" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">Password *</label>
                                        <input className="form-control" id="input-4" type="password" required="" name="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="************" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-5">Re-Password *</label>
                                        <input className="form-control" id="input-5" type="password" required="" name="re-password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            placeholder="************" />
                                    </div>
                                    <div className="login_footer form-group d-flex justify-content-between">
                                        <label className="cb-container">
                                            <input type="checkbox" /><span className="text-small">Agree our terms and policy</span><span className="checkmark"></span>
                                        </label><a className="text-muted" href="/contact">Learn more</a>
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Submit &amp; Register</button>
                                    </div>
                                    <div className="text-muted text-center">Already have an account? <a href="/signin">Sign in</a></div>
                                </form>
                            </div>
                            <div className="img-1 d-none d-lg-block"><img className="shape-1" src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/login-register/img-1.svg" alt="Klipa" /></div>
                            <div className="img-2"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/login-register/img-2.svg" alt="Klipa" /></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default SignUp