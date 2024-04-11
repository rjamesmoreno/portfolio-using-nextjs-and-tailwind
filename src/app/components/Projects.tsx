import Image from "next/image";
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
import ImageCarousel from "./ImageCarousel";

const imageListUtilityCrate = [utilitycrate1, utilitycrate2, utilitycrate3];

const imageListTyphoonista = [typhoonista1, typhoonista2];

export default function Projects() {
  return (
    <div className="bg-gray-100">
      <div className="text-center">
        <div className="text-4xl p-5">Projects</div>
        <div className="text-base p-5">Here are my projects:</div>
      </div>
      <ImageCarousel
        imageList={imageListUtilityCrate}
        groupType="utilitycrate"
      />
      <div className="mt-3  flex flex-col justify-center items-center py-2">
        <div className="w-[40%] space-y-3">
          <div>
            <h1 className="text-3xl text-center">UtilityCrate</h1>
          </div>
          <div>
            <p className="text-justify leading-[30px]">
              A mobile application that integrates the functionalities of
              different applications such as a note-taking app, scheduler, to-do
              lists, and added the feature of creating grouped notes, tasks, and
              events which caters personal and organizational planning using
              Dart, MongoDB and Node.
            </p>
          </div>
        </div>
      </div>
      <ImageCarousel imageList={imageListTyphoonista} groupType="typhoonista" />
      <div className="mt-3  flex flex-col justify-center items-center py-2">
        <div className="w-[40%] space-y-3">
          <div>
            <h1 className="text-3xl text-center">Typhoonista</h1>
          </div>
          <div>
            <p className="text-justify leading-[30px]">
              A predictive analytics dashboard for rice damage cost estimation
              through a web-application using Dart, Firebase and Flask.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
