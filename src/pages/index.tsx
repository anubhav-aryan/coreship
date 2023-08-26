import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Coursessection from "./Components/Uncommon/Coursessection";
import Covered from "./Components/Uncommon/Covered";
import Herosection from "./Components/Uncommon/Herosection";
import Stats from "./Components/Uncommon/Stats";



export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Coursessection />
      <Stats />
      <Covered />
      <Footer />
    </div>
  )
}
