import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Coursessection from "./Components/Uncommon/Coursessection";
import Covered from "./Components/Uncommon/Covered";
import Features from "./Components/Uncommon/Features";
import Herosection from "./Components/Uncommon/Herosection";



export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Features/>
      <Coursessection />
      <Covered />
      <Footer />
    </div>
  )
}
