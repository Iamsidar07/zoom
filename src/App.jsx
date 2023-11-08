import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { ClerkProvider } from "@clerk/clerk-react";
import Signin from "./pages/Signin";

function App() {
  return (
    <>
      <ClerkProvider
        publishableKey={import.meta.env.VITE_APP_CLERK_PUBLISHABLE_KEY}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/room/:roomId" element={<Room />} />
        </Routes>
      </ClerkProvider>
    </>
  );
}

export default App;
