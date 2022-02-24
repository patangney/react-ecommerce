import React from 'react';
import { withRouter } from 'react-router-dom'; //higher order - get access to history
import './_menu-item.styles.scss';

const MenuItemInfo = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  > {/* /somethingmatchedURL/linkURL */}
  
    <div
      className='background-image'
      style={{ backgroundImage: `url(${imageUrl})` }}
    />

    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItemInfo);
