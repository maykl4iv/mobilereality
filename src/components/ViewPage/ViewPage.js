import React from 'react';
import './ViewPage.css';

const ViewPage = ({onRouteChange}) => {
  return (
    <div className='container'>
      <div className='containerUp'>
        <div className='upL'>
          <button onClick={()=>onRouteChange('itemlist')}>Zobacz wiecej</button>
        </div>
        <div className='upR'>
          <img src='https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' alt='image'/>
        </div>
      </div>
      <div className='containerDw'>
        <div className='dwL'>
          <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg' alt='image'/>
        </div>
        <div className='dwR'>
          <button onClick={()=>onRouteChange('itemlist')}>Zobacz wiecej</button>
        </div>
      </div>
    </div>
  )
}

export default ViewPage;
