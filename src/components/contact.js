import React from "react";

export default function Contact (props) {
    return (
    <div>
        <h1> {props.text}</h1>
        <h2> {props.age }</h2>
    </div>)
}

export function ContactDeconstructed ({text, age}) { //We used object deconstructing to put the elements into different variables
    //But it is better to use the previous method because then you can differentiate props objects and javascript variabels you created yourself
    return (
        <div>
            <h1> {text}</h1>
            <h2> {age }</h2>
        </div>)
}