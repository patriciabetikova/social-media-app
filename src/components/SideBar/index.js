import { SectionTitle } from "./styled"

export const SideBar = ({ friends, photos }) => (
  <>
    <SectionTitle>Friends</SectionTitle>
    {friends.map((friend) => (
      <img src={friend.image} alt={friend.name} />
    ))}
    <SectionTitle>Photos</SectionTitle>
    {photos.map((photo) => (
      <img src={photo.src} alt={photo.alt} />
    ))}
  </>
)
