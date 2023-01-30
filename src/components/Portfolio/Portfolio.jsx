import React, { Component } from 'react'
import style from './Portfolio.module.css'

export default class Portfolio extends Component {
  render() {
    return (
      <div>
        <div className={`${style.portfolio} my-5`}>
          <div className='container'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
              <div>
                <h2 className={`${style.title} text-center fw-bold fs-1`}>PORTFOLIO</h2>
                <div className={style.starDiv}>
                  <i className={`${style.star} my-3 fa-solid fa-star`}></i>
                </div>
              </div>
            </div>
            <div className='row'>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/cabin.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/cake.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/circus.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/game.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/safe.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
              <div className={`${style.imgDiv} col-md-6 col-lg-4 mb-3`}>
                <div className={style.over}>
                  <img className={`${style.card} w-100 rounded`} src='images/portfolio/submarine.png' alt='' />
                  <i class="fa-solid fa-plus"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
