import React, {Component} from 'react';
import {Grid, Cell} from 'react-mdl';
import {IconContext} from 'react-icons/lib';

class About extends Component {
  render() {
    return(
      <IconContext.Provider value={{color: "white", size: "50px"}}>
      <div style={{width: '100%', marginTop: '20px'}}>
        <Grid className="about-grid">
          <Cell col={12}>
          <div className="about-text">
          <h1>About Me</h1> 
            <hr/>
              <p>Hi, I'm Robert, an ambitious MSc Computing Science graduate from Newcastle University, with a strong academic background and experience in project management, collaborative working, and software development. I have extensive knowledge of the video game industry with expertise in graphics technologies, in-depth technical analysis, and benchmarking. I'm enthusiastic about computer hardware assembly, installation, and troubleshooting. 
                <br />
                <br />Where possible, I engage in qualitative and quantitative research to improve the user experience, something I'm extremely passionate about. I'm also an avid gamer, and have a particular affinity for the Soulsborne series of games.</p>
              </div>
            </Cell>
          </Grid>
        </div>
        </IconContext.Provider>
      )
    }
}
export default About;
