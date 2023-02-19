import react, { useState } from 'react'
import { ExgausterCard } from '../../components/ExgausterCard'
import { MainContent } from '../../components/MainContent'
import { TheAlgoMachineCard } from '../../components/TheAlgoMachineCard'
import { TheHeader } from '../../components/TheHeader'
import { TheLegend } from '../../components/TheLegend'
import { useAppDispatch, useAppSelector } from '../../store'
import { exgausters, fields } from '../../store/slices/FieldMappingSlice'
import { getFieldsAction } from '../../store/slices/FieldMappingSlice/actions'
import './style.css'

export const Main: react.FC = () => {
    const dispatch = useAppDispatch();
    const [fetched, setFetched] = useState(false);
    const retrievedFields = useAppSelector(fields);
    const retrieveExgausters = useAppSelector(exgausters)

    if (retrievedFields.length == 0 && !fetched) {
        dispatch(getFieldsAction())
        setFetched(true);
    }
    return <div>
        <TheHeader />
        <div style={{marginTop: '40px'}}>
            <MainContent>
                <TheLegend></TheLegend>
                {
                    retrieveExgausters.length ? <div className="machines">
                        <TheAlgoMachineCard 
                            first_exgauster={retrieveExgausters[0] as string}
                            second_exgauster={retrieveExgausters[1] as string}
                        ></TheAlgoMachineCard>
                        <TheAlgoMachineCard 
                            first_exgauster={retrieveExgausters[2] as string}
                            second_exgauster={retrieveExgausters[3] as string}
                        ></TheAlgoMachineCard>
                        <TheAlgoMachineCard
                            first_exgauster={retrieveExgausters[4] as string}
                            second_exgauster={retrieveExgausters[5] as string}
                        ></TheAlgoMachineCard>
                    </div> : <></>
                }
                
            </MainContent>
        </div>
    </div>
}