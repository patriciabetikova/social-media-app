import { Card } from "components/Card"
import {
  PostHeader,
  ImageWrapper,
  UserName,
  UserSection,
  DateWrapper,
} from "./styled"

export const Post = ({ text, user, date }) => {
  return (
    <Card>
      <PostHeader>
        <ImageWrapper src={user.img} alt="profile pic" />
        <UserSection>
          <UserName>{user.name}</UserName>
          <DateWrapper>{date.toISOString()}</DateWrapper>
        </UserSection>
      </PostHeader>
      <p>{text}</p>
      <div>
        <button>like</button>
        <button>comment</button>
        <button>share</button>
      </div>
    </Card>
  )
}
