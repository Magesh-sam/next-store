import { ProductProps } from "./Product";
import Image from "next/image";
import { Button } from "./ui/button";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { removeFromCart } from "@/redux/Slices/cartSlice";
import { DeleteDialog } from "./DeleteDialog";

function CartItem({ item }: { item: ProductProps }) {
  const { title, thumbnail, price, id } = item;
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className="relative">
      <DeleteDialog id={id} />
      <Image src={thumbnail} alt={title} width={200} height={200} />
      <div>
        <h3>{title}</h3>
        <p>${price}</p>
      </div>
    </div>
  );
}

export default CartItem;
