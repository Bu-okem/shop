import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { account } from '../appwriteconfig';

import { Eye, EyeOff, LoaderCircle } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [error, setError] = useState('');

  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkUser = async () => {
      const session = await account.getSession('current');
      if (session) {
        navigate('/');
      }
    };
    checkUser();
  }, []);

  const loginUser = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      await account.createEmailPasswordSession(user.email, user.password);
      navigate('/', { replace: true });
      setLoading(false);
    } catch {
      setError('Invalid email or password');
      setLoading(false);
    }
  };
  return (
    <div className="bg-[#F9F9F9] h-screen w-screen flex items-center">
      <div className="max-w-[541px] w-[86%] mx-auto pt-[55px] pb-[26px] bg-white rounded-lg flex flex-col">
        <img src="./logo.svg" alt="" className="mb-7 self-center" />
        <form onSubmit={loginUser} className="w-[92%] mx-auto">
          <label
            htmlFor=""
            className="flex flex-col mb-[27px] text-[#6E7191] font-medium">
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              className="bg-[#EFEFEF] rounded-3xl px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
              required
            />
          </label>
          <label
            htmlFor=""
            className="flex flex-col text-[#6E7191] font-medium relative">
            <input
              type={isPasswordVisible ? 'text' : 'password'}
              name="password"
              id="password"
              placeholder="Password"
              className="bg-[#EFEFEF] rounded-3xl px-3 py-2 focus-visible:outline focus-visible:outline-1 focus-visible:outline-black"
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
              required
            />
            <span
              className="absolute right-3 top-1/4 cursor-pointer"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}>
              {isPasswordVisible ? <Eye width={20} /> : <EyeOff width={20} />}
            </span>
          </label>
          <span className="block text-red-600 text-sm py-4">{error}</span>
          <button
            disabled={loading}
            className={`${
              loading ? 'bg-[#727272]' : 'bg-black'
            } flex items-center justify-center text-white py-[10px] w-full rounded-lg cursor-pointer`}>
            {loading ? <LoaderCircle className="animate-spin" /> : 'Login'}
          </button>
        </form>
        <div className="text-center mt-[41px] flex flex-col justify-center">
          <small className="">
            Don’t have an account?{' '}
            <Link to={'/sign-up'}>
              <span className="text-[#555] hover:underline">Sign up</span>
            </Link>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Login;
