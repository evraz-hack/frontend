import { Button, Typography } from 'antd'
import react, { ReactNode, ReactChild } from 'react'
import {FileOutlined} from '@ant-design/icons'
import './style.css'

interface IMainContent{
    children: ReactNode;
}


export const MainContent: react.FC<IMainContent> = (props) => {

    return <div className='main-content'>
        <div className="heading">
            <Button 
                icon={<FileOutlined />}
                type='primary'
            />
            <Typography.Text strong>Главный экран</Typography.Text>
        </div>
        <div className="content">
            {props.children}
        </div>
    </div>
}