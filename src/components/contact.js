import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {FaPhone, FaEnvelope} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib';

class  Contact extends Component {
  render() {
    return(
      <div className="landingpage" id="contact">
      <IconContext.Provider value={{color: "white", size: "50px"}}>
      <div style={{width: '100%', marginTop: '20px'}}>
        <Grid className="contact-grid">
          <Cell col={12}>
          <div className="contact-text">
          <h1>Contact Me</h1> 

            <hr/>

              <p>To get in touch, you can contact me via phone or email</p>
            
                <div className="contact-details">
         
                  <div>
                    <FaPhone />
                    <p>07523243214</p>
                  </div>

                  <div>
                    <FaEnvelope />
                    <p>showler123@gmail.com</p>
                  </div>
                
                </div>
              </div>
            </Cell>
          </Grid>
        </div>
        </IconContext.Provider>
        </div>
      )
    }
}
export default Contact;
