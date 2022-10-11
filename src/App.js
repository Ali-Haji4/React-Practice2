import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Card from "./components/card";
import React from "react";
import {CardDetails} from "./components/card";
import data from "./data";


const dataText = data.map((data) => {return (
    <CardDetails 
        item={data} //This is much more maintainable than the old method that is commented below
        />)
    })

export default function App() {
    return (<div className="container">
        <NavBar />
        <Main />
        <div className="cardcontainer">
            {dataText}
        </div>
    </div>)
}
// export default function App() {
//     return (<div className="container">   //This uses the old method of inputting data which can be disastorous
//                 <NavBar />
//                 <Main />

//                 <div className="cardContainer">
//                     <CardDetails  //This is called using PROPS
//                     img="./personCard.png"
//                     rating="5"
//                     country="USA"
//                     name="Katie Zaferes"
//                     price="$136"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./vlad.jpg"
//                     rating="4"
//                     country="CastleVania"
//                     name="Dracula"
//                     price="$170"
//                     totalTenants="10" />
                    
//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                     <CardDetails
//                     img="./minato.jpg"
//                     rating="4.5"
//                     country="The Leaf Village"
//                     name="Minato"
//                     price="$200"
//                     totalTenants="10" />

//                 </div>

//             </div>)
// }


// const oldDataText = data.map((data) => {return (   This is the old method of putting the values in. It can get tedious with long data types
//     <CardDetails 
//         id={data.id} 
//         title={data.title} 
//         price={data.price} 
//         coverImg={data.coverImg} 
//         rating={data.stats.rating} 
//         reviewCount={data.stats.reviewCount}
//         location={data.location}
//         openSpots={data.openSpots}
//         />)
//     })