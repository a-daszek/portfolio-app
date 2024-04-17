import { Separator } from "@/components/ui/separator";
import Portfolio from "../assets/portfolio.png";
import { ArrowUp } from "lucide-react";
import Hotel from "../assets/hotel-booking-app.png";
import Order from "../assets/food-ordering-app.png";

const Projects = () => {
  return (
    <div className="flex flex-col gap-8 container mx-auto py-10">
      <h1 id="ordering" className="py-8 text-2xl font-bold text-center">
        Moje projekty
      </h1>
      <Separator />
      <div className="grid grid-rows-2 lg:grid-cols-[1fr_2fr] text-center">
        <a href="https://food-ordering-app-frontend-0o2x.onrender.com">
          <img
            className="rounded-lg shadow-lg border-4 border-indigo-300 hover:rotate-1 hover:duration-300 hover:delay-100"
            src={Order}
            alt="projekt"
          />
        </a>
        <div className="text-gray-800 font-bold lg:text-xl md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-yellow-600 to-green-600 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Platforma do zamawiania jedzenia na dowóz z wybranej przez użytkownika
          restauracji. Wykorzystane narzędzia i technologie to m.in: React,
          Typescript, Vite, Node.js, Express, JWT, MongoDB, Mongoose, Auth0,
          multer, cors, Stripe, Tailwind, shadcn, Postman <br /> Dane do
          przetestowania strony:
          <br />
          email: test@test.com
          <br /> hasło: Zaq12wsx! <br />
          Spróbuj wyszukać restaurację w Katowicach, a jeśli chcesz zobaczyć
          więcej wyników, wypróbuj "Manchester" lub "London"
        </div>
        <span id="portfolio" className="font-bold p-3 flex flex-row">
          food-ordering-app <ArrowUp />
          sprawdź
        </span>
      </div>

      <div className="grid grid-rows-2 lg:grid-cols-[1fr_2fr] text-center">
        <a href="https://tailwind.build/classes">
          <img
            className="rounded-lg shadow-lg border-4 border-indigo-300 hover:rotate-1 hover:duration-300 hover:delay-100"
            src={Portfolio}
            alt="projekt 2"
          />
        </a>
        <div className="text-gray-800 font-bold lg:text-xl md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-gray-500 to-gray-600 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Na tej stronie teraz jesteś, zrobiłam ją wykorzystując React, shadcn,
          Vite, lucide-react, react-dom, Tailwind oraz react-router-dom.
        </div>
        <span className="font-bold p-3">portfolio-app</span>
      </div>

      <div
        id="hotel"
        className="grid grid-rows-2 lg:grid-cols-[1fr_2fr] text-center"
      >
        <a
          href="https://booking-app-pqmb.onrender.com"
          rel="noopener noreferrer"
        >
          <img
            className="rounded-lg shadow-lg border-4 border-indigo-300 hover:rotate-1 hover:duration-300 hover:delay-100"
            src={Hotel}
            alt="projekt 3"
          />
        </a>
        <div className="text-gray-800 font-bold lg:text-xl md:text-2xl text-xs tracking-tighter bg-gradient-to-r from-white to-blue-600 rounded-lg lg:mt-8 lg:-mb-8 lg:-mx-4 lg:p-6">
          Strona do robienia rezerwacji w hotelach. Wykorzystane narzędzia i
          technologie to m.in: Vite, React, Tailwind, Node.js, Typescript,
          Express, cors, bcryptjs, JWT, multer, Mongoose MongoDB, Stripe,
          Postman, Playwright - testy.
          <br /> Dane do przetestowania strony:
          <br />
          email: test@test.com <br /> hasło: zaq12wsx
        </div>
        <span className="font-bold p-3 flex flex-row">
          hotel-booking-app <ArrowUp /> sprawdź
        </span>
      </div>
    </div>
  );
};

export default Projects;
