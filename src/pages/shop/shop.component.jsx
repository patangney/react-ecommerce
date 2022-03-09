import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from 'components/collections-overview/collections-overview.componet';
import CollectionPage from 'pages/collections/collection.component';

/**
 * ShopPage Component
 * 
 * Setup category using Route {`${match.path}/:categoryId`}
 *
 */

const ShopPage = ({ match }) => (
  <div className='shop-page'>
    <Route exact path={`${match.path}`} component={CollectionsOverview} />
    <Route patch={`${match.path}/:categoryId`} />
  </div>
);
// const ShopPage = ({ match }) => {
//   console.log(match);
//   return(
//   <div className='shop-page'>
//     <Route exact path={`${match.path}`} component={CollectionsOverview} />
//   </div>
// )};

export default ShopPage;
