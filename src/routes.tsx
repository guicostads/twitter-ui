import { createBrowserRouter } from 'react-router-dom'
import Timeline from './pages/Timeline'
import Status from './pages/Status'
import Default from './layouts/Default'

export const router = createBrowserRouter([
    //{
    //  path: '/',
    // element: <Timeline />
    //},
    //{
    //  path: '/status',
    // element: <Status />
    //} 

    {
        path: '/',
        element: <Default />,
        // <Outlet />: será renderizado com o layout de default
        children: [
            {
                path: '/',
                element: <Timeline />
            },
            {
                path: '/status',
                element: <Status />
            }
        ]
    }

])