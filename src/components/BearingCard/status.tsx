import { Tag, Typography } from 'antd'
import react from 'react'
import { BareTemp } from './icons/temperature/BareTemp'
import { DangerTemp } from './icons/temperature/DangerTemp'
import { WarningTemp } from './icons/temperature/WarningTemp'
import { BareVibration } from './icons/vibration/BareVibration'
import { DangerVibration } from './icons/vibration/DangerVibration'
import { WarningVibration } from './icons/vibration/WarningVibration'
import './style.css'

interface IIcon{
    state: "bare" | "warning" | "danger"
}

export const Temperature: react.FC<IIcon> = (props) => {
    var icons = {
        "bare": <BareTemp />,
        "warning": <WarningTemp />,
        "danger": <DangerTemp />
    }
    var colors = {
        "bare": "#F4F4F4",
        "warning": "#FEF1DB",
        "danger": "#FCDBCB"
    }
    var borderColors = {
        "bare": "#868686",
        "warning": "#F69112",
        "danger": "#EB5835"
    }
    return <div style={{
        backgroundColor: colors[props.state],
        border: `1px solid ${borderColors[props.state]}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        borderRadius: '5px'
    }}>
        {icons[props.state]}
        <Typography.Text>T</Typography.Text>
    </div>
}

export const Vibration: react.FC<IIcon> = (props) => {
    var icons = {
        "bare": <BareVibration />,
        "warning": <WarningVibration />,
        "danger": <DangerVibration />
    }
    var colors = {
        "bare": "#F4F4F4",
        "warning": "#FEF1DB",
        "danger": "#FCDBCB"
    }
    var borderColors = {
        "bare": "#868686",
        "warning": "#F69112",
        "danger": "#EB5835"
    }
    return <div style={{
        backgroundColor: colors[props.state],
        border: `1px solid ${borderColors[props.state]}`,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        borderRadius: '5px'
    }}>
        {icons[props.state]}
        <Typography.Text>V</Typography.Text>
    </div>
}