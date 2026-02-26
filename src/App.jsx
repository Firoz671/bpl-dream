import { Suspense, useState } from "react";
import Player from "./component/Player";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import AvailSelect from "./component/Navbar/AvailSelect";
import Selected from "./component/Selected";
import { ToastContainer, toast } from "react-toastify";
import Footer from "./component/Footer";
const fetchData = async () => {
  const res = await fetch("/data.json");
  return res.json();
};
const dataPromise = fetchData();
function App() {
  const [toggle, setToggle] = useState(true);
  const [coin, setCoin] = useState(50000000000);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <Navbar coin={coin}></Navbar>
      <Hero></Hero>
      {/* <div className=" mt-3 w-10/12 mx-auto flex justify-between items-center">
        <h1>Available</h1>
        <div>
          <button
            onClick={() => setToggle(true)}
            className="p-3 border rounded-l-2xl border-gray-400 border-r-0 bg-[#e4fb29]"
          >
            Available
          </button>
          <button
            onClick={() => setToggle(false)}
            className="p-3 border rounded-r-2xl border-gray-400 border-l-0"
          >
            Selected <span>(0)</span>
          </button>
        </div>
      </div> */}
      <AvailSelect
        toggle={toggle}
        setToggle={setToggle}
        selectedCount={selected.length}
      ></AvailSelect>
      {toggle === true ? (
        <Suspense
          fallback={<p className="w-10//12 mx-auto text-center">loading...</p>}
        >
          <Player
            selected={selected}
            setSelected={setSelected}
            coin={coin}
            setCoin={setCoin}
            dataPromise={dataPromise}
          ></Player>
        </Suspense>
      ) : (
        <Selected selected={selected}></Selected>
      )}
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}
export default App;
