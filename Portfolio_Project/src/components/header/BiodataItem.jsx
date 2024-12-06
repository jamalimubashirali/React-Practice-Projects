import React from 'react'
const BiodataItem = ({ itemDes, itemData }) => {
    return (
      <div className="flex flex-row gap-4">
        <span className="text-gray-400 w-32 text-lg font-bold text-left">{itemDes}:</span>
        <span className="flex-1">{itemData}</span>
      </div>
    );
  };
  

export default BiodataItem
