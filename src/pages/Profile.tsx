import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import DefaultLayout from '../layouts/DefaultLayout';
import LoadingPage from '../components/LoadingPage';
import { getUserDetails } from '../lib/functions';
const Profile = () => {
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState<
    | {
        name: string;
        email: string;
      }
    | undefined
  >(undefined);

  const fetchUserDetails = async () => {
    try {
      const details = await getUserDetails();
      setUserDetails(details);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user details:', error);
    }
  };

  useEffect(() => {
    fetchUserDetails();
  }, []);
  return (
    <DefaultLayout>
      <div className="h-[70vh] max-w-7xl mx-auto">
        {loading ? (
          <LoadingPage />
        ) : (
          <>
            <div className="max-w-[400px] border border-[#F0F0F0] m-4 rounded-xl flex flex-col">
              <div className="p-4 pb-2 border-b border-[#F0F0F0]">
                <h3 className="">Account Details</h3>
              </div>
              <div className="p-4 pt-2">
                <h3 className="mb-2 lg:text-lg">{userDetails?.name}</h3>
                <h3 className="text-gray-500 text-sm lg:text-base">
                  {userDetails?.email}
                </h3>
              </div>
            </div>
            <div className="p-4 hidden lg:block">
              <Link to="/orders" className="hover:underline">
                Orders
              </Link>
            </div>
          </>
        )}
      </div>
    </DefaultLayout>
  );
};

export default Profile;
