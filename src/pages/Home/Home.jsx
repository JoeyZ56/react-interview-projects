import Nav from "../../components/Nav/nav";
import "./style.css";
import GBTREACT from "../../assets/GBT-REACT.webp";
import TreeView from "../../components/tree-view";

const Home = () => {
  return (
    <div className="container">
      <Nav />
      <TreeView />
      <h1>React Interview Builds</h1>
      <img src={GBTREACT} className="gbt-image" />
    </div>
  );
};

export default Home;
