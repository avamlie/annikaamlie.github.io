import '../index.css'

import React, { Component } from 'react'

export default class Introduction extends Component {
  render() {
    return (
      <div>
        <section id="colorlib-hero" className="js-fullheight" data-section="home">
          <div className="flexslider js-fullheight">
            <ul className="slides">
            <li style={{backgroundColor: '#FC6A38'}}>
              {/* <li style={{backgroundImage: 'url(images/dark_bkgd3.png)'}}> */}
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner js-fullheight">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7"}}>Hi! <br />I'm Annika</h1>
                          <p><a className="btn btn-primary btn-learn" href="https://aqua-raquel-79.tiiny.site/" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View CV<i className="icon-download4" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundColor: '#FC6A38'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7"}}>I love building things! </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://github.com/avamlie" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View Projects <i className="icon-briefcase3" /></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li style={{backgroundImage: 'url(images/photo_eraser.png)'}}>
                <div className="overlay" />
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                      <div className="slider-text-inner">
                        <div className="desc">
                          <h1 style={{color: "#E9E1C7"}}>I also run an <br/>Etsy shop ... </h1>
                          <p><a className="btn btn-primary btn-learn" href="https://www.etsy.com/shop/ShopAnnikaV" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7"}}>View Shop <i className="icon-book" /></a></p>
                          <p><a className="btn btn-primary btn-learn" href="https://www.instagram.com/shopannikav/" target="_blank" rel="noopener noreferrer" style={{color: "#E9E1C7", marginTop: '10px'}}>View Instagram <i className="icon-instagram"/></a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
      </div>
    )
  }
}
