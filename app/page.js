import Navbar from "./constants/Navbar";
import Footer from "./constants/Footer";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Report from "./components/Report";
import Tracker from "./components/Tracker";
import Flexible from "./components/Flexible";
import Trusted from "./components/Trusted";
import Client from "./components/Client";
import Free from "./components/Free";

// pages/_app.js
import '../app/globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400','600'],
  display: 'swap'
})


export default function Home() {
  return (
    <div className="main bg-[#FFF8F2]">
      <Navbar/>
      <Hero/>
      <Features/>
      <Report/>
      {/* <Tracker/> */}
      <Flexible/>
      <Trusted/>
      <Client/>
      <Free/>
      <Footer/>
    </div>
  );
}

