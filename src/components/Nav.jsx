import '../css/nav.css';
import '../index.css';
const Nav = () => {
  return (
    <nav>
        <div className="nav-items text-[12px] px-[20px] py-[8px] lg:px-[40px] lg:text-[14px]">
            <ul>
                <li>Home</li>
                <li>Projects</li>
                <li>Works</li>
                <li>Contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Nav