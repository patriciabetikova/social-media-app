import { urls } from "pages/urls"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import * as R from "ramda"
import { GlobalStyle } from "./GlobalStyle"

export const App = () => (
  <Router>
    <GlobalStyle />
    <ul>
      {R.values(urls)
        .filter((url) => url.nav)
        .map((url) => (
          <li key={url.path}>
            <Link to={url.path}>{url.name}</Link>
          </li>
        ))}
    </ul>
    <Switch>
      {R.values(urls).map((url) => (
        <Route path={url.path} exact={url.exact} key={url.path}>
          {url.component}
        </Route>
      ))}
    </Switch>
  </Router>
)

export default App
