import {
    JOB_LIST_REQUEST,
    JOB_LIST_SUCCESS,
    JOB_LIST_FAIL,
    JOB_DETAILS_REQUEST,
    JOB_DETAILS_SUCCESS,
    JOB_DETAILS_FAIL,
    JOB_DELETE_REQUEST,
    JOB_DELETE_SUCCESS,
    JOB_DELETE_FAIL,
    JOB_CREATE_RESET,
    JOB_CREATE_FAIL,
    JOB_CREATE_SUCCESS,
    JOB_CREATE_REQUEST,
    JOB_UPDATE_REQUEST,
    JOB_UPDATE_SUCCESS,
    JOB_UPDATE_FAIL,
    JOB_UPDATE_RESET,
    JOB_CREATE_REVIEW_REQUEST,
    JOB_CREATE_REVIEW_SUCCESS,
    JOB_CREATE_REVIEW_FAIL,
    JOB_CREATE_REVIEW_RESET,
    JOB_TOP_REQUEST,
    JOB_TOP_SUCCESS,
    JOB_TOP_FAIL,
  } from '../constants/jobConstants'
  
  export const jobListReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
      case JOB_LIST_REQUEST:
        return { loading: true, jobs: [] }
      case JOB_LIST_SUCCESS:
        return {
          loading: false,
          jobs: action.payload.jobs,
          pages: action.payload.pages,
          page: action.payload.page,
        }
      case JOB_LIST_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const jobDetailsReducer = (
    state = { job: { reviews: [] } },
    action
  ) => {
    switch (action.type) {
      case JOB_DETAILS_REQUEST:
        return { ...state, loading: true }
      case JOB_DETAILS_SUCCESS:
        return { loading: false, job: action.payload }
      case JOB_DETAILS_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const jobDeleteReducer = (state = {}, action) => {
    switch (action.type) {
      case JOB_DELETE_REQUEST:
        return { loading: true }
      case JOB_DELETE_SUCCESS:
        return { loading: false, success: true }
      case JOB_DELETE_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  
  export const jobCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case JOB_CREATE_REQUEST:
        return { loading: true }
      case JOB_CREATE_SUCCESS:
        return { loading: false, success: true, job: action.payload }
      case JOB_CREATE_FAIL:
        return { loading: false, error: action.payload }
      case JOB_CREATE_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const jobUpdateReducer = (state = { job: {} }, action) => {
    switch (action.type) {
      case JOB_UPDATE_REQUEST:
        return { loading: true }
      case JOB_UPDATE_SUCCESS:
        return { loading: false, success: true, job: action.payload }
      case JOB_UPDATE_FAIL:
        return { loading: false, error: action.payload }
      case JOB_UPDATE_RESET:
        return { job: {} }
      default:
        return state
    }
  }
  
  export const jobReviewCreateReducer = (state = {}, action) => {
    switch (action.type) {
      case JOB_CREATE_REVIEW_REQUEST:
        return { loading: true }
      case JOB_CREATE_REVIEW_SUCCESS:
        return { loading: false, success: true }
      case JOB_CREATE_REVIEW_FAIL:
        return { loading: false, error: action.payload }
      case JOB_CREATE_REVIEW_RESET:
        return {}
      default:
        return state
    }
  }
  
  export const jobTopRatedReducer = (state = { jobs: [] }, action) => {
    switch (action.type) {
      case JOB_TOP_REQUEST:
        return { loading: true, jobs: [] }
      case JOB_TOP_SUCCESS:
        return { loading: false, jobs: action.payload }
      case JOB_TOP_FAIL:
        return { loading: false, error: action.payload }
      default:
        return state
    }
  }
  