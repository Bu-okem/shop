const OrderItem = ({ image, name, orderId, status, date }: any) => {
  return (
    <div className="border border-[#F0F0F0] p-3 rounded-2xl flex gap-4">
      <img src={image} alt="" className="h-24" />
      <div className="flex flex-col gap-[4px]">
        <h3 className="">{name}</h3>
        <p className="text-gray-500 text-sm">{orderId}</p>
        <span
          className={`min-w-[80.4px]  text-white text-sm text-center font-medium w-fit px-2 py-[2px] rounded-lg ${
            status === 'delivered' && 'bg-green-500'
          } ${status === 'pending' && 'bg-gray-500'} ${
            status === 'cancelled' && 'bg-red-500'
          }`}>
          {status === 'delivered' && 'Delivered'}
          {status === 'pending' && 'In Transit'}
          {status === 'cancelled' && 'Cancelled'}
        </span>
        <p className="text-sm">{date}</p>
      </div>
    </div>
  );
};

export default OrderItem;
