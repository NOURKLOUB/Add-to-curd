import Navbar from "./components/1-navbar/Navbar";
import Section from "./components/2-section/Section";
import Product from "./components/product/Product";
export default function App() {
  return (
    <div className="container px-4">
        <Navbar/>
        <div className="mt-5"/>
        <Section/>
        <div className="mt-5"/>
        <Product/>
    </div>
  )
}
