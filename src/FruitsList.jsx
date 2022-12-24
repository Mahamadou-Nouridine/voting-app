import  { useState } from "react";
import React, { Component } from 'react';
import Fruit from "./Fruit";


const fruits = [
    {
        name: "Apple",
        votes: 15,
        id: 0,
        img : require("./images/apple.jpg")
    },
    {
        name: "Pineapple",
        votes: 18,
        id: 1,
        img : require("./images/pineapple.jpg")
    },
    {
        name: "Avocat",
        votes: 15,
        id: 2,
        img : require("./images/avocat.jpg")
    },
    {
        name: "Banana",
        votes: 16,
        id: 3,
        img : require("./images/banane.jpg")
    },
    {
        name: "Strawberry",
        votes: 20,
        id: 4,
        img : require("./images/fraise.jpg")
    },
    {
        name: "Mango",
        votes: 19,
        id: 5,
        img : require("./images/mango.jpg")
    }
]

const FruitsLiss = () => {
    const [table, newTable] = useState(fruits)

    const increment = (id) => {
        const updatedTable = [...table].map(fruit => {
            if(fruit.id == id){
                fruit.votes +=1;
            }
            return fruit 

        })
        const sotedTable = updatedTable.sort((a,b) => b.votes - a.votes)
        
        newTable(() => sotedTable)
    }

     
     table.sort((a, b) => b.votes - a.votes)

    return (
        <div>
            {table.map(item => <Fruit voteHandler = {increment} name = {item.name} key = {item.id} id={item.id} img = {item.img} votes = {item.votes} />)}
        </div>
    )
}
export default FruitsLiss;