import React from 'react';
import SHOP_DATA from './shop.data.js';
import CollectionPreview from '../../components/preview-collections/collection-preview.components';

class ShopPage extends React.Component{
  constructor(){
    super();

    this.state = {
      collections: SHOP_DATA
    }
    
  }
  render(){
    const {collections} = this.state;

    return(
      <div className="shop-page">
        {
          collections.map(({id,...otherProps}) => (
            <CollectionPreview id={id}{...otherProps}/>
          ))
        }
      </div>
    )
    
  }
}

export default ShopPage;