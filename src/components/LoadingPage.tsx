import { LoaderCircle } from 'lucide-react';

const LoadingPage = () => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <LoaderCircle className="animate-spin" />
    </div>
  );
};

export default LoadingPage;
