import { Typography } from 'antd'
import react from 'react'
import { ExgausterCard } from '../ExgausterCard'
import './style.css'

interface IAlgo {
    first_exgauster: string;
    second_exgauster: string;
}

export const TheAlgoMachineCard: react.FC<IAlgo> = (props) => {

    return <div className='algo-machine__container'>
        <div className="algo-machine__header">
            <Typography.Text strong style={{color: '#6E6E6D'}}>Алгомашина №1</Typography.Text> 
        </div>
        <div className="exgausters">
            <ExgausterCard name={props.first_exgauster}></ExgausterCard>
            <ExgausterCard name={props.second_exgauster}></ExgausterCard>
        </div>
    </div>
}