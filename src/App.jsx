import Header from "./pagelayouts/panels/Header/Header";
import Menu from "./pagelayouts/panels/Menu/Menu";
import SideMenu from "./pagelayouts/panels/SideMenu/SideMenu";
import Footer from "./pagelayouts/panels/Footer/Footer";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Header />
      <Menu />
      <SideMenu />
      <Home/>
      <Footer />
    </>
  );
}

export default App;
