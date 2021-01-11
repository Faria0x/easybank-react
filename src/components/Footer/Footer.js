import React from "react"
import logo from "../../images/logo.svg"
import Button from "../Button/Button"
import "./Footer.css"

export default function Footer() {
    return (
        <div className="container-footer">
        <div className="footer">
            <div className="social">
                <img src={logo} alt="" className="logo-footer"/>
            </div>
            <div className="menu1">
                <div>
                <ul>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Blog</li>
                </ul>
                </div>
                <div>
                <ul>
                    <li>Careers</li>
                    <li>Support</li>
                    <li>Privacy Policy</li>
                </ul>
                </div>
            </div>

            <div className="menu2">
                <Button title="Request Invite"></Button>
                <p>Easybank. All Rights Reserved</p>
            </div>
        </div>
        </div>
    )
}