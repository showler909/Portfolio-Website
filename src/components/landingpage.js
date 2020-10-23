import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib';

class  Landing extends Component {
  render() {
    return(
      <IconContext.Provider value={{color: "white", size: "50px"}}>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHGgFu6SEzqaw/profile-displayphoto-shrink_200_200/0?e=1607558400&v=beta&t=6-fd6oes2XnprsYiOLinZA-zci37mhKK9U6e1QfIpGk"
              alt="avatar"
              className="avatar-img"
              />
            <div className="landing-text">
              <h1>Robert Showler</h1>
              
              <hr/>

              <h2>MSc Computer Science Graduate</h2>

              

              <p>Java | PHP | CSS | React | Javascript | MySQL | Bash</p>
            
            <div className="social-links">
            {/* GitHub */}
            <a href="https://github.com/showler909" rel="noopener noreferrer" target="_blank">
            <FaGithub />
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/robert-showler-29712871/" rel="noopener noreferrer" target="_blank">
            <FaLinkedin />
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/growler86" rel="noopener noreferrer" target="_blank">
            <FaTwitter />
            </a>

            </div>
              </div>
            </Cell>
          </Grid>
        </div>
        </IconContext.Provider>
      )
    }
}

export default Landing;