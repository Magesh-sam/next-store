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
import { Button } from "@/components/ui/button";
import { removeFromCart } from "@/redux/Slices/cartSlice";
import { AppDispatch } from "@/redux/store";
import { Trash2 } from "lucide-react";
import { useDispatch } from "react-redux";

export function DeleteDialog({ id }: { id: number }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <AlertDialog>
      <AlertDialogTrigger className="mx-auto  mt-3 flex items-center justify-between rounded-lg bg-red-400 p-2">
        <span>Remove Item</span> <Trash2 />
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
