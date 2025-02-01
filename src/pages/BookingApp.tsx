import Hotel from "../assets/hotel-booking-app.png";
import BookingStructure from "../assets/booking-structure.png";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

const BookingApp = () => {
  const codeString = `test("should allow the user to sign in", async ({ page }) => {
    await page.goto(UI_URL);
  
    await page.getByRole("link", { name: "Zaloguj się" }).click();
    await expect(
      page.getByRole("heading", { name: "Zaloguj się" })
    ).toBeVisible();
  
    await page.locator("[name=email]").fill("test@test.com");
    await page.locator("[name=password]").fill("zaq12wsx");
  
    await page.getByRole("button", { name: "Zaloguj się" }).click();
    await expect(page.getByText("Zalogowano się pomyślnie.")).toBeVisible();
  
    await expect(
      page.getByRole("link", { name: "Moje rezerwacje" })
    ).toBeVisible();
    await expect(page.getByRole("link", { name: "Moje hotele" })).toBeVisible();
    await expect(page.getByRole("button", { name: "Wyloguj się" })).toBeVisible();
  });`;
  // const customStyle = ;
  return (
    <div className="container mx-auto">
      <div className="flex flex-col flex-wrap py-8 items-center">
        <img
          src={Hotel}
          alt="platforma do zamawiania jedzenia"
          className="w-full"
        />
        <div className="grid grid-cols-2 justify-between py-6 text-xl lg:text-sm p-4 gap-2">
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
          {/* <div className="flex flex-col">
            <p className="font-bold text-gray-500">Link</p>
            <a
              href="https://booking-app-pqmb.onrender.com"
              rel="noopener noreferrer"
              className="text-orange-500"
            >
              booking-app
            </a>
          </div> */}
          {/* <div className="flex flex-col">
            <p className="font-bold text-gray-500">
              Dane do testowania strony:
            </p>
            <p>email: test@test.com</p>
            <p>hasło: zaq12wsx</p>
          </div> */}
          <div className="flex flex-col">
            <p className="font-bold text-gray-500">Github</p>
            <a
              href="https://github.com/a-daszek/booking-app"
              rel="noopener noreferrer"
              className="text-blue-500 text-pretty"
            >
              github.com/a-daszek/booking-app
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-3xl lg:text-xl">Struktura projektu</h1>
        <div className="grid lg:grid-cols-[1fr_2fr] md:grid-cols-2 py-5">
          <img
            src={BookingStructure}
            alt="struktura projektu"
            className="p-2 md:w-[90%] w-[70%]"
          />
          <span className="flex flex-col">
            <h2 className="font-bold text-2xl text-gray-500 py-2 border-b-2 border-b-blue-500">
              Frontend i Backend
            </h2>
            <div className="py-4">
              <p className="lg:text-sm md:text-xl text-sm">
                Projekt ten ma bardzo podobną strukturę jak platforma do
                zamawiania jedzenia oraz użyłam tych samych narzędzi do
                implementacji znacznej większości funkcjonalności, z tego powodu
                nie utrzymuję stale jego deploymentu na Render, chociaż
                oczywiście jest możliwe pokazanie jego działania. Wprowadzone
                funkcje to m.in filtry wyszukiwania, rejestracja i login, czy
                dodanie własnego hotelu, którego pokój można zarezerwować.
                <br />
                Uwierzytelnianie użytkowników zostało przeprowadzone bez pomocy
                Auth0, co również było dużym wyzwaniem, jednak koniecznym aby
                zrozumieć ten proces. Dodatkowo, coś co zrobiłam tu i muszę
                zrobić jeszcze w projekcie ordering-app, to przeprowadziłam
                testy, używając narzędzia Playwright.
              </p>
            </div>
            <div className="py-4">
              <p className="text-blue-500">auth.spec.ts</p>
              <p className="lg:text-sm md:text-xl text-sm">
                Poniżej znajduje się fragment kodu testu, który sprawdza czy
                zalogowanie się do strony z danym mailem i hasłem przebiega
                pomyślnie.
              </p>
              <div>
                <SyntaxHighlighter
                  language="javascript"
                  style={atomOneDark}
                  customStyle={{
                    lineHeight: "1.2",
                    fontSize: "0.8rem",
                    wordBreak: "break-all",
                  }}
                  wrapLongLines={true}
                >
                  {codeString}
                </SyntaxHighlighter>
              </div>
            </div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default BookingApp;
