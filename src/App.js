import SideBar from "./components/SideBar";
import AccordianPage from "./pages/AccordianPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropdownPage";

import Route from "./Route";

function App() {
  return (
    <div className="flex justify-evenly p-5 m-5">
      <div>
        <SideBar />
      </div>
      <Route path="/accordian">
        <AccordianPage />
      </Route>
      <Route path="/button">
        <ButtonPage />
      </Route>
      <Route path="/dropdown">
        <DropDownPage />
      </Route>
    </div>
  );
}

export default App;
