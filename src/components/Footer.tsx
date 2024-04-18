import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";

const Footer = () => {
  return (
    <div className="bg-blue-900 py-5">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <span className="font-bold text-1xl text-white tracking-tight">
          © Anna Daszyńska 2024
        </span>
        <div className="text-white flex space-x-4">
          <p className="font-bold tracking-tight">Jestem też tutaj:</p>
          <a href="https://github.com/a-daszek" rel="noopener noreferrer">
            <GitHubLogoIcon width={25} height={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/anna-daszyńska-abb326256/"
            rel="noopener noreferrer"
          >
            <LinkedInLogoIcon width={25} height={25} />
          </a>
        </div>
        {/* <span className="font-bold text-1xl text-white tracking-tight">
          Zmień język: PL/EN
        </span> kiedyś to zaimplementuję */}
      </div>
    </div>
  );
};

export default Footer;
