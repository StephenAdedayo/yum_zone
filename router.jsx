import { createBrowserRouter } from "react-router-dom";
import Layout from "./src/layout/Layout";
import App from "./src/App";
import Address from "./src/pages/Address";
import Cancellation from "./src/pages/Cancellation";
import Categories from "./src/pages/Categories";
import DeliveryMan from "./src/pages/DeliveryMan";
import Favorite from "./src/pages/Favorite";
import HelpSupport from "./src/pages/HelpSupport";
import JoinAsRestaurant from "./src/pages/JoinAsRestaurant";
import Language from "./src/pages/Language";
import LiveChat from "./src/pages/LiveChat";
import Orders from "./src/pages/Orders";
import RefundPolicy from "./src/pages/RefundPolicy";
import ShippingPolicy from "./src/pages/ShippingPolicy";
import SingleRestaurant from "./src/pages/SingleRestaurant";
import Stores from "./src/pages/Stores";
import TermsCondition from "./src/pages/TermsCondition";
import AllProducts from "./src/products/AllProducts";
import SingleProduct from "./src/products/SingleProduct";
import SignUp from "./src/profile/SignUp";
import SignIn from "./src/profile/SignIn";
import Coupon from "./src/profile/Coupon";
import LoyaltyPoints from "./src/profile/LoyaltyPoints";
import ReferEarn from "./src/profile/ReferEarn";
import Tracking from "./src/products/Tracking";

export const router = createBrowserRouter([

    {path: '/',
        element: <Layout />,
        children : [

            {path: '/', element: <App />}, 
            {path : '/address', element : <Address/> },
            {path : '/cancellation', element : <Cancellation />},
            {path : '/categories', element : <Categories />},
            {path : '/deliveryman', element: <DeliveryMan />},
            {path : '/favorite', element : <Favorite />},
            {path : '/help', element : <HelpSupport />},
            {path : '/joinrestaurant', element : <JoinAsRestaurant />},
            {path : '/language', element: <Language />}, 
            {path : '/livechat', element : <LiveChat />},
            {path : '/orders', element : <Orders />},
            {path : '/refundpolicy', element : <RefundPolicy />},
            {path : '/shippingpolicy', element : <ShippingPolicy />},
            {path : '/singlerestaurant', element : <SingleRestaurant />}, 
            {path : '/stores', element : <Stores />}, 
            {path : '/termconditions', element : <TermsCondition />},
            {path : '/products', element : <AllProducts/>},
            {path : '/products/:id', element : <SingleProduct />},
            {path : '/signup', element : <SignUp />},
            {path : '/signin', element : <SignIn />},
            {path : '/coupon', element : <Coupon/>}, 
            {path : '/loyaltypoints', element : <LoyaltyPoints />},
            {path : '/referearn', element : <ReferEarn />},
            {path : '/tracking', element : <Tracking />}


        ]

    }

]) 