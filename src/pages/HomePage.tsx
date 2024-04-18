import Typewriter from "typewriter-effect";
import Portfolio from "../assets/portfolio.png";
import Hotel from "../assets/hotel-booking-app.png";
import Order from "../assets/food-ordering-app.png";
import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 py-4 gap-2 text-center">
        <div className="Typewriter__wrapper Typewriter__cursor py-8"></div>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("Hello World!")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Koduję")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Piszę")
              .pauseFor(2500)
              .deleteAll()
              .typeString("Tworzę strony w internecie")
              .start();
          }}
        />
      </div>
      <h1 className="text-gray-500 py-10 font-bold text-2xl">
        Jestem studentką trzeciego roku informatyki <br />i zgłębiam wiedzę na
        temat fullstack web developmentu.
      </h1>
      <h2 className="font-bold tracking-tight text-3xl py-6 border-b-2 border-b-blue-500">
        Portfolio
      </h2>
      <div className="grid grid-cols-1 xl:grid-cols-3 rounded-lg p-10 gap-5 rounded-lg bg-blue-400">
        <Link to="/projects/#portfolio">
          {" "}
          <img
            className="w-full h-full object-cover object-center"
            src={Portfolio}
            alt="Portfolio"
          />
        </Link>
        <Link to="/projects/#hotel">
          {" "}
          <img
            className="w-full h-full object-cover object-center"
            src={Hotel}
            alt="Portfolio"
          />
        </Link>
        <Link to="/projects/#ordering">
          {" "}
          <img
            className="w-full h-full object-cover object-center"
            src={Order}
            alt="Portfolio"
          />
        </Link>
      </div>
      <div
        id="contact"
        className="flex flex-col justify-between items-center py-10 border-t-2 border-t-blue-500"
      >
        <span className="flex flex-row font-bold text-4xl py-5">
          Kontakt
          <Mail className="mx-2" height={40} width={40} />
        </span>
        <p className="py-7 text-gray-500 font-bold text-2xl tracking-tighter p-3">
          Jeśli chcesz się ze mną skontaktować w jakiejkolwiek sprawie, wyślij
          wiadomość na mój email!
        </p>

        <div className="m-4 p-1 rounded-lg from-rose-400 via-fuchsia-500 to-indigo-500 bg-gradient-to-r">
          <a
            className="block text-black px-4 text-xl py-2 font-bold rounded-lg bg-white hover:bg-transparent hover:text-white transition dark:bg-black dark:text-white dark:hover:bg-transparent"
            href="mailto:anna.daszynska@protonmail.com"
            rel="noopener noreferrer"
          >
            Napisz do mnie
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
