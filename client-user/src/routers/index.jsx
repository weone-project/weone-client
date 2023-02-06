import{createBrowserRouter} from 'react-router-dom'
import MainLayouts from '../layouts/MainLayouts'
import Home from '../views/Home'
import Products from '../views/Products'
import DetailProduct from '../views/DetailProduct'
import Login from '../views/Login'
import Register from '../views/Register'
import OrderHistory from '../views/OrderHistory'
import Message from '../views/Message'

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
            }
        ]
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/register',
        element: <Register/>
    }
    // {
    //     path: '/:id',
    //     element: <ItemDetail/>
    // }
])

export default router