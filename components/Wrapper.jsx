import Footer from "./Footer";
import Header from "./Header";
export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 z-50">{children}</div>
      <Footer />
    </>
  );
}
