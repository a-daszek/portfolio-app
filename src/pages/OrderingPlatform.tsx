import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Order from "../assets/food-ordering-app.png";
import StructureFront from "../assets/structure-front.png";
import StructureBack from "../assets/structure-back.png";
import ManageRestaurant from "../assets/manage-restaurant.gif";
import OrderingGif from "../assets/ordering.gif";

const OrderingPlatform = () => {
  const codeString = `const Footer = () => {
    return (
      <div className="bg-green-500 py-10">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <span className="text-3xl text-white font-bold tracking-tight">
            d0stawa.com
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;`;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-wrap py-8 items-center">
        <img
          src={Order}
          alt="platforma do zamawiania jedzenia"
          className="w-full"
        />
        <div className="grid grid-cols-2 justify-between py-6 text-xl p-4 gap-2">
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Projekt</p>
            <p>Platforma do zamawiania jedzenia na dowóz</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Użyte technologie</p>
            <p className="text-wrap">
              React, Typescript, Vite, Node.js, Express, MongoDB, Auth0, Stripe,
              Tailwind
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Usługi</p>
            <p>Frontend, Backend</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Link</p>
            <a
              href="https://food-ordering-app-frontend-0o2x.onrender.com"
              rel="noopener noreferrer"
              className="text-green-500"
            >
              ordering-app
            </a>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">
              Dane do testowania strony:
            </p>
            <p>email: test@test.com</p>
            <p>hasło: Zaq12wsx!</p>
          </div>
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Github</p>
            <a
              href="https://github.com/a-daszek/food-ordering-app-frontend"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Frontend
            </a>
            <a
              href="https://github.com/a-daszek/food-ordering-app-backend"
              rel="noopener noreferrer"
              className="text-blue-500"
            >
              Backend
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl">Struktura projektu</h1>
        <div className="grid lg:grid-cols-[1fr_2fr] md:grid-cols-2 py-5">
          <img
            src={StructureFront}
            alt="struktura projektu"
            className="p-2 md:w-[90%] w-[70%]"
          />
          <span className="flex flex-col">
            <h2 className="font-bold text-2xl text-gray-500 py-2 border-b-2 border-b-blue-500">
              Frontend
            </h2>
            <div className="py-4">
              <p className="text-blue-500">Components folder</p>
              <p className="md:text-xl text-sm">
                Zgodnie z praktyką pisania w React, w folderze frontu znajdują
                się komponenty - są to części jakie składają się na strony w
                aplikacji webowej, np. LoadingButton, Header czy navbar mobilny,
                jak również elementy charakterystyczne dla danej strony, np.
                OrderStatusDetail, CuisineFilter.
              </p>
              <div>
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  wrapLongLines={true}
                  customStyle={{
                    lineHeight: "1.2",
                    fontSize: "0.8rem",
                    wordBreak: "break-all",
                  }}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Layouts folder</p>
              <p className="md:text-xl text-sm">
                Layout.tsx określa wygląd każdej strony w naszej aplikacji i ma
                on w sobie trzy komponenty - Header, Hero oraz Footer.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Pages folder</p>
              <p className="md:text-xl text-sm">
                W tym folderze znajdują się pliki stron - mają one taką samą
                budowę jak komponenty, oraz same w sobie posiadają komponenty z
                folderu Components.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Forms folder</p>
              <p className="md:text-xl text-sm">
                Formy to komponenty, na które również składają się...
                komponenty.
              </p>
            </div>
            <img src={ManageRestaurant} alt="forma gif" />
            <div className="py-4">
              <p className="text-blue-500">Api folder</p>
              <p className="md:text-xl text-sm">
                Tutaj z pomocą react-query zdefiniowane są API do pobierania
                danych, które zostaną wyświetlone na stronie bądź do tworzenia
                żądań. Sprawdzamy ich poprawność oraz deklarujemy czego
                oczekujemy, a w przypadku błędu wyświetlamy komunikat co poszło
                nie tak. Każde z API zadziała tylko wtedy, jeśli użytkownik
                posiada AccessToken dany nam przez Auth0.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Auth folder</p>
              <p className="md:text-xl text-sm">
                Wszystko co potrzebne do uwierzytelniania użytkowników znajduje
                się tutaj. Musimy zadeklarować naszego auth0 providera zgodnie z
                zaleceniami znajdującymi w oficjalnej dokumentacji Auth0 oraz
                wskazać ścieżki do strzeżonych stron w naszej aplikacji, czyli
                takie, do których ma się dostęp tylko po weryfikacji tokenu.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Config folder</p>
              <p className="md:text-xl text-sm">
                Są tu pliki konfiguracyjne, definiują one różne opcje do wyboru,
                np. jeśli chodzi o kuchnie świata - indyjską, polską, chińską
                itd.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">AppRoutes.tsx</p>
              <p className="md:text-xl text-sm">
                Dzięki temu plikowi i react-router-dom jesteśmy przekierowywani
                na inne strony naszego projektu.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">main.tsx</p>
              <p className="md:text-xl text-sm">
                Ten plik jest plikiem głównym naszej aplikacji React, który
                inicjuje ją, renderując jej główny komponent w drzewie DOM.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">types.ts</p>
              <p className="md:text-xl text-sm">
                Określa on strukturę danych i zapewnia ich spójność w całej
                aplikacji dzięki Typescript.
              </p>
            </div>
          </span>

          <img
            src={StructureBack}
            alt="struktura projektu"
            className="p-2 md:w-[90%] w-[70%]"
          />
          <span className="flex flex-col">
            <h2 className="font-bold text-2xl text-gray-500 py-2 border-b-2 border-b-blue-500">
              Backend
            </h2>
            <div className="py-4">
              <p className="text-blue-500">Controllers folder</p>
              <p className="md:text-xl text-sm">
                Pliki znajdujące się w tym folderze są odpowiedzialne za
                wszystkie funkcje obsługujące żądania HTTP w warstwie
                backendowej w Express.js... tak w ogromnym skrócie.
              </p>
            </div>
            <img src={OrderingGif} alt="zamawianie gif" />
            <p>
              Powyższy gif ukazuje dokonywanie płatności za zamówienie, która
              jest możliwa dzięki Stripe - całą logikę zaimplementowałam z
              pomocą YouTube'a i dokumentacji.
            </p>
            <div className="py-4">
              <p className="text-blue-500">Middleware folder</p>
              <p className="md:text-xl text-sm">
                Tutaj znajdują się dwa pliki, jeden odpowiedzialny za
                uwierzytelnianie użytkowników, drugi za walidację danych
                wprowadzanych przy uzupełnianiu danych o swoim koncie oraz
                dodawaniu informacji o swojej restauracji.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Models folder</p>
              <p className="md:text-xl text-sm">
                W tym folderze zawarte są modele ze zdefiniowanym schematem
                danych, które są przechowywane w naszej bazie danych.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">Routes folder</p>
              <p className="md:text-xl text-sm">
                Znajdują się tutaj pliki określające ścieżki routingu związane z
                operacjami na zamówieniach, restauracjach, profilu użytkownika i
                jego restauracjach. Używają middleware do uwierzytelniania
                użytkowników za pomocą tokenów JWT i przekazują żądania do
                odpowiednich metod kontrolera do ich obsługi.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">index.ts</p>
              <p className="md:text-xl text-sm">
                Ten plik definiuje strukturę i konfigurację głównego serwera
                aplikacji, obsługując różne ścieżki API i integrując się z bazą
                danych MongoDB oraz usługą Cloudinary, gdzie przechowywane są
                obrazy przesłane do strony.
              </p>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OrderingPlatform;
