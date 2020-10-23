import React, { useRef, useEffect } from 'react';
import WebViewer from '@pdftron/webviewer';
import {Grid, Cell} from 'react-mdl';
import {IconContext} from 'react-icons/lib';



const CV = () => {
  const viewer = useRef(null);

  // if using a class, equivalent of componentDidMount 
  useEffect(() => {
    WebViewer(
      {
        path: 'lib',
        initialDoc: 'ROB CS CV.pdf',
      },
      viewer.current,
    ).then((instance) => {
      const { docViewer, Annotations } = instance;
      

      docViewer.on('documentLoaded', () => {
        const rectangleAnnot = new Annotations.RectangleAnnotation();
        rectangleAnnot.PageNumber = 1;
      });
    });
  }, []);

  return (
    <IconContext.Provider value={{color: "white", size: "50px"}}>
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="cv-grid">
          <Cell col={12}>
            <br/>
            <div className="cv-text">
              <h1>CV</h1> 
                <hr/>
                <div className="webviewer" ref={viewer}></div>                
            </div>
          </Cell>
        </Grid>
      </div>
    </IconContext.Provider>
  )
}


export default CV;