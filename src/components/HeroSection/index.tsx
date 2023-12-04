"use client";
import Image from "next/image";
import { Link } from "react-scroll";
import Headshot from "@/assests/headshot.jpg";
import { ArrowDownIcon, DownloadIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";

export default function HeroSection() {
  return (
    <section id="hero">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 py-16 sm:py-20 md:py-28 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image src={Headshot} alt="" width={325} height={325} className="rounded-full shadow-2xl" />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Riyyan!</h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a <span className="font-semibold text-teal-600">Frontend Developer </span>
            based in Serang, Banten. Working towards creating software that makes life easier and more meaningful.
          </p>
          <div className="flex gap-4">
            <Link to="contact" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
              <Button variant="outline" className="font-semibold p-6 shadow">
                <EnvelopeClosedIcon className="mr-2 h-4 w-4" /> Contact Me
              </Button>
            </Link>
            <a href="https://drive.google.com/file/d/1htxaftwBzEMKFksnj1RZK6w1ohnLLjPJ/view?usp=sharing" target="_blank">
              <Button className="p-6 shadow">
                <DownloadIcon className="mr-2 h-4 w-4" /> Download CV
              </Button>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link to="about" activeClass="active" spy={true} smooth={true} offset={-100} duration={500}>
          <ArrowDownIcon width={50} height={50} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
}
