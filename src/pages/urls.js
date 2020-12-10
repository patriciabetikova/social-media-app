import { NewsFeedPage } from "./NewsFeedPage"
import { LoginPage } from "./LoginPage"
import { ProfilePage } from "./ProfilePage"
import { NotFoundPage } from "./NotFoundPage"

export const urls = {
  newsFeed: {
    path: "/",
    component: NewsFeedPage,
    loggedIn: true,
    exact: true,
    nav: true,
    name: "NewsFeed",
  },
  profile: {
    path: "/profile",
    component: ProfilePage,
    loggedIn: true,
    nav: true,
    name: "Profile",
  },
  login: {
    path: "/login",
    component: LoginPage,
    loggedIn: false,
    nav: true,
    name: "Login",
  },
  notFound: {
    path: "/*",
    component: NotFoundPage,
    loggedIn: false,
    name: "Not found",
  },
}
