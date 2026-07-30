import Maintenance from "./Maintenance";
import Portfolio from "./Portfolio";

const App =
  import.meta.env.VITE_SITE_MODE === "portfolio" ? Portfolio : Maintenance;

export default App;
