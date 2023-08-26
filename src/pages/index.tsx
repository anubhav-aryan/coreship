import Footer from "./Components/Common/Footer";
import Header from "./Components/Common/Header";
import Coursessection from "./Components/Uncommon/Coursessection";
import Covered from "./Components/Uncommon/Covered";
import Herosection from "./Components/Uncommon/Herosection";



export default function Home() {
  return (
    <div>
      <Header />
      <Herosection />
      <Coursessection />
      <Covered />
      <Footer />
    </div>
  )
}
