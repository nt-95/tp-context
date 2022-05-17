import { useEffect } from "react"
import PageNavigation from "pages/PageNavigation"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  useEffect(() => {}, [])

  return (
    <Router>
      <section className="w-2/4 mt-12">
        <PageNavigation />
      </section>
    </div>
    </Router>
  )
}

export default App
