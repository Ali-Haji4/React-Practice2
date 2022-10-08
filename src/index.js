import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function MyReasons(){
    return (
        <div class="myReasons">
            <Header />
            <Content />
            <DlcContent />
            <Footer />
        </div>
    )
}

function DlcContent() {
    return (
        <h2>This is DLC Content</h2>
    )
}


// ReactDOM.render(<MyReasons />, document.getElementById("root"));

ReactDOM.render(<App />, document.getElementById("root"));



















