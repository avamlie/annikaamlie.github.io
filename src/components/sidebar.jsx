import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight" style={{backgroundColor: '#faf4e1'}}>
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/about.jpg)'}} /> 
              <h1 style={{paddingLeft: '10px', paddingTop: '10px', fontWeight: 'bold', fontSize: '25pt',color: '#FC6A38'}}>Annika Amlie</h1>
              
              <span className="email" ><a href="mailto:aamlie.01@gmail.com" style={{color: 'black'}}><i className="icon-mail" style={{marginTop:'20px'}}></i>  aamlie.01@gmail.com</a></span>
              
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><br></br><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  <li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.instagram.com/avamlie/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li>
                <li><a href="https://www.linkedin.com/in/annika-amlie-8a9874170/" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
                <li><a href="https://github.com/avamlie" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
              </ul>
            </nav>
            <div className="colorlib-footer">
              <br></br>
              <p><small>
                  Thanks <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a> for inspiration 
              {/* </small></p>
              <p><small> */}
              <br></br>
                Template & tutorial from <a href="https://www.freecodecamp.org/news/portfolio-app-using-react-618814e35843/" target="_blank" rel="noopener noreferrer">Dhruv Barochiya</a>
              </small></p>
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
