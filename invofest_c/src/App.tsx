// import LoginForm from "./pages/LoginForm";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "./pages/HomePageFix";
// import Login from "./pages/Login";
//import RegisterEvent from "./pages/RegisterEvent";
import Shop from "./pages/Shop";
import Women from "./pages/Women"
import Bantuan from "./pages/Bantuan";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import RegisterForm from "./pages/RegisterEvent";
import LoginForm from "./pages/LoginForm";
import Man from "./pages/Man"
import Dashboardindex from "./pages/dashboard/Dashboardindex";
import ProtectedRoute from "./routes/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Categoryindex from "./pages/dashboard/category/Categoryindex";
import CategoryCreate from "./pages/dashboard/category/CategoryCreate";
import Barangindex from "./pages/dashboard/Barang/Barangindex";
import BarangCreate from "./pages/dashboard/Barang/BarangCreate";
import PembicaraIndex from "./pages/dashboard/Pembicara/PembicaraIndex";
import PembicaraCreate from "./pages/dashboard/Pembicara/PembicaraCreate";
import EventIndex from "./pages/dashboard/Event/EventIndex";
import EventCreate from "./pages/dashboard/Event/EventCreate";
import Biodata from "./pages/dashboard/Biodata/biodata";
import UserIndex from "./pages/dashboard/User/userIndex";
import UserCreate from "./pages/dashboard/User/userCreate";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Homepage />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Women" element={<Women />} />
          <Route path="/Bantuan" element={<Bantuan />} />
          <Route path="/Man" element={<Man />} />
        </Route>

        <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
        </Route>

        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
        <Route path="/dashboard" element={<Dashboardindex />} />

        <Route path="/dashboard/category" element={<Categoryindex />}/>
        <Route path="/dashboard/category/create" element={<CategoryCreate />}/>
        <Route path="/dashboard/Barangindex" element={<Barangindex />}/>
        <Route path="/dashboard/Barang/Create" element={<BarangCreate />}/>
        <Route path="/dashboard/Pembicara" element={<PembicaraIndex />}/>
        <Route path="/dashboard/Pembicara/Create" element={<PembicaraCreate />}/>
        <Route path="/dashboard/Event" element={<EventIndex />}/>
        <Route path="/dashboard/Event/Create" element={<EventCreate />}/>
        <Route path="/dashboard/biodata" element={<Biodata />}/>
        <Route path="/dashboard/User" element={<UserIndex />}/>
        <Route path="/dashboard/User/Create" element={<UserCreate />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;