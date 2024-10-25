import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ID } from 'appwrite';
import { LoaderIcon } from 'lucide-react';

import { account } from '../appwriteconfig';
const SignUp = () => {
  // @ts-ignore
  const [UserDetails, setUserDetails] = useState({});
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const [userInfo, setUserInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  useEffect(() => {
    const checkUser = async () => {
      const session = await account.getSession('current');
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, []);

  const signUpUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await account.create(
        ID.unique(),
        userInfo.email,
        userInfo.password,
        `${userInfo.firstName} ${userInfo.lastName}`
      );
      navigate('/login', { replace: true });
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-[#F9F9F9] py-[60px] flex items-center justify-center">
        <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg flex flex-col">
          <img src="./logo.svg" alt="" className="mb-7 self-center" />
          <form onSubmit={signUpUser} className="w-[92%] mx-auto">
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <input
                id="firstName"
                name="usersFirstName"
                placeholder="First Name (required)"
                className="bg-[#EFEFEF] rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    firstName: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <input
                id="lastName"
                name="usersLastName"
                placeholder="Last Name (required)"
                className="bg-[#EFEFEF] rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    lastName: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email (required)"
                className="bg-[#EFEFEF] rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    email: e.target.value,
                  });
                }}
              />
            </label>

            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password (required)"
                className="bg-[#EFEFEF] rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    password: e.target.value,
                  });
                }}
              />
            </label>
            <label
              htmlFor=""
              className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
              <input
                type="password"
                id="confirm-password"
                name="confirmPassword"
                placeholder="Confirm Password (required)"
                className="bg-[#EFEFEF] rounded-lg px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
                onChange={(e) => {
                  setUserInfo({
                    ...userInfo,
                    confirmPassword: e.target.value,
                  });
                }}
              />
            </label>
            <button
              disabled={loading}
              className={`${
                loading ? 'bg-[#727272]' : 'bg-black'
              } flex items-center justify-center text-white py-[10px] w-full rounded-lg cursor-pointer`}>
              {loading ? <LoaderIcon /> : 'Signup'}
            </button>
          </form>
          <div className="text-center mt-[41px] flex flex-col justify-center">
            <small className="">
              Have an account?{' '}
              <span className="text-[#555]">
                <Link to={'/login'}>Login</Link>
              </span>
            </small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
