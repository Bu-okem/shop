import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import LoadingPage from '../components/LoadingPage';

/**
 * The Orders page component.
 *
 * This component renders a page with a menu to toggle between viewing
 * sent orders or cancelled orders.
 *
 * The actual content of the page is rendered by nested routes, which
 * are handled by the `Outlet` component.
 *
 * @returns The JSX element representing the Orders page.
 */
const Orders = () => {
  const url = new URL(window.location.href);
  const orderTab = () => {
    if (url.pathname.includes('cancelled')) {
      return 'cancelled';
    } else {
      return 'sent';
    }
  };

  const [activeTab, setActiveTab] = useState(orderTab);
  const [loading, _] = useState(false);
  return (
    <DefaultLayout>
      <div className="max-w-7xl mx-auto">
        <h3 className="pl-4 fond-bold font-familjen-grotesk text-2xl">
          Orders
        </h3>
        {loading ? (
          <div className="h-[70vh]">
            <LoadingPage />
          </div>
        ) : (
          <div className="p-4 my-8">
            <div className=" border-b border-[#F0F0F0] flex gap-4">
              <Link
                to="/orders"
                className={`pb-2 relative top-px ${
                  activeTab === 'sent'
                    ? 'font-bold border-b-2 border-b-black'
                    : ''
                }`}
                onClick={() => setActiveTab('sent')}>
                Sent
              </Link>
              <Link
                to="/orders/cancelled"
                className={`pb-2 relative top-px ${
                  activeTab === 'cancelled'
                    ? 'font-bold border-b-2 border-b-black'
                    : ''
                }`}
                onClick={() => setActiveTab('cancelled')}>
                Cancelled
              </Link>
            </div>
            <div className="py-2">
              <Outlet />
            </div>
          </div>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Orders;
