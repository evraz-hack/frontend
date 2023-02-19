import {createBrowserRouter} from 'react-router-dom'
import { ChartPage } from './pages/ChartPage'
import { Main } from './pages/Main'
import { Mnemoscheme } from './pages/Mnemoscheme'


const router = createBrowserRouter([
    {
        path: '/index',
        element: <Main />
    },
    {
        path: '/exgauster/:id/mnemoscheme',
        element: <Mnemoscheme />
    },
    {
        path: '/exgauster/:id/graph',
        element: <ChartPage />
    }
])

export default router;