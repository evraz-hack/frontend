import {createAsyncThunk} from '@reduxjs/toolkit'
import { getFields } from '../../../client/fields';

export const getFieldsAction = createAsyncThunk(
    '/fields/get',
    async () => {
        const data: any = await getFields();
        
        return data.data;
    }
)
