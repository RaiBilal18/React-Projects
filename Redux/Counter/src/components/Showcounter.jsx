import { useSelector } from "react-redux";

const Showcounter = () => {
  let { counterval } = useSelector((store) => store.counter);
  return <p className="lead mb-4">Counter Current Value {counterval}</p>;
};
export default Showcounter;
