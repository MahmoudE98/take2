import React from "react";
import Header from "/Header";
import CallToAction from "CallToAction";
import Specials from "/Specials";
import About from "/About";

function Main () {
    return(
        <main>
            <Header/>
            <CallToAction/>
            <Specials/>
            <About/>
            <Footer/>
        </main>
    );
}
export default Main;