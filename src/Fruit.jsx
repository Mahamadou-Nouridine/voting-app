import React from "react";


const Fruit = (props)=> {
    return (
        <div className="fruits center-align" >
            <div className="row" style={{width : 50, marginTop: 20, marginBottom: -15}}>
                <i onClick={() => props.voteHandler(props.id)} className="col fa-solid fa-caret-up" style={{cursor : "pointer"}}></i>
                <p className="">{props.votes}</p>
            </div>
            <div className="row ">
                <img width={200} className="circle" src= {props.img} alt={props.name} />
            </div>
            <p  style={{marginTop:-10, marginBottom:20, fontWeight: "bold"}}>
                {props.name}
            </p>
            <div className="divider "></div>
        </div>
    )
}

export default Fruit;