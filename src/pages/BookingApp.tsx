import Hotel from "../assets/hotel-booking-app.png";

const BookingApp = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-wrap py-8 items-center">
        <img
          src={Hotel}
          alt="platforma do zamawiania jedzenia"
          className="w-full"
        />
        <div className="grid grid-cols-2 justify-between py-6 text-xl p-4 gap-2">
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Projekt</p>
            <p>Platforma do składania rezerwacji w hotelach</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Użyte technologie</p>
            <p className="text-wrap">
              Vite, React, Tailwind, Node.js, Typescript, Express, MongoDB,
              Stripe
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Usługi</p>
            <p>Frontend, Backend</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Link</p>
            <a
              href="https://booking-app-pqmb.onrender.com"
              rel="noopener noreferrer"
              className="text-orange-500"
            >
              booking-app
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">
              Dane do testowania strony:
            </p>
            <p>email: test@test.com</p>
            <p>hasło: zaq12wsx</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Github</p>
            <a
              href="https://github.com/a-daszek/booking-app"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              https://github.com/a-daszek/booking-app
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingApp;
