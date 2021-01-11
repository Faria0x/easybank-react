import React from "react"
import "./Articles.css"
import currency from "../../images/image-currency.jpg"
import restaurant from "../../images/image-restaurant.jpg"
import plane from "../../images/image-plane.jpg"
import confetti from "../../images/image-confetti.jpg"

export default function Articles() {
    return(
        <div className="articles">
        <div className="article-main">
            <h3>Latest Articles</h3>
        </div>
        <div className="article-cards">
            <div className="card-article">
                <img src={currency} alt=""/>
                <p className="author">By Claire Robinson</p>
                <h3 className="title">Receive money in any currency with no fees</h3>
                <p className="text"> The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
            </div>
            <div className="card-article">
                <img src={restaurant} alt=""/>
                <p className="author">By Wilton Hutton</p>
                <h3 className="title">Treat yourself without worrying about money</h3>
                <p className="text"> Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you … </p>
            </div>
            <div className="card-article">
            <img src={plane} alt=""/>
                <p className="author">By Wilton Hutton</p>
                <h3 className="title">Take your Easybank card wherever you go</h3>
                <p className="text">We want you to enjoy your travels. This is why we don't charge any fees on purchases while you're abroad. We'll even show you...</p>
            </div>
            <div className="card-article">
            <img src={confetti} alt=""/>
                <p className="author">By Claire Robinson</p>
                <h3 className="title">Our invite-only Beta accounts are now live!</h3>
                <p className="text">After a lot of hard work by the whole team, we're excited to launch our closed beta. It's easy to request an invite through the site...</p>
            </div>
        </div>
        </div>
    )
}