import React from 'react';
import './collection.styles.scss';
import {connect} from 'react-redux';
import {selectCollection, selectCollections} from '../../redux/shop/shop.selectors';
import CollectionItem from '../../components/collection-item/collection-item.components';

const CollectionPage = ({collection}) => {
  const {title,items} = collection;
  return(
  <div className='collection-page'>
    <h2 className="title">{title}</h2>
    <div className="items">
      {
        items.map(item => <CollectionItem kry={item.id} item = {item} />)
      }
    </div>
  </div>
)}

const mapStatetoProps = (state,ownProps) => ({
  collection:selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStatetoProps)(CollectionPage);