import react from 'react'
import { FullScheme } from '../../components/FullScheme'
import { MainContent } from '../../components/MainContent'
import { TheChartMnemSwitch } from '../../components/TheChartMnemSwitch'
import { TheHeader } from '../../components/TheHeader'
import { TheLegend } from '../../components/TheLegend'
import mock from '../../mock'

export const Mnemoscheme: react.FC = () => {
    const [connected, setConnected] = react.useState(false);
    const [data, setData] = react.useState({});
    if (!connected) {
        const socket = new WebSocket('wss://dev2.akarpov.ru/')
        socket.addEventListener('open', (e) => {
            console.log(e)
        })
        socket.addEventListener('message', (e) => {
            console.log(e.data['SM_Exgauster\\[0:0]'])
            setData(JSON.parse(e.data));
        });
        setConnected(true);
    }

    return <div>
        <TheHeader></TheHeader>
        <TheChartMnemSwitch type='mnem' />
        <MainContent>
            <div>
                <TheLegend type='short'></TheLegend>
                <div style={{scale: '0.95', transform: 'translateY(-50px)', display: Object.keys(data).length === 0 ? 'none' : 'block'}}>
                    <FullScheme name='У-171' data={Object.keys(data).length === 0 ? mock : data}></FullScheme>
                </div>
            </div>
        </MainContent>
   </div>
}