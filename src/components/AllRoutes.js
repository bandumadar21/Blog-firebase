import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import CreatePost from "./CreatePost";
import ProtectedRout from "./ProtectedRout";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/create' element={<ProtectedRout><CreatePost/></ProtectedRout>}/>
      </Routes>
    </div>
  )
};

export default AllRoutes
