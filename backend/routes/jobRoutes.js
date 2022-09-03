import express from 'express'
const router = express.Router()
import {
  getJobs,
  getJobById,
  deleteJob,
  createJob,
  updateJob,
  createJobReview,
  getTopJobs,
} from '../controllers/jobController.js'
import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getJobs).post(protect, admin, createJob)
router.route('/:id/reviews').post(protect, createJobReview)
router.get('/top', getTopJobs)
router
  .route('/:id')
  .get(getJobById)
  .delete(protect, admin, deleteJob)
  .put(protect, admin, updateJob)

export default router
