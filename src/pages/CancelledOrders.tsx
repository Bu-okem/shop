import OrderItem from '../components/OrderItem';

import ProductImage from '../assets/images/jean-trousers.png';

const CancelledOrders = () => {
  const orders = [
    {
      image: ProductImage,
      name: 'Jean Trousers',
      orderId: '#123456789',
      status: 'cancelled',
      date: '20/08/2024',
    },
  ];
  return (
    <>
      {orders.length === 0 ? (
        <div className="h-[40vh] flex items-center justify-center">
          <p className="text-center text-gray-500">No orders found</p>
        </div>
      ) : (
        <div className="max-w-[600px] pt-4">
          {orders.map((order, index) => (
            <OrderItem
              key={index}
              image={order.image}
              name={order.name}
              orderId={order.orderId}
              status={order.status}
              date={order.date}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default CancelledOrders;
