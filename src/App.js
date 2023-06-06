import AccordianPage from "./pages/AccordianPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropdownPage";
import Link from "./Link";
import Route from "./Route";

function App() {
  return (
    <div className="App">
      <Link to="/accordian">Accordian</Link>
      <Link to="/button">Button</Link>
      <Link to="/dropdown">DropDown</Link>

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
