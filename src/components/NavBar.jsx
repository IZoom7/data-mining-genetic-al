import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <nav className="text-5xl p-10 bg-black">
        <Link to="/" className="no-underline text-white">
          Data Mining : Genetic Algorithm
        </Link>
      </nav>
      <div className="flex p-7 bg-red-800 justify-end text-white">
        <div className="flex text-xl">
          <ul className="ml-8">
            <Link to="/TableDataSetting">สร้างข้อมูล</Link>
          </ul>
          <ul className="ml-8">
            <Link to="/Calculate">การคำนวณ</Link>
          </ul>
          <ul className="ml-8">
            <Link to="/Result">ผลลัพธ์</Link>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default NavBar;

//<ul className="ml-8"><Link to="/TableDataSetting">สร้างข้อมูล</Link></ul>
