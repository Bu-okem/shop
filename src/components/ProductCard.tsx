import { Link } from 'react-router-dom';

const ProductCard = ({
  image,
  name,
  price,
  link,
}: {
  image: string;
  name: string;
  price: string;
  link: string;
}) => {
  return (
    <Link to={link} className="w-[150px]">
      <div className="h-auto w-[150px]">
        <img src={image} alt="" className="rounded-xl" />
      </div>
      <h5 className="font-bold mt-3 truncate">{name}</h5>
      <p className="text-black text-[1.2rem]">₦{price}</p>
    </Link>
  );
};

export default ProductCard;
