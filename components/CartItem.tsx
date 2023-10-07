import { ProductProps } from "./Product";
import Image from "next/image";

function CartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
  return (
    <div>
      <Image src={thumbnail} alt={title} width={200} height={200} />
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default CartItem;
