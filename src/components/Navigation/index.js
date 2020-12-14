import { urls } from "pages/urls"
import * as R from "ramda"
import { Link } from "react-router-dom"

export const Navigation = () => (
  <ul>
    {R.values(urls)
      .filter((url) => url.nav)
      .map((url) => (
        <li key={url.path}>
          <Link to={url.path}>{url.name}</Link>
        </li>
      ))}
  </ul>
)
