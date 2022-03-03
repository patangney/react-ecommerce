import React from 'react';
import SHOP_DATA from './../../data/shop.data';
import CollectionPreview from 'components/collection-preview/collection-preview.component';
/**
 * ShopPage Component
 * Store the data related to the clothing collections on the shop page
 * this component will need to be a class component
 * 
 */

class ShopPage extends React.Component {


    constructor(props){
        super(props);

        this.state = {
            collections: SHOP_DATA
            
        }
    }

    render() {
        const {collections} = this.state;
        return (<div className='shop-page'>
        {
            collections.map(({id, ...otherCollectionProps}) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
            
        </div>);
    }

}

export default ShopPage;