import { useEffect } from "react"
import PageNavigation from "pages/PageNavigation"
import { BrowserRouter as Router } from "react-router-dom"

function App() {
  useEffect(() => {}, [])

  return (
    <Router>
      <div className="container min-h-screen bg-slate-800">
        <PageNavigation />
      </div>
    </Router>
  )
}

export default App
