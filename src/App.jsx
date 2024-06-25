import Info from "./components/Info";
import "./App.css";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
function App() {
  return (
    <main className="container--">
      <Info />
      <About />
      <Interest />
      <Footer />
    </main>
  );
}

export default App;
