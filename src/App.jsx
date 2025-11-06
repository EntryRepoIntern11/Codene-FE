import { Route, Routes } from "react-router-dom";
import Select_topic from "./pages/Select_Topic";
import Chatting_topic from "./pages/Chat_Topic";
import Chatting_code from "./pages/Chat_Code";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/Select_Topic" element={<Select_topic />} />
      <Route path="/Chat_Topic" element={<Chatting_topic />} />
      <Route path="/" element={<Chatting_code />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/myPage" element={<MyPage />} />
    </Routes>
  );
}

export default App;
