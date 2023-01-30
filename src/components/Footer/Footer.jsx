import React, { Component } from 'react';
import style from './Footer.module.css';

export default class Footer extends Component {
  render() {
    return (
      <div>
        <section className={`${style.footer} py-5`}>
          <div className="container">
            <div className="row text-center">
              <div className="col-md-4 my-3">
                <h3 className="text-uppercase">location</h3>
                <p className='mt-3'>2215 John Daniel Drive<br></br> Clark, MO 65243</p>
              </div>
              <div className="col-md-4 my-3">
                <h3 className='text-uppercase'>around the web</h3>
                <ul className='mt-3 d-flex justify-content-around w-75 m-auto'>
                  <li className={`${style.footerIcon} ${style.faceIcon} `}><i class="fa-brands fa-facebook-f"></i></li>
                  <li className={`${style.footerIcon} `}><i class="fa-brands fa-twitter"></i></li>
                  <li className={`${style.footerIcon} `}><i class="fa-brands fa-linkedin-in"></i></li>
                  <li className={`${style.footerIcon} `}><i class="fa-solid fa-basketball"></i></li>
                </ul>
              </div>
              <div className="col-md-4 my-3">
                <h3 className="text-uppercase">ABOUT FREELANCER</h3>
                <p>Freelance is a free to use, MIT licensed Bootstrap theme created by <a href='/'>Start Bootstrap</a>.</p>
              </div>
            </div>
          </div>
        </section>
        <section className={`${style.copyRight} p-3`}>
          <h6 className='text-center'>Copyright &copy; Your Website 2022</h6>
        </section>
      </div>
    )
  }
}
