export type ProductProps = {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  rating: number;
  brand: string;
  category: string;
};

export type CartItemProps = {
  uid: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
};

export type WishlistItemProps = {
  uid: string;
  title: string;
  price: number;
  image: string;
};
