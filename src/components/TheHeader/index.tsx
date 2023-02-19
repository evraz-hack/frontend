import react from 'react'
import {Breadcrumb, Button, Divider, Typography} from 'antd'
import {MenuOutlined} from '@ant-design/icons'
import './style.css'
import { Logo } from './Logo'

export const TheHeader: react.FC = () => {

    return <div className='header__container'>
        <div className="menu-item">
            <Button 
                icon={<MenuOutlined />}
                type='primary'
                size='large'
            />
            <Divider type='vertical' style={{height: '36px'}} />
            <Logo />
            <Breadcrumb style={{paddingLeft: '30px'}}>
                <Breadcrumb.Item>
                    <Typography.Text strong>Прогнозная аналитика эксгаустеров</Typography.Text>
                </Breadcrumb.Item>
            </Breadcrumb>
        </div>

        <div className="menu-item">
            <Button type='primary'>
                <Typography.Text strong>Справочник</Typography.Text>
            </Button>
        </div>
        
    </div>
}