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
      {/* <div className="text-center lg:grid lg:grid-rows-2 lg:grid-cols-[2fr_1fr] items-center"> */}
      <div className="text-sm lg:text-sm md:text-2xl text-center">
        Lubię tworzyć odkąd pamiętam, a jak wiadomo, niemal każda forma
        ekspresji jest dobra. Początek mojej nauki programowania zaczęłam z
        Pythonem, kiedy brat pokazał mi, jak można ułatwić sobie nim życie,
        automatyzując różne zadania. Później skierowałam się ku stronom
        internetowym, gdzie skupiałam się w większej mierze na backendzie. Od
        niedawna pochylam się również nad rzeczami, które sprawiają, że strona
        nie tylko działa dobrze, ale też wygląda. Piszę też testy automatyczne
        aby przetestować szybciej napisane funkcjonalności.<br></br>Ukończyłam
        studia inżynierskie pisząc pracę dyplomową pt. "Aplikacja kliencka do
        tworzenia i weryfikacji podpisu cyfrowego", w ramach której stworzyłam
        dwupoziomową infrastrukturę klucza publicznego w fikcyjnej domenie, w
        której użytkownicy mogą przesyłać między sobą podpisane dokumenty za
        pomocą szyfrowania asymetrycznego.
      </div>

      <div className="text-sm md:text-xl lg:text-sm flex flex-col items-center text-center py-10">
        W wolnym czasie gram na skrzypcach i jestem członkiem orkiestry
        akademickiej, gdzie mogę dzielić się muzyką z innymi <MusicIcon />
        Tworzę stronę owej orkiestry, którą można zobaczyć pod adresem:{" "}
        <a href="https://polibudorkiestra.onrender.com">
          https://polibudorkiestra.onrender.com
        </a>
      </div>

      <span className="text-xl flex flex-row flex-wrap items-center text-gray-500 font-bold gap-2">
        <p className="p-3">Czego głównie używam:</p>
        <img src={ReactIcon} height={50} width={50} />
        <img src={TsIcon} height={50} width={50} />
        <img src={JsIcon} height={50} width={50} />
        <img src={NodeIcon} height={50} width={50} />
        <img src={MongodbIcon} height={50} width={50} />
        <img src={SQLIcon} height={50} width={50} />
        <img src={PostmanIcon} height={50} width={50} />
      </span>
      {/* </div> */}
    </div>
  );
};

export default About;
