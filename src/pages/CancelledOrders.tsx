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
  );
};

export default CancelledOrders;
