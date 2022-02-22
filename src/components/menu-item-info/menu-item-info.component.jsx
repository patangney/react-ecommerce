import React from 'react';
import './_menu-item.styles.scss';

const MenuItemInfo = ({ title,imageUrl, size }) => (
  <div 
    
  className={`${size} menu-item`}>
  <div className='background-image' style={
    {backgroundImage: `url(${imageUrl})`}
  }/>
    
  
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItemInfo;
