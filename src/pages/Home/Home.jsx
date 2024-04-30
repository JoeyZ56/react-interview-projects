import Nav from "../../components/Nav/nav";
import "./style.css";
import GBTREACT from "../../assets/GBT-REACT.webp";

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <h1>React Interview Builds</h1>
      <img src={GBTREACT} className="gbt-image" />
    </div>
  );
};

export default Home;
