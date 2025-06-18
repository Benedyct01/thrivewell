import React from 'react';
import { useState } from 'react';
import "../index.css";
import "./mobile.css";

const Header = () => {
    const [formData, setFormData] = useState({
        name:'',
        email:'',
        phone:'',
        amount:'',
        message:'',
    
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <section>
        <div className="first-header">
            <img src={require('../images/nurseMan.png')} alt="Nurse" className='header-image'/>
        </div>
        <div className="first-header2">
            <div className="header-content2">
                <h3 className="header-text2">TOGETHER WE CAN MAKE A<br/> DIFFERENCE</h3>
            </div>
        </div>

        <div className="header">
            <div className="header-dot"></div>
            <h3 className="header-title" >Let's Help</h3>
            <h3 className="header-title2">We Love You</h3>
        </div>
        <section className="container">
        <div className="container-1">
            <h1 className="main-title">
                Support Thrivewell: <br /> Transform Lives Through <br /> Healthcare Donations
            </h1>
            <p className="p-1">
                At Thrive well, we believe that access to quality healthcare is a fundamental right, not <br /> a priviledge. Every day, countless individuals struggle to afford life-saving treatments,<br />
                essential medications, and basic medical care. With your support, we can bridge this<br /> gap
                and bring hope to those in need.
            </p>
            <div className="contacts">
                <div className="contact-item">
                    <div className="icon-circle phone">
                        <img src={require('../images/phone.png')} alt="Phone" />
                    </div>
                    <div className="contact-text">
                        <h3 className="contact-label">Phone</h3>
                        <h6>+234-8011135610</h6>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="icon-circle email">
                        <img src={require('../images/email.png')} alt="Email" />
                    </div>
                    <div className="contact-text">
                        <h3 className="contact-label">Email</h3>
                        <h6>info@Thrivewell.io</h6>
                    </div>
                </div>
            </div> 
            <div className="contact-2">
                <div className="contact-item">
                    <div className="icon-circle website">
                        <img src={require('../images/website.png')} alt="website" />
                    </div>
                    <div className="contact-text">
                        <h3 className="contact-label">Website</h3>
                        <h6>www.thrivewell.com</h6>
                    </div>
                </div>

                <div className="contact-item">
                    <div className="icon-circle address">
                        <img src ={require('../images/address.png')} alt="address" />
                    </div>
                    <div className="contact-text">
                        <h3 className="contact-label">Address</h3>
                        <h6>99 Freedom way, Lekki-Lagos</h6>
                    </div>
                </div>
            </div>
        </div>
        <div className="form-container">
            <form className="donation-form" onSubmit={handleSubmit}>
                <div className="form-item">
                    <label>
                        <input 
                            type="text"
                            name="name"  
                            className="form-input  form-name"
                            value={formData.name} 
                            placeholder='Name:' 
                            onChange={handleChange} 
                        />
                    </label>
                    
                        <input 
                            type="email"
                            name="email"  
                            className="form-input form-email"
                            value={formData.email} 
                            placeholder='Email:' 
                            onChange={handleChange} 
                        />
                        
                </div>
                <div className="form-item form-item2">
                    <label>
                        <input 
                            type="text" 
                            name="phone"
                            className="form-input form-phone"
                            value={formData.phone} 
                            placeholder='Phone No:' 
                            onChange={handleChange} 
                        />
                    </label>
                    <label>
                        <input 
                            type="number" 
                            name="amount"
                            className="form-input form-amount"
                            value={formData.amount} 
                            placeholder='Donation Amount' 
                            onChange={handleChange} 
                        />
                    </label>
                </div>
                <div className="form-item">
                        <textarea  
                            name="message"
                            value={formData.message} 
                            className='form-textarea'
                            placeholder='Message:' 
                            onChange={handleChange} 
                        ></textarea>
                </div>
                <button type="submit" className="donate-button">DONATE HERE</button>
            </form>   
        </div>
        </section>
    
        <div className="showcase">
                <div className="showcase-content">
                    <h3 className="showcase-text">Join Us In Building a Healthier Future</h3>
                    <p className="sub-text">Your donation to Thrivewell isn't just a gift-it's a lifeline for someone in urgent need. Together, we can<br /> ensure that everyone, regardless of their background, has access to quality healthcare</p>
                </div>
        </div>
        <div className="showcase-pic">
                <div className="showcase-content-2">
                    <h3 className="showcase-text showcase-text-2">Join Us In Building a Healthier Future</h3>
                    <p className="sub-text sub-text2">Your donation to Thrivewell isn't just a gift-it's a lifeline for someone in urgent need. Together, we can<br /> ensure that everyone, regardless of their background, has access to quality healthcare</p>
                </div>
        </div>
        <div className="rectangle-container">
            <div className="rectangle-context">
                <div className="rectangle-box">
                    <img src={require('../images/doctor-1.png')} alt="healthcare professional 1" className="pic-1" />
                    <img src={require('../images/doctor-2.png')} alt="health professional 2" className="pic-2" />
                </div>
            </div>
            <div className="rectangle-section">
                <div className="rectangle-items">
                    <div className="tips">
                        <h3 className="tips-1">ThriveWell Donation Tips</h3>
                        <img src={require('../images/light_mode.png')} alt="light" className="icon-5" />
                    </div>
                    <img src={require('../images/light_mode.png')} alt="light" className="icon-3" />
                    <div className="rectangle-label">
                        <img src={require('../images/Heart.png')} alt="Love" className="icon-4" />
                        <div className="rectangle-text">
                            <h3 className="title">Choose a cause That Matters to You-</h3>
                            <p className="side-text">Whether it's cancer care, maternal health, or mental health, direct <br /> your donation where it can make the biggest difference.</p>
                        </div>
                    </div>
                    <div className="rectangle-label">
                        <img src={require('../images/Heart.png')} alt="Love" className="icon-4" />
                        <div className="rectangle-text">
                            <h3 className="title">Give in Multiple Ways</h3>
                            <p className="side-text">Consider one-time gifts, monthly contributions, or corporate <br />matching programs to maximize your impact.</p>
                        </div>
                    </div>
                    <div className="rectangle-label">
                        <img src={require('../images/Heart.png')} alt="Love" className="icon-4" />
                        <div className="rectangle-text">
                            <h3 className="title">Support Medical Supply Donations</h3>
                            <p className="side-text">Many hospitals and clinics benefit from in-kind donations such as<br />PPE, medical devices, and essential medications.</p>
                        </div>
                    </div>
                    <div className="rectangle-label">
                        <img src={require('../images/Heart.png')} alt="Love" className="icon-4" />
                        <div className="rectangle-text">
                            <h3 className="title">Encourage Community Giving</h3>
                            <p className="side-text">Fundraising, peer-to-peer campaigns, and social media sharing<br /> can amplify support for healthcare initiatives.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="goal-container">
            <div className="goal-content">
                <h2 className="goal-title">Our Goals</h2>
                <div className="goal-border"></div>
            </div>
            <div className="goal-context">
                
                    <div className="goal-box">
                        <p className="goal-text"> We aim to reach underserved <br /> communities<br />
                        by funding medical programs, clinics, and essential treatments.</p>
                        <div className="goal-sub">
                            <p className="sub-name">Dr Ward Brenda</p>
                            <img src={require('../images/Doctor1.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                    <div className="goal-box">
                        <p className="goal-text">We offer financial assistance to<br/> help peoeple who don't have funds<br/> for treatments receive the care they deserve.</p>
                        <div className="goal-sub">
                            <p className="sub-name">Dr. Martins Austin</p>
                            <img src={require('../images/Doctor2.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                    <div className="goal-box">
                        <p className="goal-text">Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes.</p>
                        <div className="goal-sub">
                            <p className="sub-name"> Dr. Amber Chopp</p>
                            <img src={require('../images/Doctor3.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                    <div className="goal-box">
                        <p className="goal-text">By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care.</p>
                        <div className="goal-sub">
                            <p className="sub-name"> Dr. Michelle Ambrose</p>
                            <img src={require('../images/Doctor4.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
            </div>
        </section>

        {/* Mobile Screen Size */}
        <section className="goal-container1">
            <div className="goal-content">
                <h2 className="goal-title">Our Goals</h2>
                <div className="goal-border"></div>
            </div>
            <div className="goal-context">
                <div className="goal-content1">
                    <div className="goal-box">
                        <p className="goal-text"> We aim to reach underserved <br /> communities<br />
                        by funding medical programs, clinics, and essential treatments.</p>
                        <div className="goal-sub">
                            <p className="sub-name">Dr Ward Brenda</p>
                            <img src={require('../images/Doctor1.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                    <div className="goal-box">
                        <p className="goal-text">We offer financial assistance to help peoeple who don't have funds for treatments receive the care they deserve.</p>
                        <div className="goal-sub">
                            <p className="sub-name">Dr. Martins Austin</p>
                            <img src={require('../images/Doctor2.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                </div>
                <div className="goal-content2">
                    <div className="goal-box box-2">
                        <p className="goal-text">Education, screenings, and wellness programs help prevent diseases and improve overall health outcomes.</p>
                        <div className="goal-sub">
                            <p className="sub-name"> Dr. Amber Chopp</p>
                            <img src={require('../images/Doctor3.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                    <div className="goal-box box-2">
                        <p className="goal-text">By funding training and resources, we support doctors, nurses, and caregivers in delivering high-quality care.</p>
                        <div className="goal-sub">
                            <p className="sub-name"> Dr. Michelle Ambrose</p>
                            <img src={require('../images/Doctor4.png')} alt="First-doctor" className="goal-doctor" />
                        </div>
                    </div>
                </div>     
            </div>
        </section>

        <div className="couple-container">
            <div className="couple-context">
                <h3 className="couple-title">Together, We Can Save Lives</h3>
                <p className="couple-text">Your support fuels our mission to create a world where healthcare is accessible to all. Join us in making a difference—every donation, big or small, brings hope and healing.</p>
                <button className="couple-button" onClick={handleSubmit}>DONATE NOW</button>
            </div>
        </div>
        <div className="couple-container2">
            <div className="couple-context">
                <h3 className="couple-title">Together, We Can Save Lives</h3>
                <p className="couple-text">Your support fuels our mission to create a world where healthcare is accessible to all. Join us in making a difference—every donation, big or small, brings hope and healing.</p>
                <button className="couple-button" onClick={handleSubmit}>DONATE NOW</button>
            </div>
        </div>
    </section>   
  );
};

export default Header;
