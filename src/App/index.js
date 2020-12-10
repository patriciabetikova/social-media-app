import { HomePage } from "pages/HomePage"
import { LoginPage } from "pages/LoginPage"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

export const App = () => (
  <div className="App">
    <Router>
      <header className="App-header">
        <p>Ahoj</p>

        <Link to="/login">Login</Link>
        <Link to="/">Home</Link>
      </header>

      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/" exact>
          <HomePage />
        </Route>
      </Switch>
    </Router>
  </div>
)

export default App
