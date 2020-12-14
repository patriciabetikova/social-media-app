import { StyledPage } from "./styled"
import { Navigation } from "components/Navigation"

export const Page = ({ withNavigation, children }) => (
  <StyledPage>
    <Navigation />
    {children}
  </StyledPage>
)
