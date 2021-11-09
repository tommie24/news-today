// Layout Types
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/MainLayout";

// Route Views
import Home from "./../pages/Home";
// import News from "./../pages/News";
// import NewsDetails from "./../pages/NewsDetails";

export default [
    {
        layout:AuthLayout,
        component: Home,
        exact: false,
        path: '/home',
        redirect: '/',
        private: false,
        noAuth: false,
    },
    {
        layout:AuthLayout,
        component: Home,
        exact: false,
        path: '/home',
        redirect: '/',
        private: false,
        noAuth: false,
    },
    {
        layout:AuthLayout,
        component: Home,
        exact: false,
        path: '/register',
        redirect: '/',
        private: false,
        noAuth: false,
    },
    // {
    //     layout:MainLayout,
    //     component: News,
    //     exact: true,
    //     path: '/news',
    //     redirect: '/home',
    //     private: true,
    // },
    // {
    //     layout:MainLayout,
    //     component: NewsDetails,
    //     exact: true,
    //     path: '/news/:id',
    //     redirect: '/home',
    //     private: true,
    // }
];