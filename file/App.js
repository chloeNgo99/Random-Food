import React from "react"
import Card from "./components/Card"
import data from "./data.js"

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#spread_in_object_literals

export default function App() { 
    
    const [display, setDisplay] = React.useState({
        title:"Ramen",
        img:"ramen.png"
    })
    
    const [imgList, setImgList] = React.useState(data)
    
    function getRandomImg(){
        const array = data
        const randomPic = Math.floor(Math.random() * array.length)
        const newPic = array[randomPic].cardImg
        const newTitle = array[randomPic].title
        setDisplay(prevPic => ({
            title: newTitle,
            img: newPic
        }))
    }
    
    return (
        <div className="container">
            <h1 className="pageTitle"> Pick Your <span className="subTitle">Meal</span> </h1>
            <button className="button" onClick={getRandomImg}> Get Food </button>
            <Card              
                title={display.title}
                img={display.img}
            />
        </div>
    )
}