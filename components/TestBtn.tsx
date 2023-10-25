"use client";

import axios from "axios";
import { Button } from "./ui/button";

function TestBtn() {
  const fetchData = async () => {
    await axios
      .post("/api/addtocart", {
        id: 1,
        title: "iPhone 9",
        description: "An apple mobile which is nothing like apple",
        price: 549,
        rating: 4.69,
        brand: "Apple",
        category: "smartphones",
        thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
      })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  return <Button onClick={() => fetchData()}>Fetch Data</Button>;
}

export default TestBtn;
