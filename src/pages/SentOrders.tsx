import { useEffect, useState } from 'react';
import { getOrdersByUser, getUserDetails } from '../lib/functions';
import { formatDate } from '../lib/utils';

import OrderItem from '../components/OrderItem';
import LoadingPage from '../components/LoadingPage';

const SentOrders = () => {
  // const orderItems: any[] = [];
  const [loading, setLoading] = useState(true);
  const [orders, setOrders] = useState<any>([]);
  const [userDetails, setUserDetails] = useState<
    | {
        id: string;
        name: string;
        email: string;
      }
    | undefined
  >(undefined);

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  const getOrders = async () => {
    try {
      const res = await getOrdersByUser(userDetails?.id as string);
      const orderItems =
        res
          ?.filter((item) => item.status !== 'cancelled')
          .flatMap((item) =>
            item.orderItems.map((orderItem: any) => ({
              ...orderItem,
              status: item.status,
              date: formatDate(item.$createdAt),
              orderId: item.$id,
            }))
          ) ?? [];
      setLoading(false);
      setOrders(orderItems.reverse());
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  /*
  {
      image: order.productId.imageUrls[0],
      name: order.productId.title,
      orderId: order.orderId,
      status: order.status,
      date: order.date,
    },
  */

  // const getOrders = async () => {
  //   try {
  //     const res = await getOrdersByUser(userDetails?.id as string);
  //     res?.filter((item) => item.status !== 'cancelled').map((item) => {
  //       if (item.status !== 'cancelled') {
  //         item.orderItems.map((orderItem: any) => ({
  //           ...orderItem,
  //           status: item.status,
  //         }));
  //         orderItems.push(item.orderItems);
  //       }
  //     });
  //     setOrders(orderItems.flat());
  //     console.log(orderItems.flat());
  //   } catch (error) {
  //     console.error('Error fetching orders:', error);
  //   }
  // };

  useEffect(() => {
    fetchUserDetails();
  }, []);

  useEffect(() => {
    if (userDetails) {
      getOrders();
    }
  }, [userDetails]);
  return (
    <>
      {loading ? (
        <div className="h-[30vh] w-full flex justify-center items-center">
          <LoadingPage />
        </div>
      ) : orders.length === 0 ? (
        <div className="h-[40vh] flex items-center justify-center">
          <p className="text-center text-gray-500">No orders found</p>
        </div>
      ) : (
        <div className="max-w-[600px] pt-4 flex flex-col gap-4">
          {orders.map((order: any, index: number) => (
            <OrderItem
              key={index}
              image={order.productId.imageUrls[0]}
              name={order.productId.title}
              orderId={`#${order.orderId}`}
              status={order.status}
              date={order.date}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default SentOrders;
