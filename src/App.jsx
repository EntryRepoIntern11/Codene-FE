import { Route, Routes } from "react-router-dom";
// import Login from "./pages/Login";
// import SignUp from "./pages/SignUp";
import Select_topic from "./pages/Select_Topic";
import Select_code from "./pages/Select_Code";
import Chatting_topic from "./pages/Chat_Topic";
import Chatting_code from "./pages/Chat_Code";

function App() {
  return (
    <Routes>
      {/* <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} /> */}
      <Route path="/Select_Topic" element={<Select_topic />} />
      <Route path="/Select_Code" element={<Select_code />} />
      <Route path="/Chat_Topic" element={<Chatting_topic />} />
      <Route path="/" element={<Chatting_code />} />
    </Routes>
  );
}

export default App;
