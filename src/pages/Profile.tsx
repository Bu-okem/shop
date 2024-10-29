import { Outlet } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
const Profile = () => {
  return (
    <DefaultLayout>
      <div className="h-[70vh] max-w-7xl mx-auto">
        <div className="max-w-[400px] border border-[#F0F0F0] m-4 rounded-xl flex flex-col">
          <div className="p-4 pb-2 border-b border-[#F0F0F0]">
            <h3 className="">Account Details</h3>
          </div>
          <div className="p-4 pt-2">
            <h3 className="mb-2 lg:text-lg">User's Name</h3>
            <h3 className="text-gray-500 text-sm lg:text-base">Email</h3>
          </div>
        </div>
        <Outlet />
      </div>
    </DefaultLayout>
  );
};

export default Profile;
