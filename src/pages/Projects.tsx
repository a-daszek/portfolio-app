import Portfolio from "../assets/portfolio.png";
import { ArrowUp } from "lucide-react";
import Hotel from "../assets/hotel-booking-app.png";
import Order from "../assets/food-ordering-app.png";
import Orchestra from "../assets/orchestra.png";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 container mx-auto py-10">
      <h1
        id="ordering"
        className="py-8 text-2xl font-bold text-center border-b-2 border-b-blue-500"
      >
        Moje projekty
      </h1>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] text-center">
        <a
          href="https://food-ordering-app-frontend-0o2x.onrender.com"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-lg shadow-lg shadow-green-600 border-4 border-green-500 hover:rotate-1 hover:duration-300 hover:delay-100"
            src={Order}
            alt="projekt"
          />
        </a>
        <div className="border-2 border-gray-500 text-gray-800 font-bold lg:text-sm md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-white to-green-400 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Platforma do zamawiania jedzenia na dowóz. Spróbuj wyszukać
          restaurację w Katowicach, a jeśli chcesz więcej wyników, sprawdź
          Londyn bądź Manchester. Strona jest wdrożona na darmowym planie
          Render, skąd mogą wynikać początkowe opóźnienia w jej działaniu.
          <Link to="/projects/ordering">
            <p className="text-blue-700 hover:text-blue-900">
              Poczytaj o strukturze i implementacji funkcjonalności...
            </p>
          </Link>
          Dane do przetestowania strony:
          <br />
          email: test@test.com
          <br /> hasło: Zaq12wsx! <br />
        </div>
        <span id="portfolio" className="font-bold p-3 flex flex-row">
          food-ordering-app <ArrowUp />
          sprawdź
        </span>
      </div>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] text-center">
        <a
          href="https://polibudorkiestra.onrender.com"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-lg shadow-lg shadow-red-200 border-4 border-red-300 hover:rotate-1 hover:duration-300 hover:delay-100"
            src={Orchestra}
            alt="projekt"
          />
        </a>
        <div className="border-2 border-gray-500 text-gray-800 font-bold lg:text-sm md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-white to-red-200 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Strona stworzona dla orkiestry akademickiej Politechniki Śląskiej.
          Stale w trakcie developmentu, jednak deployment będzie z końcem
          września tego roku.
          <br />
          Strona jest zrobiona z użyciem React, Vite, Tailwind, Typescript,
          Node.js, Express, MongoDB, Cloudinary.
        </div>
        <span id="orchestra" className="font-bold p-3 flex flex-row">
          orchestra-site <ArrowUp />
          sprawdź
        </span>
      </div>

      <div className="md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] text-center">
        <img
          className="rounded-lg shadow-lg shadow-gray-600 border-4 border-gray-500 hover:rotate-1 hover:duration-300 hover:delay-100"
          src={Portfolio}
          alt="projekt 2"
        />
        <div className="border-2 border-gray-500 text-gray-800 font-bold lg:text-sm md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-white to-gray-400 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Na tej stronie teraz jesteś, zrobiłam ją wykorzystując React, shadcn,
          Vite, lucide-react, react-dom, Tailwind oraz react-router-dom.
          <br />
          Niedługo chciałabym dodać również możliwość zmiany języka z polskiego
          na angielski z pomocą biblioteki i18next oraz podstronę z blogiem.
        </div>
        <span className="font-bold p-3">portfolio-app</span>
      </div>

      <div
        id="hotel"
        className="md:grid md:grid-cols-2 lg:grid-cols-[1fr_2fr] text-center"
      >
        {/* <a
          href="https://booking-app-pqmb.onrender.com"
          rel="noopener noreferrer"
        >
        </a> */}
        <img
          className="rounded-lg shadow-lg shadow-blue-600 border-4 border-blue-500 hover:rotate-1 hover:duration-300 hover:delay-100"
          src={Hotel}
          alt="projekt 3"
        />
        <div className="border-2 border-gray-500 text-gray-800 font-bold lg:text-sm md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-white to-blue-400 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Strona do robienia rezerwacji w hotelach. Jest to moja pierwsza
          większa aplikacja zrobiona w stacku MERN, na której uczyłam się
          tworzenia filtrów wyszukiwania, autoryzacji czy tego jak działają
          tokeny.
          <Link to="/projects/booking">
            <p className="text-blue-700 hover:text-blue-900">
              Dowiedz się więcej...
            </p>
          </Link>
          {/* Dane do przetestowania strony:
          <br />
          email: test@test.com <br /> hasło: zaq12wsx */}
        </div>
        <span className="font-bold p-3">hotel-booking-app</span>
      </div>
    </div>
  );
};

export default Projects;
