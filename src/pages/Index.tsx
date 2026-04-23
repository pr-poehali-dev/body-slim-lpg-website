import Navbar from "@/components/Navbar";
import HeroAndServices from "@/components/HeroAndServices";
import AboutPricesReviews from "@/components/AboutPricesReviews";
import ContactsFooter from "@/components/ContactsFooter";

export default function Index() {
  return (
    <div className="min-h-screen bg-cream font-body">
      <Navbar />
      <HeroAndServices />
      <AboutPricesReviews />
      <ContactsFooter />
    </div>
  );
}
