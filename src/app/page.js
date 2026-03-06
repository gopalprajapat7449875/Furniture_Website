
import BannerSection from "./components/home/BannerSection.jsx"
import Bestselling from "./components/home/Bestselling";
import Formsection from "./components/home/Formsection.jsx";
import OfferSection from "./components/home/OfferSection.jsx";
import Support from "./components/home/Support.jsx";
import Tabing from "./components/home/Tabing.jsx";
import TrandingColaction from "./components/home/TrandingColaction.jsx";
import Testimonial from "./comon/Testimonial.jsx"





export default function Home() {
  return (
    <>

<BannerSection/>

<OfferSection/>
<Tabing/>

<TrandingColaction/>
<Bestselling/>
<Support/>
<Testimonial/>
<Formsection/>
    </>
  );
}
