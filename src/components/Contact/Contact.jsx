import React, { Component } from 'react'
import style from './Contact.module.css'

export default class Contact extends Component {
  render() {
    return (
      <div className={`${style.Contact} my-5`}>
        <div className="container">
          <div className="d-flex justify-content-center flex-column align-items-center my-4">
            <h2 className={`${style.title} text-uppercase`}>Contact</h2>
            <div class={`${style.starDiv}`}>
              <i className={`${style.star} fa-solid fa-star`}></i>
            </div>
          </div>
          <form action="" className='row justify-content-center g-4'>
            <div className={`${style.inputDiv} col-md-7 mt-5`}>
              <input type="text"  id="name" className='w-100'/>
              <label htmlFor="name">Full Name</label>
            </div>
            <div className={`${style.inputDiv} col-md-7 mt-5`}>
              <input type="text"  id="email" className='w-100'/>
              <label htmlFor="email">Email Address</label>
            </div>
            <div className={`${style.inputDiv} col-md-7 mt-5`}>
              <input type="text"  id="phone" className='w-100'/>
              <label htmlFor="phone">Phone Number</label>
            </div>
            <div className={`${style.inputDiv} col-md-7 mt-5`}>
            <textarea name="" id="message" rows="5" className='w-100'></textarea>
              <label htmlFor="message">Message</label>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
