import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import PublicHomeScreen from "./screens/publicHomescreen/PublicHomeScreen";
import CommonNavbar from "./components/commonNavbar/CommonNavbar";
import Footer from "./components/common-footer/Footer";
import Login from "./screens/login/login";
import RestroProfilePage from "./components/RestroProfile/RestroProfilePage";
// import AddMenu from "./screens/addmenu/AddMenu";
// import EditMenu from "./screens/editmenu/EditMenu";
import CreateRestaurantAccount from "./screens/login/createRestaurantAccount";
import axios from "axios";
import EditRestoProfile from './screens/editprofile/EditProfile'
import ProtectedRoute from "./ProtectedRouting";
import Delivery from "./screens/deliverySystem/delivery";
import ForgotPassword from "./screens/login/ForgotPassword";
import ResetPassword from "./screens/login/ResetPassword";



//for using response in catch block
axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    return Promise.reject(error.response);
  }
);
function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route
            exact
            path='/delivery'
            element={
              <>
                <CommonNavbar />
                <Delivery />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path='/login'
            element={
              <>
                <Login />
              </>
            }
          ></Route>
          <Route
            exact
            path='/signup'
            element={
              <>
                <CreateRestaurantAccount />
              </>
            }
          ></Route>
          <Route
            exact
            path='/'
            element={
              <>
                <CommonNavbar />
                <ProtectedRoute component={RestroProfilePage} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path="/editrestoprofile"
            element={
              <>
                <EditRestoProfile />
              </>
            }>
          </Route>
          <Route exact path="/forgotPassword" element={<ForgotPassword />}></Route>
          <Route exact path="/getToken" element={<ResetPassword/>}></Route>
          {/* <Route
            exact
            path="/addMenu"
            element={
              <>
                <CommonNavbar />
                <ProtectedRoute component={AddMenu} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path='/editMenu'
            element={
              <>
                <CommonNavbar />
                <ProtectedRoute component={EditMenu} />
                <Footer />
              </>
            }
          ></Route>
          <Route
            exact
            path='/editrestoprofile'
            element={
              <>
                <ProtectedRoute component={EditRestoProfile} />
              </>
            }></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
