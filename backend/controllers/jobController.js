import asyncHandler from 'express-async-handler'
import Job from '../models/jobModel.js'

// @desc    Fetch all Jobs
// @route   GET /api/Jobs
// @access  Public
const getJobs = asyncHandler(async (req, res) => {
  const pageSize = 12
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Job.countDocuments({ ...keyword })
  const jobs = await Job.find({ ...keyword }).sort({ createdAt: -1})
    .limit(pageSize)
    .skip(pageSize * (page - 1))

  res.json({ jobs, page, pages: Math.ceil(count / pageSize) })
})

// @desc    Fetch single Job
// @route   GET /api/Jobs/:id
// @access  Public
const getJobById = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)

  if (job) {
    res.json(job)
  } else {
    res.status(404)
    throw new Error('Job not found')
  }
})

// @desc    Delete a Job
// @route   DELETE /api/Jobs/:id
// @access  Private/Admin
const deleteJob = asyncHandler(async (req, res) => {
  const job = await Job.findById(req.params.id)

  if (job) {
    await job.remove()
    res.json({ message: 'Job removed' })
  } else {
    res.status(404)
    throw new Error('Job not found')
  }
})

// @desc    Create a Job
// @route   POST /api/Jobs
// @access  Private/Admin
const createJob = asyncHandler(async (req, res) => {
  const job = new Job({
    user: req.user._id,
    title: 'I need a website',
    description: 'Sample description',
    category: 'Default',
    budget: 0
  })

  const createdJob = await job.save()
  res.status(201).json(createdJob)
})

// @desc    Update a Job
// @route   PUT /api/Jobs/:id
// @access  Private/Admin
const updateJob = asyncHandler(async (req, res) => {
  const {
    title,
    description,
    category,
    budget,
  } = req.body

  const job = await Job.findById(req.params.id)

  if (job) {
    job.title = title
    job.description = description
    job.category = category
    job.budget = budget

    const updatedJob = await job.save()
    res.json(updatedJob)
  } else {
    res.status(404)
    throw new Error('Job not found')
  }
})

// @desc    Create new review
// @route   POST /api/Jobs/:id/reviews
// @access  Private
const createJobReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body

  const job = await Job.findById(req.params.id)

  if (job) {
    const alreadyReviewed = job.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    )

    if (alreadyReviewed) {
      res.status(400)
      throw new Error('Job already reviewed')
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    }

    job.reviews.push(review)

    job.numReviews = job.reviews.length

    job.rating =
      job.reviews.reduce((acc, item) => item.rating + acc, 0) /
      job.reviews.length

    await Job.save()
    res.status(201).json({ message: 'Review added' })
  } else {
    res.status(404)
    throw new Error('Job not found')
  }
})

// @desc    Get top rated Jobs
// @route   GET /api/Jobs/top
// @access  Public
const getTopJobs = asyncHandler(async (req, res) => {
  const jobs = await Job.find({}).sort({ rating: -1 }).limit(3)

  res.json(jobs)
})

export {
  getJobs,
  getJobById,
  deleteJob,
  createJob,
  updateJob,
  createJobReview,
  getTopJobs,
}
