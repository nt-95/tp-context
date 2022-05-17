import "./App.css";
import { useEffect } from "react";
import PageNavigation from "./pages/PageNavigation";

function App() {
  useEffect(() => {}, []);

  return (
    <div className="container min-h-screen px-4 py-4 flex justify-center bg-purple-900 selection:bg-fuchsia-300 selection:text-purple-900">
      <section className="w-2/4 mt-12">
        <PageNavigation />
      </section>
    </div>
  );
}

export default App;
