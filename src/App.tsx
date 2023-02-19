import React from 'react';
import {RouterProvider} from 'react-router-dom'
import { ConfigProvider } from 'antd';
import {Provider} from 'react-redux'
import router from './router';
import store from './store'

import 'antd/dist/reset.css';



function App() {
  return (
    <Provider store={store}>
        <ConfigProvider theme={{
            token: {
                'colorPrimary': '#FAB82E'
            }
        }}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    </Provider>
  );
}

export default App;
