import PageNavigation from "pages/PageNavigation"
import { BrowserRouter as Router } from "react-router-dom"
import UserProvider from "contexts/UserContext"
import MovieResultsProvider from "contexts/MovieResultsContext"

function App() {
  return (
    <Router>
      <UserProvider>
        <MovieResultsProvider>
          <div className="container min-h-screen bg-slate-800">
            <PageNavigation />
          </div>
        </MovieResultsProvider>
      </UserProvider>
    </Router>
  )
}

export default App
