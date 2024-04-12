import Image from "next/image";
import python_image from "/public/python.jpeg";
import java_image from "/public/java.png";
import dart_image from "/public/dart.png";
import html_image from "/public/html.webp";
import node_image from "/public/node.png";
import firebase_image from "/public/firebase.png";
import vsc_image from "/public/visualcode.png";
import flutter_image from "/public/flutter.png";
import figma_image from "/public/figma.png";
import git_image from "/public/git.png";

export default function Tools() {
    return(
        <main className="flex flex-col mx-[12rem] mb-5">
            <div className="grid grid-cols-5 px-[12rem]">
                <div><Image
                src={python_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={java_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={dart_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={html_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={node_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={firebase_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={vsc_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={flutter_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={figma_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
                <div><Image
                src={git_image}
                width={100}
                alt="Picture of portfolio text"
                /></div>
            </div>
        </main>
    );
}