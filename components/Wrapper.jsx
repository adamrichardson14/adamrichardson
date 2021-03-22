import Footer from "./Footer";
import Header from "./Header";
export default function Wrapper({ children }) {
  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 md:px-8">{children}</div>
      <Footer />
    </>
  );
}
