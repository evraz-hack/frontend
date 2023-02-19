import react from 'react'
import { MainContent } from '../../components/MainContent'
import { TheHeader } from '../../components/TheHeader'
import { TheTimestampedSwitcher } from '../../components/TheTimestampedSwitcher'
import { Tree, Select } from 'antd';
import './style.css'
import { TheChart } from '../../components/TheChart';
import { getChartData } from '../../client/chart/post';
import { useAppDispatch, useAppSelector } from '../../store';
import { fields } from '../../store/slices/FieldMappingSlice';
import { getFieldsAction } from '../../store/slices/FieldMappingSlice/actions';

interface DataNode {
    title: string;
    key: string;
    isLeaf?: boolean;
    children?: DataNode[];
}

export const ChartPage: react.FC = () => {
    const [data, setData] = react.useState([]);
    const [selectedData, setSelectedData] = react.useState([]);
    const retFields = useAppSelector(fields);
    const dispatch = useAppDispatch();

    if (retFields.length == 0) {
        dispatch(getFieldsAction());
    }
    if (data.length == 0) {

    }

    var chartData = [];
    for (var key in data) {
        chartData.push({
            name: key,
            data: data[key]
        })
    }

    var fieldsMap = new Map<string, {kafka: string, name: string}[]>();
    retFields.filter((e) => {
        return e.parent == 'У-171'
    }).map((e) => {
        if (fieldsMap.has(e.entity_name)) {
            (fieldsMap.get(e.entity_name as any) as any).push({
                kafka: e.kafka,
                name: e.name
            })
        } else {
            fieldsMap.set(e.entity_name, [{
                kafka: e.kafka,
                name: e.name
            }])
        }
    });
    var fieldsTree = [];
    console.log(fieldsMap.keys())
    for (var kkey of (fieldsMap.keys() as any)) {
        console.log(kkey)
        if (typeof kkey == 'string') {
            var leaf: any[] = [];
            fieldsMap.get(kkey)!.map((e) => leaf.push({
                'title': e.name,
                'key': e.kafka,
                isLeaf: true
            }))
            fieldsTree.push({
                'title': kkey,
                'key': kkey,
                'children': leaf
            })
        }
    }
    console.log(fieldsTree);
    return <div>
        <TheHeader></TheHeader>
        <TheTimestampedSwitcher type='chart'/>
        <MainContent>
            <div className='chart__container'>
                <Tree 
                    treeData={Array.from(fieldsTree) as any} 
                    checkable 
                    style={{minWidth: '300px'}}
                    onSelect={(e) => {
                        console.log(e)
                    }}
                    onCheck={(e) => {
                        console.log(e)
                        setSelectedData(e as any);
                        getChartData(new Date(), new Date(), 10, e as any).then((e) => {
                            setData(e.data);
                        });
                    }}
                ></Tree>
                <div className="chart__chart">
                    <Select
                    defaultValue={'1-min'}
                    style={{
                        width: 90,
                        transform: 'translateX(-10px)'
                    }}
                    options={[
                        {
                            value: "1",
                            label: "1 мин"
                        },
                        {
                            value: "10",
                            label: "10 мин"
                        },
                        {
                            value: "30",
                            label: "30 мин"
                        },
                        {
                            value: "60",
                            label: "60 мин"
                        }
                    ]} />
                    <div className="chart-cont" style={{width: '100%', height: 500}}>
                        {
                            chartData.length ? <TheChart data={chartData}></TheChart> : <></>
                        }
                        
                    </div>
                    
                </div>
            </div>
        </MainContent>
   </div>
}