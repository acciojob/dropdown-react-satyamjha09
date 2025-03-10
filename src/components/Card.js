import React from 'react';

const Card = ({ item, prefix }) => {
  return (
    <div>
      <div id={`${prefix}-name`}>{item.name}</div>
      <div id={`${prefix}-description`}>{item.description}</div>
    </div>
  );
};

export default Card;