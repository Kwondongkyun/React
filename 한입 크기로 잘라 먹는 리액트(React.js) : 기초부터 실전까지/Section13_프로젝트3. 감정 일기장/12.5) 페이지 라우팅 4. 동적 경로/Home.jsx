import { useSearchParams } from "react-router-dom";

const Home = () => {
  const [params, setParams] = useSearchParams();
  const changeToWorld = () => {
    setParams({ value: "world" });
  };
  const changeToHello = () => {
    setParams({ value: "hello" });
  };

  return (
    <div>
      <button onClick={changeToWorld}>
        Change To wold
      </button>
      <button onClick={changeToHello}>
        Change To Hello
      </button>
      <div></div>
      {params.get("value")}
    </div>
  );
};

export default Home;
