import React, { Component } from 'react'

export default class Projects extends Component {
  render() {
    return (
      <div>
				<section className="colorlib-work" data-section="projects">
					<div className="colorlib-narrow-content">
						<div className="row">
							<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
								<span className="heading-meta">My Work</span>
								<h2 className="colorlib-heading animate-box">Recent Projects</h2>
							</div>
						</div>
						<div className="my-row">
							<div data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/simple_personal_website.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{color: 'white'}}>Personal Website using HTML/CSS</h3>
											<span style={{lineHeight: 1.2}}>First attempt at a personal website using HTML & CSS</span>
											<p className="icon">
												<span><a href="https://github.com/avamlie/simple_personal_website">View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div  data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/golden_globes_vintage.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{color: 'white'}}>Golden Globes NLP Project</h3>
											<span style={{lineHeight: 1.2}}>Uses natural language processing to determine the winners of the Golden Globes given a subset
												of tweets related to the event.
											</span>
											<p className="icon">
												<span><a href="https://github.com/avamlie/golden-globes">View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div data-animate-effect="fadeInTop">
								<div className="project" style={{backgroundImage: 'url(images/recipes.jpeg)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{color: 'white'}}>NLP Recipe Project</h3>
											<span style={{lineHeight: 1.2}}>Transforms any AllRecipes recipe into a different type or cuisine or makes it diet-restriction-friendly</span>
											<p className="icon">
												<span><a href="https://github.com/avamlie/project2-recipes">View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							<div data-animate-effect="fadeInBottom">
								<div className="project" style={{backgroundImage: 'url(images/annika-todo-app-ss.png)'}}>
									<div className="desc">
										<div className="con">
											<h3 style={{color: 'white'}}>React To-Do App (In Progress)</h3>
											<span style={{lineHeight: 1.2}}>Learning React by creating a simple to-do application</span>
											<p className="icon">
												<span><a href="https://github.com/avamlie/annika-react-todo-app">View Here</a></span>
											</p>
										</div>
									</div>
								</div>
							</div>
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInLeft">
								<div className="project" style={{backgroundImage: 'url(images/img-5.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 05</a></h3>
											<span>Graphic, Logo</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
							{/* <div className="col-md-4 animate-box" data-animate-effect="fadeInRight">
								<div className="project" style={{backgroundImage: 'url(images/img-6.jpg)'}}>
									<div className="desc">
										<div className="con">
											<h3><a href="work.html">Work 06</a></h3>
											<span>Web Design</span>
											<p className="icon">
												<span><a href="#"><i className="icon-share3" /></a></span>
												<span><a href="#"><i className="icon-eye" /> 100</a></span>
												<span><a href="#"><i className="icon-heart" /> 49</a></span>
											</p>
										</div>
									</div>
								</div>
							</div> */}
						</div>
						{/* <div className="row">
							<div className="col-md-12 animate-box">
								<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
							</div>
						</div> */}
					</div>
				</section>
      </div>
    )
  }
}
