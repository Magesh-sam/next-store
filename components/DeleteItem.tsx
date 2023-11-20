"use client";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "./ui/alert-dialog";
import { useToast } from "./ui/use-toast";
import { deleteProduct } from "@/lib/actions";
import { useRouter } from "next/navigation";

//* Delete Product from firestore

function DeleteItem({
  id,
  type,
}: {
  id: string;
  type: "wishlist" | "cartitems";
}) {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    console.log(id, type);
    try {
      console.log("deleting");
      await deleteProduct(type, id);
      router.refresh();
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to delete item",
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className=" rounded-lg bg-red-600 p-2 hover:bg-red-700">
        <Trash2 color="white" />
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
          <AlertDialogAction onClick={() => handleDelete()}>
            Remove
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteItem;
