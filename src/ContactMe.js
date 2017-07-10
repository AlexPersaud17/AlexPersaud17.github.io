import React, { Component } from 'react';

class ContactMe extends Component {
  constructor(){
    super()
    this.state = {
      showForm: true,
      showThankYou: false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(){
    this.setState({ 
      showForm: false,
      showThankYou: true
    });
  }

  render(){
    return(
      <div>
        <div className="section-container" id="contact-text">
          <h1 className="section-text">Contact Me!</h1>
        </div>

        <div id="contact">
          <div id="form-container">
            <form>

              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" id="name" name="name" placeholder="What your Mom calls you" />
              </div>

              <div className="form-group">
                <label>Message</label>
                <textarea type="text" className="form-control" id="message" name="message" rows="5" placeholder="Let's build something together..." ></textarea>
              </div>

              <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control" id="email" name="email" placeholder="alexisawesome@everything.com" />
              </div>

              <div className="form-group">
                <label>Favorite Color!</label>
                <input type="text" className="form-control" id="color" name="color" placeholder="vivid tangerine" />
              </div>

              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Send!</button>
            </form>

          </div>

          
        </div>


      </div>
    )
  }
}

export default ContactMe;