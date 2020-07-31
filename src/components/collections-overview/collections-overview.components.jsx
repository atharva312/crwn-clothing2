import React from 'react';
import './collections-overview.styles.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CollectionPreview from '../preview-collections/collection-preview.components';
import {selectcollectionsforPreview} from '../../redux/shop/shop.selectors';


const CollectionsOverview = ({collections}) => (
  <div className="collections-overview">
    {
      collections.map(({id,...otherProps}) => (
        <CollectionPreview id={id}{...otherProps}/>
      ))
    }
  </div>
);
const mapStateToProps = createStructuredSelector({
  collections:selectcollectionsforPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);