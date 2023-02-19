import react from 'react'
import {Button, DatePicker} from 'antd';
import { useNavigate } from 'react-router-dom';
import './style.css'

const {RangePicker} = DatePicker;

interface ISwitcher{
    type: "mnem" | "chart"
}

export const TheTimestampedSwitcher: react.FC<ISwitcher> = (props) => {
    const navigate = useNavigate();

    return <div className="time-switch__container">
        <div className="timestamps">
            <RangePicker></RangePicker>
        </div>
        <div className="switch-flex">
            <Button 
                type={props.type == 'mnem' ? 'primary' : 'default'}
                onClick={() => {
                    navigate('/exgauster/1/mnemoscheme')
                }}
            >
                Мнемосхема
            </Button>
            <Button 
                type={props.type == 'chart' ? 'primary' : 'default'}
                onClick={() => {
                    navigate('/exgauster/1/graph')
                }}
            >
                График
            </Button>
        </div>
    </div> 
}