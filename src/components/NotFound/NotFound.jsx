import React, { Component } from 'react'
import style from './NotFound.module.css'

export default class NotFound extends Component {
  render() {
    return (
      <div>
        <section className={`${style.error} py-5`}>
          {/* <div className="container">
            <div className={`${style.title} text-center`}>
              <h2>404</h2>
              <h2>Page Not Found</h2>
            </div>
          </div> */}
        </section>
      </div>
    )
  }
}



