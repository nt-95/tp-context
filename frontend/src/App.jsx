import { useEffect } from "react"
import PageNavigation from "pages/PageNavigation"
import { BrowserRouter as Router } from "react-router-dom"
import UserProvider from "contexts/UserContext"

function App() {
  useEffect(() => {}, [])

  return (
    <Router>
      <UserProvider>
        <div className="container min-h-screen bg-slate-800">
          <PageNavigation />
        </div>
      </UserProvider>
    </Router>
  )
}

export default App
