import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";


type ImageCarouselProps = {
    imageList : StaticImageData[]
    groupType : string
}

export default function ImageCarousel({imageList, groupType} : ImageCarouselProps) {
    return (<Carousel className= {groupType==='utilitycrate' ? "w-[20vw] mx-auto" : "w-[50vw] mx-auto"}>
    <CarouselContent>
    {imageList.map((image) => {
        return (<CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <div>
                    <Image
                      src={image}
                      width={groupType === 'utilitycrate' ? 600 : 1000}
                      alt=""
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>)
    })}
    </CarouselContent>
    <CarouselPrevious />
    <CarouselNext />
  </Carousel>)
}