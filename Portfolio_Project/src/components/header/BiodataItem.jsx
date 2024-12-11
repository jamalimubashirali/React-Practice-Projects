const BiodataItem = ({ itemDes, itemData }) => {
  return (
    <div className="flex flex-row gap-4 items-center transition-transform duration-300 ease-in-out hover:scale-105 font-mono">
      <span className="text-gray-400 uppercase w-32 text-lg font-bold text-left transition-colors duration-300 ease-in-out hover:text-gray-200">
        {itemDes}:
      </span>
      <span className="flex-1 text-white text-lg transition-colors duration-300 ease-in-out hover:text-gray-300">
        {itemData}
      </span>
    </div>
  );
};

export default BiodataItem;

