import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import GreenForm from "./components/GreenForm";
import EwayForm from "./components/EwayForm";
import Ewaybill from "./components/Ewaybill";
import Temp2 from "./components/Temp2";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Pdffill from "./pages/Pdffill";
import Verify from "./pages/Verify";
import AuthorizationForm from "./components/AuthorizationForm";

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/green-form" element={<GreenForm />} />
        <Route path="/eway-form" element={<EwayForm />} />
        <Route path="/ewaybill" element={<Ewaybill />} />
        <Route path="/temp2" element={<Temp2 />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/pdffill" element={<Pdffill />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/AuthorizationForm" element={<AuthorizationForm />} />

      </Routes>
    </Router>
  );
}

export default App;


// import "./App.css";
// import HomePage from "./pages/HomePage";
// import GreenForm from "./components/GreenForm";
// import EwayForm from "./components/EwayForm";
// import Ewaybill from "./components/Ewaybill";
// import Temp2 from "./components/Temp2";
// import { useState } from "react";
// import Dashboard from "./pages/Dashboard";
// import Pdffill from "./pages/Pdffill";
// import Verify from "./pages/Verify";



// function App() {
//   const [isLogin,setIsLogin]=useState(true);
//   return (
//    <div>
//     {/* <HomePage/> */}
//     {/* <GreenForm/> */}
//      {/* <Temp2/> */}
//      {/* <Ewaybill /> */}
//      <Verify />
//       {/* < Dashboard /> */}
//       < Pdffill />
//    </div>
//   );
// }

// export default App;
