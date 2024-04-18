import { Separator } from "@/components/ui/separator";
import { MusicIcon } from "lucide-react";
import TsIcon from "../assets/ts-icon.svg";
import ReactIcon from "../assets/react.svg";
import JsIcon from "../assets/js.svg";
import NodeIcon from "../assets/node-js.svg";
import MongodbIcon from "../assets/mongodb.svg";
import SQLIcon from "../assets/sql.svg";
import PostmanIcon from "../assets/postman.svg";

const About = () => {
  return (
    <div className="flex flex-col gap-6 container py-8">
      <h1 className="lg:py-8 font-bold md:text-2xl text-2xl py-4 text-center border-b-2 border-b-blue-500">
        O mnie
      </h1>
      <Separator />
      <div className="text-center lg:grid lg:grid-rows-2 lg:grid-cols-[2fr_1fr] items-center">
        <div className="lg:text-xl md:text-2xl">
          Lubię tworzyć od kiedy pamiętam, a jak wiadomo, niemal każda forma
          ekspresji jest dobra. Początek mojej nauki programowania zaczęłam z
          Pythonem, kiedy brat pokazał mi, jak można ułatwić sobie nim życie,
          automatyzując różne zadania. Później skierowałam się ku stronom
          internetowym, gdzie skupiałam się wyłącznie na backendzie. Od niedawna
          pochylam się również nad rzeczami, które sprawiają, że strona nie
          tylko działa dobrze, ale też wygląda.
        </div>

        <div className="text-sm md:text-xl lg:text-xl flex flex-col items-center py-10">
          W wolnym czasie gram na skrzypcach i jestem członkiem{" "}
          <a
            className="font-bold text-blue-700 hover:text-blue-600 transition-colors duration-300"
            href="https://www.facebook.com/profile.php?id=100091833829398&locale=pl_PL"
            rel="noopener noreferrer"
          >
            Orkiestry Symfonicznej Politechniki Śląskiej,
          </a>
          gdzie mogę dzielić się muzyką z innymi <MusicIcon />
        </div>

        <span className="text-xl flex grid-col flex-wrap items-center text-gray-500 font-bold gap-2">
          <p className="p-5">Czego głównie używam:</p>
          <img src={ReactIcon} height={30} width={30} />
          <img src={TsIcon} height={30} width={30} />
          <img src={JsIcon} height={30} width={30} />
          <img src={NodeIcon} height={30} width={30} />
          <img src={MongodbIcon} height={30} width={30} />
          <img src={SQLIcon} height={30} width={30} />
          <img src={PostmanIcon} height={30} width={30} />
        </span>
      </div>
    </div>
  );
};

export default About;
