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
          <div className='quaterUp'>
            <div><img src='https://images.pexels.com/photos/814499/pexels-photo-814499.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='nature'/></div>
            <div><img src='https://image.shutterstock.com/image-photo/beautiful-autumn-scene-hintersee-lake-260nw-747646759.jpg' alt='nature'/></div>
          </div>
          <div className='quaterDw'>
            <div className='dwL'><img src='https://images.pexels.com/photos/257360/pexels-photo-257360.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' alt='nature'/></div>
            <div className='dwL'><img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg' alt='nature'/></div>
          </div>
        </div>
      </div>
      <div className='containerDw'>
        <div className='dwL'>
          <img src='https://cdn.pixabay.com/photo/2015/12/01/20/28/fall-1072821__340.jpg' alt='nature'/>
        </div>
        <div className='dwR'>
          <button onClick={()=>onRouteChange('itemlist')}>Zobacz wiecej</button>
        </div>
      </div>
    </div>
  )
}

export default ViewPage;
