import { urls } from "pages/urls"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import * as R from "ramda"
import { GlobalStyle } from "./GlobalStyle"

export const App = () => (
  <Router>
    <GlobalStyle />
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
