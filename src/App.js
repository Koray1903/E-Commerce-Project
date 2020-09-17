import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from "./components/HomePage";
import NotFoundPage from "./components/NotFoundPage";
import CatalogueListPage from "./components/CatalogueListPage";
import ProductDetailPage from "./components/ProductDetailPage";

function App() {

    return (
        <Router>
            <Switch>

                <Route exact path="/" component={HomePage}/>

                <Route exact path="/clp" component={CatalogueListPage}/>

                <Route exact path="/pdp" component={ProductDetailPage}/>

                <Route exact path="/404" component={NotFoundPage}/>

            </Switch>
        </Router>
    );
}

export default App;
