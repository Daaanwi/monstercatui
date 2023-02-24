import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Releases from "./components/Releases";
import TracklistSection from "./components/TracklistSection";
import Main from "./components/Main";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Main />
      <Header />
      <TracklistSection />
      <Releases />
      <Navigation />
      <Footer />
    </main>
  );
}
