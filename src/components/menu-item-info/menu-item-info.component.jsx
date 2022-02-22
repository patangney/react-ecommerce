import React from 'react';
import './_menu-item.styles.scss';

const MenuItemInfo = ({ title,imageUrl, size }) => (
  <div 
    style={
      {backgroundImage: `url(${imageUrl})`}
    }
  className={`${size} menu-item`}>
    <div className='content'>
      <h1 className='title'>{title}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItemInfo;
