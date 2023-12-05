import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <Link style={{marginRight:"10px"}} to={"/example1"}>Example 1</Link>
      <Link to={"/example2"}>Example 2</Link>
    </div>
  );
}

export default Home;
