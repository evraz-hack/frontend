import { Button, Collapse, Divider, Tag, Typography } from 'antd'
import react from 'react'
import {RightOutlined} from '@ant-design/icons';
import './style.css'
import { BriefExgausterScheme } from '../BriefExgausterScheme';
import { BearingCard } from '../BearingCard';
import { useNavigate } from 'react-router-dom';
import { useAppSelector } from '../../store';
import { fields } from '../../store/slices/FieldMappingSlice';
const { Panel } = Collapse;

interface IExgauster {
    name: string;
}

export const ExgausterCard: react.FC<IExgauster> = (props) => {
    const navigate = useNavigate();
    const retrieveFields = useAppSelector(fields)

    var ex_fields = Array.from(new Set(
        retrieveFields.filter(
                (e) => e.parent == props.name
                ).filter(e => {
                    return typeof e.entity_name == 'string'
                }).map(
                    (e) => e.entity_name
            ).filter((e) => typeof e == 'string')
        )
    )
    var fieldsMap = new Map<string, Set<string>>();
    ex_fields.map((e) => {fieldsMap.set(e, new Set())})
    retrieveFields.filter((e) => {
        return e.parent == props.name && typeof e.entity_name == 'string'
    }).filter((e) => e.entity_name.split(' ')[0] == 'Подшипник').map((e) => {
        var type = "temp";
        if (e.name.split(' ')[1].toLowerCase() == 'вибрация') type = 'vibration';
        (fieldsMap as any).get(e.entity_name).add(type);
        
    });
    return <div className='ex-card__container'>
        <div className="ex-card__heading">
            <div className="status">
                <div className="status-content"></div>
                <Typography.Text style={{color: 'white'}} strong>{props.name}</Typography.Text>
            </div>
            <Button icon={<RightOutlined />} onClick={() => {
                navigate(`/exgauster/${props.name}/mnemoscheme`)
            }}/>
        </div>
        <div className="ex-card__content">
            <div className="rotor-info">
                <div className="rotor-name">
                    <Typography.Text style={{fontSize: '16px'}} strong>Имя ротора</Typography.Text>
                    <Tag>12.02.2022</Tag>
                    
                </div>
                <Typography.Text 
                        style={{
                            textDecoration: 'underline', 
                            textDecorationStyle: 'dotted', 
                            color: '#8E4D9B',
                        }}
                    >Изменить</Typography.Text>
            </div>
            <Divider></Divider>
            <BriefExgausterScheme />
            <Collapse style={{width: '100%', marginTop: '20px'}}>
                <Panel header='Предупреждение' key='1'>
                    <div className="br__cont">
                        <BearingCard 
                            tags={
                                [
                                    {
                                        name: "temp",
                                        type: "bare"
                                    }
                                ]
                            }
                            name="Подшипник 3"
                        />
                        <BearingCard 
                            tags={
                                [
                                    {
                                        name: "temp",
                                        type: "bare"
                                    }
                                ]
                            }
                            name="Подшипник 3"
                        />
                    </div>
                </Panel>
                <Panel header='Все подшипники' key='2'>
                    <div className="br__cont">
                        {
                            ex_fields.map((e) => {
                                return <BearingCard 
                                    name={e}
                                    tags={
                                        Array.from(fieldsMap.get(e) as any).map((e) => {
                                            return {
                                                type: 'bare',
                                                name: e as any
                                            }
                                        })
                                    }
                                />
                            })
                        }
                    </div>
                </Panel>
            </Collapse>
        </div>
   </div>
}