import{createBrowserRouter} from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../views/Home'
import Products from '../views/Products'
import DetailProduct from '../views/DetailProduct'
import Login from '../views/Login'
import Register from '../views/Register'
import OrderHistory from '../views/OrderHistory'
import Message from '../views/Message'
import Tema1 from '../views/theme/Tema1'
import Dashboard from '../views/Dashboard'
import InvitationTheme from '../views/InvitationTheme'
import TemaAdd from '../views/theme/TemaAdd copy'


const router = createBrowserRouter([
    {
        element: <MainLayouts/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/products',
                element: <Products/>
            }, 
            {
                path:'/products/:id',
                element: <DetailProduct/>
            },
            {
                path:'/histories',
                element: <OrderHistory/>
            },
            {
                path: '/message',
                element: <Message/>
            },
            {
                path: '/invitations',
                element: <InvitationTheme/>
            }, 
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    },               
    {
        path: '/inv',
        element: <Dashboard/>
    },             
    {
        path: '/t1/:id',
        element: <Tema1/>
    },            
    {
        path: '/prev',
        element: <TemaAdd/>
    },
])

export default router