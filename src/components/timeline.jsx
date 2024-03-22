import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <span class="material-symbols-outlined" style={{fontSize:'24px',paddingTop:'8px',paddingLeft:'1px',color:'white'}}>dvr</span>
                      </div>
                      <div className="timeline-label">
                        <h2>JP Morgan Chase Software Engineer II<span> 2023-Current</span></h2>
                        <p>In 2023, I graduated SEP (Software Engineer Program) and became a Software Engineer II. My responsibilities as a software engineer on the Data Services team include
                           deploying infrastructure via Terraform, writing data validation and cleaning scripts using Python, and designing new architecture in AWS.</p> 
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-2">
                      <span class="material-icons" style={{fontSize:'24px',paddingTop:'8px',paddingLeft:'1px'}}>computer</span>
                      </div>
                      <div className="timeline-label">
                        <h2>JP Morgan Chase Software Engineer Program<span> 2021-2023</span></h2>
                        <p>As a member of JPMC's Software Engineer Program, I worked on a small Agile team with data engineers, application owners, and product managers. 
                          I was also involved in the SEP Mentorship Program, where I mentored 4 younger engineers in the program. I then joined the SEP Mentorship Committee and
                          planned events such as "Speed Networking" and mentor/mentee lunches.</p> 
                      </div>
                    </div>
                  </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <span class="material-icons" style={{fontSize:'24px',paddingTop:'8px',paddingLeft:'1px'}}>insights</span>
                      </div>
                      <div className="timeline-label">
                        <h2>Data Science Intern at Fidelity National Financial<span> Summer 2020</span></h2>
                        <p>As a data science intern at FNF, I worked with Neo4j to implement a graph database for thousands of public MLS records. 
                          I wrote Cypher queries, performed feature engineering, and presented a PoC to the data science team and the CIO.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                      <span class="material-icons" style={{fontSize:'24px',paddingTop:'8px',paddingLeft:'1px',backgroundColor:''}}>shopping_cart</span>
                      </div>
                      <div className="timeline-label">
                        <h2>E-Commerce Intern at Natural Life <span>2017-2018</span></h2>
                        <p>Over the summers of 2017 & 2018, I worked as an e-Commerce intern at Natural Life, a clothing, accessories, and home goods store based in Ponte Vedra Beach, FL. 
                          I utilized Magento to organize the website according to customer preferences, and I edited listing descriptions and images. This internship gave me a great insight into 
                          user experience and customer satisfaction. As one of two interns, I gained hands-on experience in many parts of the company besides e-Commerce, from staging photoshoots to writing copy.
                        </p>
                      </div>
                    </div>
                  </article>
                  
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
