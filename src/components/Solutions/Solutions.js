import React from "react"
import "./Solutions.css"
import Api from "../../images/icon-api.svg"
import Budgeting from "../../images/icon-budgeting.svg"
import Onboarding from "../../images/icon-onboarding.svg"
import Online from "../../images/icon-online.svg"

export default function Solutions() {
    return(
        <div className="container-info">
            <div className="content">
            <div className="main-text">
                <h3>Why choose Easybank?</h3>
                <p>We leverage Open Banking to turn your bank account into your financial hub.</p>
                    <p>Control your finances like never before.</p> 
            </div>
            <div className="info-cards">
                <div>
                    <img src={Online} alt=""/>
                <h3>Online Banking</h3>
               <p>Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p> 
                </div>
                <div>
                    <img src={Budgeting} alt=""/>
                    <h3>Simple Budgeting </h3>
                    <p>See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
                </div>
                <div>
                    <img src={Onboarding} alt=""/>
                    <h3>Fast Onboarding</h3>
                    <p>We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
                </div>
                <div>
                    <img src={Api} alt=""/>
                    <h3>Open API</h3>
                    <p> Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
                </div>
            </div>
        </div>
        </div>
    )
}

