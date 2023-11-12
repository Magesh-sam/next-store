import Image from "next/image";
import Link from "next/link";
import React from "react";
import { imageSlider } from "@/misc/misc";

function ImageSlider() {
  return (
    <div className="slider   ">
      <div className="slider-track">
        {imageSlider.map((image, index) => {
          return (
            <Link
              href={image.path}
              key={index}
              className=" border-2 border-transparent hover:border-primary"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={300}
                height={300}
                className=" aspect-square h-auto "
                priority
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default ImageSlider;
