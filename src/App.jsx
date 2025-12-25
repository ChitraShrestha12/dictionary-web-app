import Header from "./Components/Header";
import { PreferencesProvider } from "./context/PreferencesContext";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <PreferencesProvider>
        <Header />
        <Home />
      </PreferencesProvider>
    </>
  );
}

export default App;
