import React, { Component } from 'react'
import style from "./Home.module.css"

export default class Home extends Component {
    render() {
        return (
            <div>
                <header class={style.home}>
                    <div className="container">
                        <div className="d-flex justify-content-center flex-column align-items-center">
                            <div className={`${style.avatar} mb-4`}>
                                <img src="images/avataaars.svg" alt="Avatar" className='w-100 mt-5' />
                            </div>
                            <div className="header-info">
                                <h1 className={`${style.title} text-uppercase`}>start bootstrap</h1>
                                <div className={style.starDiv}>
                                    <i className={`${style.star} fa-solid fa-star`}></i>
                                </div>
                                <p className={style.para}>Graphic Artist - Web Designer - Illustrator</p>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}
