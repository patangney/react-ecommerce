import React from 'react';
import  CollectionsOverview  from './../../components/collections-overview/collections-overview.componet';

/**
 * ShopPage Component
 * Store the data related to the clothing collections on the shop page
 * this component will need to be a class component
 *
 */

const ShopPage = ({ collections }) => <div className='shop-page'>
    
    <CollectionsOverview />
    </div>;

export default ShopPage;
