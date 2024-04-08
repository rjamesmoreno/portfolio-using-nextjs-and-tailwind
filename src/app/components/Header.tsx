import Image from "next/image";
import image from "/public/portfolio_image.png";

export default function Header() {
  return (
    <main>
    <div className="mt-8 mx-12">
    <Image
      src={image}
      width={155}
      alt="Picture of portfolio text"
    />
    </div>
    
    </main>
  );
}