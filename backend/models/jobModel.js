import mongoose from 'mongoose'

const jobSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    budget: {
      type: Number,
      required: true,
      default: 0,
    },
    deadline: {
      type: Date,
    },
  },
  {
    timestamps: true,
  }
)

const Job = mongoose.model('job', jobSchema)

export default Job
