import Header from "../Composant/Header";
import Footer from "../Composant/Footer";
import AnnoncesServices from "../Composant/AnnonceServices";
import { ServicesItem } from "../Composant/ServicesItem"; 
import ProcessSection from "../Composant/ProcessSection";
import PriseContactServices from "../Composant/PriseContactServices";

export default function Home() {
  return (
    <>
      <Header />
      <AnnoncesServices />
      <ServicesItem /> 
      <ProcessSection/>
      <PriseContactServices/>
      <Footer />
    </>
  );
}
