import React from "react"
import "./Header.css"
import logo from "../../images/logo.svg"
import Button from "../Button/Button"

export default function Header() {
    return(
        <header>
            <div>
              <img src={logo} alt=""/>
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <Button title="Request Invite"></Button>
        </header>
    )
}