import React from "react"
import "./Button.css"

export default function Button(props) {
    return(
        <button style={{margin:props.margin}}>{props.title}</button>
    )
}