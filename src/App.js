import React, {Component} from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from "react-router-dom";


class App extends Component {

  hideToggle() {
    var selectorId = document.querySelector('.mdl-layout');
    selectorId.MaterialLayout.toggleDrawer();
}     
  render() {
    return (
      <div className="mdl-layout--no-desktop-drawer-button">
        <Layout style={{background: 'url(https://images.unsplash.com/photo-1526565278154-ab23e27d998e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjIxMTIzfQ&auto=format&fit=crop&w=3900&q=80) center / cover '}}>
          <Header transparent title={<Link style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '30px'}} to="/" >Home</Link>}>
          <Navigation>
            <Link style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '20px'}}to="/cv" scroll>CV</Link>
            <Link style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '20px'}}to="/about">About Me</Link>
            <Link style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '20px'}}to="/projects">Projects</Link>
            <Link style={{fontWeight: 'bold', textDecoration: 'none', color: 'white', fontSize: '20px'}}to="/contact">Contact</Link>
          </Navigation>
          </Header>
          <Drawer className="drawer" title={<Link style={{fontWeight: 'bold', textDecoration: 'none', color: '#001b25', fontSize: '25px'}} to="/" onClick={() => this.hideToggle()}>Home</Link>}>
          <Navigation>              
              <Link style={{fontWeight: 'bold', textDecoration: 'none', color: '#001b25', fontSize: '15px'}}to="/cv" onClick={() => this.hideToggle()}>CV</Link>
              <Link style={{fontWeight: 'bold', textDecoration: 'none', color: '#001b25', fontSize: '15px'}}to="/about" onClick={() => this.hideToggle()}>About Me</Link>
              <Link style={{fontWeight: 'bold', textDecoration: 'none', color: '#001b25', fontSize: '15px'}}to="/projects" onClick={() => this.hideToggle()}>Projects</Link>
              <Link style={{fontWeight: 'bold', textDecoration: 'none', color: '#001b25', fontSize: '15px'}}to="/contact" onClick={() => this.hideToggle()}>Contact</Link>             
          </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main/>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
