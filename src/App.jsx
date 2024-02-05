import { BrowserRouter, Routes, Route } from "react-router-dom";
import TableDataSetting from "./components/TableDataSetting";
import NavBar from "./components/NavBar";
import Calculate from "./components/Calculate";
import Home from "./components/Home";
import mainpic from "./assets/mainpic.png"



export default function App() {
  return (
      <>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/TableDataSetting" element={<TableDataSetting/>}></Route>
          <Route path="/Calculate" element={<Calculate/>}></Route>
        </Routes>
      </BrowserRouter>
      </>
      
    )
}
