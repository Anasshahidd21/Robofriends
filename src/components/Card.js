import React, { Component } from 'react'
const Card = (props) => {
    
        return (
            <div className="bg-light-green  grow tc ma2 br3 dib pa3  shadow-5">
                <img src ={`https://robohash.org/${props.id}?200x200`} alt = "robots"/>
                <div>
                    <h3>{props.name}</h3>
                    <p>{props.email}</p>
                </div>
            </div>
        )
    
}

export default Card
