import React, { Component } from 'react';

class ContactMe extends Component {

  render(){
    return(
      <div>
        <div className="section-container" id="contact-text">
          <h1 className="section-text">Contact Me!</h1>
        </div>

        <div id="contact">
          <div id="form-container">
            <form id="gform" method="POST" action="https://script.google.com/macros/s/AKfycbwRK9WG3MY-fK4hoAQ8SBUBiXRyhKxFOVc22rH7DgTqu0BQpnw/exec" >

              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="What your Mom calls you" />
              </div>

              <div className="form-group">
                <label>What's Up?</label>
                <textarea type="text" className="form-control" id="message" name="message" rows="5" placeholder="Let's build something together!" ></textarea>
              </div>

              <div className="form-group">
                <label>Your Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="alexisawesome@everything.com" />
                <span id="email-invalid">Must be a valid email address</span>
              </div>

              <div className="form-group">
                <label></label>
                <input type="hidden" className="form-control" id="color" name="color" placeholder="vivid tangerine" />
              </div>

              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Send!</button>
            </form>
            <div id="thankyou_message">
              <h2>Thanks for contacting me!
                I will get back to you soon!</h2>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ContactMe;