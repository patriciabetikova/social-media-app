import { SideBar } from "components/SideBar"

const mockedImage = (id, gender) =>
  `https://randomuser.me/api/portraits/${gender}/${id}.jpg`

const mockedFriends = [
  { name: "Bill Smith", image: mockedImage(25, "women") },
  { name: "Amanda Red", image: mockedImage(14, "women") },
  { name: "Tom Handy", image: mockedImage(33, "men") },
  { name: "John Slick", image: mockedImage(62, "men") },
]

const mockedPhotos = [
  { src: mockedImage(1, "women"), alt: "1" },
  { src: mockedImage(2, "women"), alt: "2" },
  { src: mockedImage(3, "women"), alt: "3" },
  { src: mockedImage(4, "women"), alt: "4" },
]

export const ProfilePage = () => (
  <>
    <div>
      <SideBar friends={mockedFriends} photos={mockedPhotos} />
    </div>
    <div>posts</div>
  </>
)
