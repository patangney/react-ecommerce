import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './_preview-collections.styles.scss';

/**
 * Functional Component for Preview Collection
 * For testing - just show 4 items
 * this array could be a performance concern - but will address concern later
 */
const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
