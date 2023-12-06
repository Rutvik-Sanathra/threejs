import { Link } from "react-router-dom";

function Home() {
  return (
    <div >
      <Link style={{marginRight:"10px"}} to={"/example1"}>Example 1</Link>
      <Link  style={{marginRight:"10px"}} to={"/example2"}>Example 2</Link>
      <Link to={"/example3"}>Example 3</Link>
    </div>
  );
}

export default Home;
