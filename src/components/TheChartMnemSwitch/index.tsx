import { Button } from 'antd'
import react from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

interface ITHeCharMnem{
    type: "mnem" | "chart";
}

export const TheChartMnemSwitch: react.FC<ITHeCharMnem> = (props) => {
    const navigate = useNavigate();

    return <div className='switch__container'>
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