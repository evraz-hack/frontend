import axios from 'axios'
import { origin } from '../config'

export const getFields = async () => {
    return await axios.get(origin + 'exgausters/list')
}