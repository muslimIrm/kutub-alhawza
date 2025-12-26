import Books from "./components/Books/Books";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import HomePage from "./components/home/HomePage";

export default function Home() {
  return (
    <>
      <div dir="rtl" className="flex flex-col !gap-10 !py-20">
        <HomePage />
        <Books />
        <Contact />
      </div>
      <Footer dir={"rtl"} />
    </>
  );
}
