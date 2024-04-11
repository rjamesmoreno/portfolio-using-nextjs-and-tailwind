import Image, { StaticImageData } from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import utilitycrate1 from "/public/utilitycrate1.png";
import utilitycrate2 from "/public/utilitycrate2.png";
import utilitycrate3 from "/public/utilitycrate3.png";
import typhoonista1 from "/public/typhoonista1.png";
import typhoonista2 from "/public/typhoonista2.png";
import { group } from "console";

type ImageCarouselProps = {
    imageList : StaticImageData[]
    groupType : string
}

export default function ImageCarousel({imageList, groupType} : ImageCarouselProps) {
    return (<Carousel className= {groupType==='utilitycrate' ? "max-w-xs mx-auto" : "w-[50vw] mx-auto"}>
    <CarouselContent>
    {imageList.map((image) => {
        return (<CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <div className="border-solid border-2 border-black">
                    <Image
                      src={image}
                      width={groupType === 'utilitycrate' ? 400 : 1000}
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