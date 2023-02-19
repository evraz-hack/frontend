import { Typography } from 'antd'
import react from 'react'
import { Temperature, Vibration } from './status'
import './style.css'

interface IBearingCard {
    name: string;
    tags: {
        name: "temp" | "vibration" | "oil", 
        type: "danger" | "bare" | "warning"
    }[]
}

export const BearingCard: react.FC<IBearingCard> = (props) => {
    const cardMapping = {
        "temp": (type: "danger" | "bare" | "warning") => <Temperature state={type}/>,
        "vibration": (type: "danger" | "bare" | "warning") => <Vibration state={type}/>
    }
    return <div className='b-card__container'>
        <Typography.Text>{props.name}</Typography.Text>
        <div className="tags">
            {
                props.tags.map((e) => {
                    return ((cardMapping as any)![e.name as any] as any)(e.type)
                })
            }
        </div>
   </div>
}