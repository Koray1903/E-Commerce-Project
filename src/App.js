import React from 'react';
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import FullWidthImage from "./components/FullWidthImage";
import PopularProducts from "./components/PopularProducts";

function App() {
    return (
        <div className="App">

            <PopularProducts/>
            <FullWidthImage/>
            <Benefits/>
            <Footer/>
        </div>
    );
}

export default App;
