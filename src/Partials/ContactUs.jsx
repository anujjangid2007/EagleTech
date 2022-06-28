import React from 'react'
import ContactUsInformation from '../Component/ContactUsInformation';
import ContactForm from '../Component/ContactForm';
import ContactMap from '../Component/ContactMap';
const ContactUs = () => {
    return (
        <>
            <div id="Contact-page" className='pt-100'>
                <div className='container'>
                    <div className='border-section'>
                        <div className='contact-heading'>
                            <h1>CONTACT US</h1>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 col-sm-6 col-xs-12'>
                                <ContactUsInformation />
                            </div>
                            <div className='col-lg-6 col-sm-6 col-xs-12'>
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                   <ContactMap />
                </div>
            </div>
        </>
    )
}

export default ContactUs;
