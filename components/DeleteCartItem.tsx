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
import { api } from "@/axios/config";
import { useToast } from "./ui/use-toast";
import { useRouter } from "next/navigation";
function DeleteCartItem({ id }: { id: string }) {
  const { toast } = useToast();

  const router = useRouter();
  const handleDelete = async () => {
    try {
      await api.post("/deleteitem", { id });
      router.refresh();
    } catch (err) {
      toast({
        title: "Error",
        description: JSON.stringify(err),
      });
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="mx-auto  mt-3 flex items-center justify-between rounded-lg bg-red-600 p-2 hover:bg-red-700">
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
          <AlertDialogAction onClick={handleDelete}>Remove</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default DeleteCartItem;
