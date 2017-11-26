/**
 * Created by tabish on 11/26/17.
 */
import { CallAction } from './common'
import { GET_USER } from '../constants'

export const getUser = () => dispatch =>
    dispatch(CallAction(GET_USER,[]));