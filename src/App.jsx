import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  return (
    <div className="flex gap-4">
      <h1>Public Pages</h1>
      <button onClick={() => navigate("/admin/login")}>Login as Admin</button>
      <button onClick={() => navigate("/member/login")}>Login as Member</button>
    </div>
  );
}

export default App;
