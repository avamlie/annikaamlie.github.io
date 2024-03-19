import React, { Component } from 'react'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                    <span className="heading-meta">Who Am I?</span>
                    <h2 className="colorlib-heading">My Background</h2>
                    <p>I am a software engineer with a passion for all things creative. I'm currently living in New York City and am originally from Jacksonville, Florida.
                         Since 2021, I've been working as a software engineer at JP Morgan Chase, where I have designed and developed data pipeline features for an internal-facing application. 
                        When I'm not at work, I enjoy taking dance classes, making accessories for my Etsy shop, and working on side projects to improve my technical skills (like this personal website)!
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1" >
                <span className="icon" >
                <span class="material-icons" style={{color:"#E9E1C7"}}>analytics</span>
                </span>
                {/* <span class="material-icons">&#xE87C;</span> */}
                <div className="desc">
                    <h3>Data Engineering</h3>
                    <p>Wrote data processing & validation scripts using Python, Spark, 
                        and Scala and utilized machine learning concepts to match records from different external data vendors</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                <span class="material-icons" style={{color:"#FC6A38"}}>cloud_queue</span>
                </span>
                <div className="desc">
                    <h3>Cloud Services</h3>
                    <p>Have utilized AWS services such as S3, SQS, Lambda, EC2, 
                        and more while working on a data application hosted on AWS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-data" style={{color:"#E9E1C7"}}/>
                </span>
                <div className="desc">
                    <h3>Infrastructure and Architecture Design</h3>
                    <p>Worked with product team to design architecture in AWS and utilized Terraform to build infrastructure programmatically</p>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
      </div>
    )
  }
}
