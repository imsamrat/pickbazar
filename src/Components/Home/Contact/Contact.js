import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <section className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center text-white mb-5">
                    <h1 className="text-primary">Contact With Us</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Full Name *" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="text" className="form-control" placeholder="Email Address *" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="tel" className="form-control" placeholder="Phone Number*" />
                        </div>
                        <div className="form-group mt-1">
                            <input type="text" className="form-control" placeholder="Subject *" />
                        </div>
                        <div className="form-group mt-1">
                            <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center mt-1">
                            <button type="button" className="btn btn-primary"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;