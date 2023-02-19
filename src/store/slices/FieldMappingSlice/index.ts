import {createSlice, createSelector} from '@reduxjs/toolkit'
import { RootState } from '../..';
import { getFieldsAction } from './actions';
import { parseBearingFields, parseGauseCollector, parseMainDrive } from './utils';

export interface IField {
    name: string;
    kafka: string;
    description: string;
    parent: string;
    entity_name: string;
}

interface ISlice{
    fields: IField[];
}

const initialState: ISlice = {
    fields: []
}

const fieldMappingSlice = createSlice({
    name: 'fields',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getFieldsAction.fulfilled, (state, action) => {
            var fields: IField[] = [];
            console.log(action.payload)
            for (var exgauster in action.payload) {
                //console.log(action.payload[exgauster]);
                for (var signal in action.payload[exgauster]['signals']) {
                    if (signal.split(' ')[0] == 'Подшипник') {
                        fields = fields.concat(
                            parseBearingFields(
                                action.payload[exgauster]['signals'][signal as any], 
                                action.payload[exgauster].name,
                                signal
                            )
                        );
                    }
                    if (signal == 'Газовый коллектор') {
                        
                        fields.push(parseGauseCollector(
                            action.payload[exgauster]['signals'][signal as any], 
                            action.payload[exgauster].name,
                            signal
                        ))
                    }
                    if (signal == 'Главный привод') {
                        console.log(parseMainDrive(
                            action.payload[exgauster]['signals'][signal as any], 
                            action.payload[exgauster].name,
                            signal
                        ));
                        fields = fields.concat(parseMainDrive(
                            action.payload[exgauster]['signals'][signal as any], 
                            action.payload[exgauster].name,
                            signal
                        ));
                    }
                }
            }
            state.fields = fields;
        })
    }
});

export default fieldMappingSlice.reducer;

export const fields = createSelector((store: RootState) => store.fields.fields, (a) => a)
export const exgausters = createSelector((store: RootState) => {
    var fields = store.fields.fields;
    var ex_set = new Set();
    fields.map((e) => ex_set.add(e.parent))
    return Array.from(ex_set);
}, (a) => a)
