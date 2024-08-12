import Post from "../post/Post"
import "./posts.css"

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAMYfBgwEpl3FxhYGCI8FNhaq0WtPsmWe-eg&usqp=CAU" />
      <Post img="https://images.pexels.com/photos/6758029/pexels-photo-6758029.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
      <Post img="https://images.pexels.com/photos/6711867/pexels-photo-6711867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>
      <Post img="https://media.istockphoto.com/id/1184990695/photo/beautiful-waterfall-nature-scenery-of-colorful-deep-forest-in-summer-day.jpg?s=612x612&w=0&k=20&c=fWDrCthgfweoDsJuqxYQsMOwLZ2rNI9xbLl5NH5ima0="/>
      <Post img="https://hips.hearstapps.com/hmg-prod/images/scenic-view-of-building-against-sky-royalty-free-image-1623350650.jpg"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFnbkbAtR97jWcFY1PqsLgrKMwfArpWL1JNg&usqp=CAU"/>
    </div>
  );
}
