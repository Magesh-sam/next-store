import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { removeFromCart } from "@/redux/Slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";
import { buttonVariants } from "./ui/button";
//* Delete Product from local cart
export function DeleteProduct({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AlertDialog>
      <AlertDialogTrigger
        className={
          buttonVariants({ variant: "ghost" }) +
          " hover:cursor-pointer hover:bg-red-600 hover:text-secondary"
        }
      >
        <Trash2 />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Remove Item</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure want to Remove this item
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={() => dispatch(removeFromCart(id))}>
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
