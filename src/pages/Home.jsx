import React from "react";
import { Link } from "react-router-dom";
import { v4 as uuidv5 } from "uuid";

const Home = () => {
  return (
    <div>
      <Link to={`/room/${uuidv5(16)}`}>Create Room</Link>
    </div>
  );
};

export default Home;
