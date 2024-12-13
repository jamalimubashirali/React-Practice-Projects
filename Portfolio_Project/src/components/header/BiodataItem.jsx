const BiodataItem = ({ itemDes, itemData }) => {
  return (
    <div className="flex flex-row gap-4 items-center transition-transform duration-300 ease-in-out hover:scale-105 font-mono">
      <span className="text-gray-400 uppercase w-28 text-sm md:w-20 md:text-base font-bold text-left">
        {itemDes}:
      </span>
      <span className="flex-1 text-white text-sm md:text-base">
        {itemData}
      </span>
    </div>
  );
};

export default BiodataItem;

