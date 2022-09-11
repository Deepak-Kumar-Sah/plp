import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './Home/Home';
import Cart from './Home/Product/Cart';
import ThankyouScreen from './Home/Thankyou';
const MyRoutes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact  component={Home}/>
                <Route path="/cart" exact component={Cart}/>
                <Route path="/thankyou" exact component={ThankyouScreen}/>
            </Switch>
        </BrowserRouter>
    )
}
export default MyRoutes;