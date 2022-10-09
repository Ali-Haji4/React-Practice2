import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Card from "./components/card";
import React from "react";
import Contact from "./components/contact";
import {ContactDeconstructed} from "./components/contact";
import {CardDetails} from "./components/card";

export default function App() {
    return (<div className="container">
                <NavBar />
                <Main />

                <div className="cardContainer">
                    <CardDetails  //This is called using PROPS
                    img="./personCard.png"
                    rating="5"
                    country="USA"
                    name="Katie Zaferes"
                    price="$136"
                    totalTenants="10" />

                    <CardDetails
                    img="./vlad.jpg"
                    rating="4"
                    country="CastleVania"
                    name="Dracula"
                    price="$170"
                    totalTenants="10" />
                    
                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                    <CardDetails
                    img="./minato.jpg"
                    rating="4.5"
                    country="The Leaf Village"
                    name="Minato"
                    price="$200"
                    totalTenants="10" />

                </div>

            </div>)
}


