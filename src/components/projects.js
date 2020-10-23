import React, { Component } from 'react';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu} from 'react-mdl';
import {IconContext} from 'react-icons/lib';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <IconContext.Provider value={{color: "white", size: "50px"}}>
            <div style={{width: '100%', marginTop: '4px'}}>
              <Grid className="projects-grid">
                <Cell col={12}>
                  <div className='projects-text'>
                  <h1>Projects</h1> 
                  <hr/>
                  {/* Project 1 */}
                  <div className="projects-cards">
                  <Card shadow={5} style={{minWidth: '400', margin: 'auto', borderRadius: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                      <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </CardText>
                        <CardActions border>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>GitHub</Button>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>Demo</Button>
                        </CardActions>
                      <CardMenu style={{color: '#fff'}}></CardMenu>
                  </Card>
                  </div>

                   {/* Project 2 */}
                   <div className="projects-cards">
                   <Card shadow={5} style={{minWidth: '400', margin: 'auto', borderRadius: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                      <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </CardText>
                        <CardActions border>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>GitHub</Button>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>Demo</Button>
                        </CardActions>
                      <CardMenu style={{color: '#fff'}}></CardMenu>
                  </Card>
                  </div>

                   {/* Project 3 */}
                   <div className="projects-cards">
                   <Card shadow={5} style={{minWidth: '400', margin: 'auto', borderRadius: '20px'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
                      <CardText>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                      </CardText>
                        <CardActions border>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>GitHub</Button>
                          <Button href="http://google.com" rel="noopener noreferrer" target="_blank"colored>Demo</Button>
                        </CardActions>
                      <CardMenu style={{color: '#fff'}}></CardMenu>
                  </Card>
                  </div>
                  
                  </div>
                </Cell>
              </Grid>
            </div>
          </IconContext.Provider>
        )
  }
}



  render() {
    return(
      <div>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}

export default Projects;