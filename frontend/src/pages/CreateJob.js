import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { listJobDetails, updateJob } from '../actions/jobActions'
import { JOB_UPDATE_RESET } from '../constants/jobConstants'

const CreateJob = () => {
    const jobId = useParams();
    //console.log(jobId.id)

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [budget, setBudget] = useState('')
    const [category, setCategory] = useState('')
    const [deadline, setDeadline] = useState('')
    const nav = useNavigate();
    const [uploading, setUploading] = useState(false)

    const dispatch = useDispatch()

    const jobDetails = useSelector((state) => state.jobDetails)
    const { loading, error, job } = jobDetails

    const jobUpdate = useSelector((state) => state.jobUpdate)
    const {
        loading: loadingUpdate,
        error: errorUpdate,
        success: successUpdate,
    } = jobUpdate

    const userLogin = useSelector((state) => state.userLogin)
    const { userInfo } = userLogin

    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            nav('/signin')
        }

        if (successUpdate) {
            dispatch({ type: JOB_UPDATE_RESET })
            nav("/jobs-grid")
            //history.push('/admin/productlist')
        } else {
            if (!job.title || job._id !== jobId.id) {
                dispatch(listJobDetails(jobId.id))
            } else {
                setTitle(job.title)
                setDescription(job.description)
                setCategory(job.category)
                setBudget(job.Budget)
            }
        }
    }, [dispatch, jobId, job, successUpdate])

    const uploadFileHandler = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)
        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            }

            const { data } = await axios.post('/api/upload', formData, config)

            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(
            updateJob({
                _id: jobId.id,
                title,
                description,
                category,
                budget,
                deadline
            })
        )
    }

    return (
        <div>
            <main className="main">
                <section className="login-register">
                    <div className="container">
                        <div className="row login-register-cover">
                            <div className="col-lg-8 col-md-6 col-sm-12 mx-auto">
                                <div className="text-center">
                                    <p className="font-sm text-brand-2">Create A Job </p>
                                    <h2 className="mt-10 mb-5 text-brand-1">Start something new for your business</h2>
                                    <p className="font-sm text-muted mb-30">Receive your first offer from a candidate within 30 minutes</p>
                                </div>
                                <form onSubmit={submitHandler} className="login-register text-start mt-20" action="#">
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-1">Title</label>
                                        <input className="form-control" id="input-1" type="text" required="" name="fullname"
                                            value={title}
                                            onChange={(e) => setTitle(e.target.value)}
                                            placeholder="I need a website" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">Description</label>
                                        <input className="form-control" id="input-2" type="text" required="" name="description"
                                            value={description}
                                            onChange={(e) => setDescription(e.target.value)}
                                            placeholder="Mobile app description" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-2">Category</label>
                                        {/* <input className="form-control" id="input-2" type="text" required="" name="category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                            placeholder="Graphic Design" /> */}
                                        <select className="form-control" value={category} onChange={(e) => setCategory(e.target.value)}>
                                            <option disabled selected value> -- select an option -- </option>
                                            <option value="Web Development">Web Development</option>
                                            <option value="Marketing and Sales">Marketing and Sales</option>
                                            <option value="Graphic Design">Graphic Design</option>
                                            <option value="Social Influencer Collaborations">Social Influencer Collaborations</option>
                                            <option value="Promotions">Promotions</option>
                                            <option value="Content Writer">Content Writer</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">Budget</label>
                                        <input className="form-control" id="input-4" type="number" required="" name="budget"
                                            value={budget}
                                            onChange={(e) => setBudget(e.target.value)}
                                            placeholder="R 100" />
                                    </div>
                                    <div className="form-group">
                                        <label className="form-label" htmlFor="input-4">Deadline</label>
                                        <input className="form-control" id="input-4" type="date" required="" name="deadline"
                                            value={deadline}
                                            onChange={(e) => setDeadline(e.target.value)}
                                            placeholder="DD/MM/YYYY" />
                                    </div>
                                    <div className="form-group">
                                        <button className="btn btn-brand-1 hover-up w-100" type="submit" name="login">Submit &amp; Create</button>
                                    </div>
                                </form>
                            </div>
                            <div className="img-2"><img src="http://wp.alithemes.com/html/jobbox/demos/assets/imgs/page/login-register/img-2.svg" alt="Klipa" /></div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

export default CreateJob