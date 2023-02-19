import { Typography } from 'antd'
import react from 'react'
import { Temperature } from './icons/Temperature'
import { Vibration } from './icons/Vibration'
import './style.css'

interface ITheLegend{
    type?: "short" | "long"
}

export const TheLegend: react.FC<ITheLegend> = (props) => {
    var type = props.type;
    if (!props.type) type = "long";

    return <div className='legend__container'>
        <div className="legend__flex">
            {
                type == 'long' ? <>
                    <div className="legend-item">
                        <Temperature />
                        <Typography.Text>Температура</Typography.Text>
                    </div>
                    <div className="legend-item">
                        <Vibration />
                        <Typography.Text>Вибрация</Typography.Text>
                    </div>
                </>  : <></>
            }
            
            <div className="legend-item">
                <div className="warn"></div>
                <Typography.Text>Предупреждение</Typography.Text>
            </div>
            <div className="legend-item">
                <div className="danger"></div>
                <Typography.Text>Опасность</Typography.Text>
            </div>
        </div>
        
    </div> 
}