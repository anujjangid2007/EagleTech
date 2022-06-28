import React from 'react'

const ContactForm = () => {
    return (
        <>
            <div  className='contact-right-section'>
                <form>
                    <h1 className='contact-inner-heading'>Send us a message!</h1>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className="form-group">
                                <input type="text" className="form-control border-gradient border-gradient-purple" id="FirstName" aria-describedby="emailHelp" placeholder="First Name" />
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className="form-group">
                                <input type="text" className="form-control border-gradient border-gradient-purple" id="LastName" aria-describedby="emailHelp" placeholder="Last Name" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group">
                                <input type="email" className="form-control border-gradient border-gradient-purple" id="Email" aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group">
                                <input type="text" className="form-control border-gradient border-gradient-purple" id="Subject" aria-describedby="emailHelp" placeholder="Subject" />
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="form-group">
                                <textarea className="form-control border-gradient border-gradient-purple" id="Description" aria-describedby="emailHelp" placeholder="Description" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your data with anyone else.</small>
                            </div>
                        </div>
                        <button className='submit-btn'>Send</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ContactForm;
