import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Tools from "./components/Tools";



export default function Home() {
  return (
    <main>
    <Header/>
    <div className="flex flex-col pt-[5rem] mx-[12rem]">
      <h1 className="text-5xl">Rendell James Moreno</h1>
      <p className="text-gray-400">Front-end Developer</p>
      <h1 className="text-6xl pt-5 pb-[50px] leading-[70px] tracking-[4px]">Hey there! I’m a front-end developer based in Davao City.</h1>
      <h1 className="text-5xl pb-6">About Me</h1>
      <div className="text-gray-400 text-justify space-y-5 mb-10">
        <p className="">My name is Rendell James Moreno, a dedicated computer science student deeply passionate about the world of software development. My primary focus lies in crafting intuitive and user-friendly applications for both mobile and web platforms. I find joy in bringing ideas to life through coding and design.</p>
        <p className="">In addition to my programming skills, I am also knowledgeable in graphics design, particularly in the realm of UI/UX. I enjoy the challenge of designing interfaces that not only look great but also provide a seamless and enjoyable user experience. Whether it's wireframing prototypes or refining the finer details of an app's design, I'm always eager to delve into the world of visual aesthetics. Furthermore, my skill set extends to video and image editing, allowing me to add an extra layer of polish to my projects. From editing promotional videos to enhancing app screenshots, I take pride in my ability to create captivating visual content that effectively communicates the message at hand.</p>
        <p className="">As I continue my journey in computer science, I'm constantly seeking opportunities to expand my knowledge and hone my skills. Whether it's through coursework, personal projects, or collaborations with fellow enthusiasts, I'm always eager to push the boundaries of what's possible in the realm of technology.</p>
        <p className="">Here are the tools and languages that I'm knowledgeable of:</p>
      </div>
      <Tools/>
    </div>
    <Projects/>
    <Footer/>
    </main>
  );
}
