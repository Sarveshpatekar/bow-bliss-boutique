
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

const ProductImageCarousel: React.FC<ProductImageCarouselProps> = ({ images, productName }) => {
  return (
    <Carousel className="w-full">
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            <div className="aspect-square overflow-hidden bg-gradient-to-br from-rose-50 to-pink-50">
              <img
                src={image}
                alt={`${productName} - Image ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
};

export default ProductImageCarousel;
