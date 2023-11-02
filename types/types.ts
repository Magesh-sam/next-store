export type ProductProps = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
  quantity: number;
};

export type CartItemProps = {
  docId: string;
  id: number;
  image: string;
  price: number;
  quantity: number;
  title: string;
  uid: string;
};
