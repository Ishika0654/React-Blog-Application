import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Write from "./pages/write/Write";
import Settings from "./pages/settings/Settings";
import Single from "./pages/single/Single";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Sidebar from "./components/sidebar/SideBar";

function App() {
  const user = false;
  return (
    <>
     <BrowserRouter>
       <TopBar /> 
       <Routes>
       <Route exact path="/" element={<Login/>} />
       {/* <Route exact path="/" element={<Home/>} /> */}
       <Route path="/posts/:id" element={<Home />} />
       <Route path="/about" element={<Sidebar/>} />
       <Route path="/register" element={user ? <Home/> : <Register />} /> 
       <Route path="/login" element= {user ? <Home/> : <Login />} />
       <Route path="/post/:id" element={<Single />} />
       {/* <Route path="/write" element={user ? <Write /> : <Login />} /> */}
       <Route path="/write" element={<Write/>} />
       <Route path="/settings" element={user ? <Settings/> : <Login /> } />
       </Routes>
     </BrowserRouter> 
    </>
  );
}

export default App;