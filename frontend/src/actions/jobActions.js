import axios from 'axios'
import {
  JOB_LIST_REQUEST,
  JOB_LIST_SUCCESS,
  JOB_LIST_FAIL,
  JOB_DETAILS_REQUEST,
  JOB_DETAILS_SUCCESS,
  JOB_DETAILS_FAIL,
  JOB_DELETE_SUCCESS,
  JOB_DELETE_REQUEST,
  JOB_DELETE_FAIL,
  JOB_CREATE_REQUEST,
  JOB_CREATE_SUCCESS,
  JOB_CREATE_FAIL,
  JOB_UPDATE_REQUEST,
  JOB_UPDATE_SUCCESS,
  JOB_UPDATE_FAIL,
  JOB_CREATE_REVIEW_REQUEST,
  JOB_CREATE_REVIEW_SUCCESS,
  JOB_CREATE_REVIEW_FAIL,
  JOB_TOP_REQUEST,
  JOB_TOP_SUCCESS,
  JOB_TOP_FAIL,
} from '../constants/jobConstants'
import { logout } from './userActions'

export const listJobs = (keyword = '', pageNumber = '') => async (
  dispatch
) => {
  try {
    dispatch({ type: JOB_LIST_REQUEST })

    const { data } = await axios.get(
      `/api/jobs?keyword=${keyword}&pageNumber=${pageNumber}`
    )

    dispatch({
      type: JOB_LIST_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: JOB_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const listJobDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: JOB_DETAILS_REQUEST })

    const { data } = await axios.get(`/api/jobs/${id}`)

    dispatch({
      type: JOB_DETAILS_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: JOB_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteJob = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOB_DELETE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.delete(`/api/jobs/${id}`, config)

    dispatch({
      type: JOB_DELETE_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: JOB_DELETE_FAIL,
      payload: message,
    })
  }
}

export const createJob = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOB_CREATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.post(`/api/jobs`, {}, config)

    dispatch({
      type: JOB_CREATE_SUCCESS,
      payload: data,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: JOB_CREATE_FAIL,
      payload: message,
    })
  }
}

export const updateJob = (job) => async (dispatch, getState) => {
  try {
    dispatch({
      type: JOB_UPDATE_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    const { data } = await axios.put(
      `/api/jobs/${job._id}`,
      job,
      config
    )

    dispatch({
      type: JOB_UPDATE_SUCCESS,
      payload: data,
    })
    dispatch({ type: JOB_DETAILS_SUCCESS, payload: data })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: JOB_UPDATE_FAIL,
      payload: message,
    })
  }
}

export const createJobReview = (jobId, review) => async (
  dispatch,
  getState
) => {
  try {
    dispatch({
      type: JOB_CREATE_REVIEW_REQUEST,
    })

    const {
      userLogin: { userInfo },
    } = getState()

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userInfo.token}`,
      },
    }

    await axios.post(`/api/jobs/${jobId}/reviews`, review, config)

    dispatch({
      type: JOB_CREATE_REVIEW_SUCCESS,
    })
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message
    if (message === 'Not authorized, token failed') {
      dispatch(logout())
    }
    dispatch({
      type: JOB_CREATE_REVIEW_FAIL,
      payload: message,
    })
  }
}

export const listTopJobs = () => async (dispatch) => {
  try {
    dispatch({ type: JOB_TOP_REQUEST })

    const { data } = await axios.get(`/api/jobs/top`)

    dispatch({
      type: JOB_TOP_SUCCESS,
      payload: data,
    })
  } catch (error) {
    dispatch({
      type: JOB_TOP_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
