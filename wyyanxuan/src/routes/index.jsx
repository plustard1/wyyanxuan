import React, { lazy, Suspense } from 'react';
import BlankLayout from '../layouts/BlankLayout';
import { Redirect, Link } from 'react-router-dom';
const Main = lazy(()=> import('../pages/Main/Main'));
const Cate = lazy(() => import('../pages/Cate/Cate'));
const Cart = lazy(() => import('../pages/Cart/Cart'));
const User = lazy(() => import('../pages/User/User'));
const Detail = lazy(() => import('../pages/details/Detail'));
import Tabbuttom from '../components/tabbuttom/Tabbuttom';

const SuspenseComponent = Component => props => {
    return (
        <Suspense fallback={null}>
            <Component {...props}></Component>
        </Suspense>
    )
}

export default [{
    component: BlankLayout,
    routes:[
        {
            path:'/',
            exact: true,
            render: () => < Redirect to = { "/home" }/>,
        },
        {
            path:'/home',
            component: Tabbuttom,
            routes: [
                {
                    path: '/home',
                    exact: true,
                    render: () => < Redirect to = { "/home/main" }
                    />,
                },
                {
                    path: '/home/main',
                    component: SuspenseComponent(Main),
                },
                {
                    path: '/home/cate',
                    component: SuspenseComponent(Cate),
                },
                {
                    path: '/home/cart',
                    component: SuspenseComponent(Cart),
                },
                {
                    path: '/home/user',
                    component: SuspenseComponent(User),
                }
            ]
        },
        {
            path: '/detail',
            component: SuspenseComponent(Detail),
            routes: [
                {
                    path: '/detail/:id',
                    component: SuspenseComponent(Detail)
                }
            ]
        }
    ]
}]

