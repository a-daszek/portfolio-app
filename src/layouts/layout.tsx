import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToAnchor from "@/components/ScrollToAnchor";
import { ThemeProvider } from "@/components/ThemeProvider";

type Props = {
  children: React.ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <ScrollToAnchor />
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto flex-1 py-10">{children}</div>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
export default Layout;
