import { call } from 'redux-saga/effects'

const errorHandle = (error) => {
  console.error(error)
}

export const errorWrapper = saga => function *(action) {
  try {
    yield call(saga, action)
  } catch (error) {
    yield call(errorHandle, error)
  }
}
