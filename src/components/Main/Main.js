import React from "react"
import "./Main.css"
import mockups from "../../images/image-mockups.png"
import Button from "../Button/Button"

export default function Main(props) {
    return (
        <div className="container">
            <div className="info">
            <h6>{props.title}</h6>
            <p>{props.subtitle}</p>
            <Button title="Request Invite" ></Button>
            </div>
            <div className="image">
                <img src={mockups} alt="Mockups"/>
            </div>
        </div>
    )
}