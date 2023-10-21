import { Button } from "./ui/button";

function QuantityBtn({ quantity }: { quantity: number }) {
  return (
    <div className="flex items-center gap-x-3">
      <Button>+</Button>
      <p>{quantity}</p>
      <Button>-</Button>
    </div>
  );
}

export default QuantityBtn;
