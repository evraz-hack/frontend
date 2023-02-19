import axios from 'axios'
import { origin } from '../config'

export const getChartData = async (fromDate: Date, toDate: Date, interval: number, signals: string[]) => {
    return await axios.post(origin + 'exgausters/approximation', {
        "approximation": 10,
        "time_from": "2023-01-19T00:00:42.444Z",
        "time_until": "2023-02-19T00:00:42.444Z",
        "signals": signals
    })
}