import React, { Component } from 'react';
import style from './About.module.css';

export default class About extends Component {
  render() {
    return (
      <section className={`${style.about} my-4 py-5`}>
          <div className="container">
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className={`${style.col} d-flex flex-column justify-content-center align-items-center`}>
                <h2 className={`${style.title} text-center fw-bold fs-1 text-uppercase`}>about</h2>
                <div className={`${style.line}`}>
                  <i className={`${style.star} my-3 fa-solid fa-star mb-5`}></i>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 ms-auto mb-5">
                <p>Freelancer is a free bootstrap theme created by Start Bootstrap. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
              </div>
              <div className="col-md-4 me-auto mb-5">
                <p>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
              </div>
              <div className="col-md-12 text-center">
                <button className={`${style.free} btn`}><i class="fa-solid fa-download me-3"></i>Free Download!</button>
              </div>
            </div>
          </div>
      </section>
    )
  }
}
