import "./Header.css";

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
        </div>
        <img
        className="headerImg"
        src="https://cdn.pixabay.com/photo/2020/04/19/18/43/landscape-5064988_1280.jpg"
        alt="Image not available"
      />
    </div>
  );
}
