import React, {useEffect, useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import CategoryLandingPage from "./components/CategoryLandingPage";
import ProductDetailPage from "./components/ProductDetailPage";
import CartPage from "./components/CartPage";
import "./style/App.scss";

function App() {

    // GET SCREEN DIMENSIONS
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [screenHeight, setScreenHeight] = useState(window.innerHeight);

    const updateWidthAndHeight = () => {
        setScreenWidth(window.innerWidth);
        setScreenHeight(window.innerHeight);
    };

    useEffect(() => {
        window.addEventListener("resize", updateWidthAndHeight);
        return () => window.removeEventListener("resize", updateWidthAndHeight);
    }, [screenWidth, screenHeight]);
    // GET SCREEN DIMENSIONS

    return (
        <Router>
            <Switch>

                <Route exact path="/" component={() => <HomePage screenWidth={screenWidth}/>}/>

                <Route exact path="/clp" component={() => <CategoryLandingPage screenWidth={screenWidth}/>}/>

                <Route exact path="/pdp" component={() => <ProductDetailPage screenWidth={screenWidth}/>}/>

                <Route exact path="/cart" component={() => <CartPage screenWidth={screenWidth}/>}/>

                <Route exact path="/404" component={() => <NotFoundPage screenWidth={screenWidth}/>}/>

            </Switch>
        </Router>
    );
}

export default App;
