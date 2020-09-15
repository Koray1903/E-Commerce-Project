import React from 'react';
import Footer from "./components/Footer";
import Benefits from "./components/Benefits";
import FullWidthImage from "./components/FullWidthImage";
import PopularItems from "./components/PopularItems";
import SummerSales from "./components/SummerSales";
import Slider from "./components/Slider";
import Header from "./components/Header";
import Fixed from "./components/Fixed";

function App() {
    return (
        <section className="App">
            <Header/>
            <Slider/>
            <SummerSales/>
            <PopularItems/>
            <FullWidthImage/>
            <Benefits/>
            <Footer/>
            <Fixed/>
        </section>
    );
}

export default App;
