import { useEffect, useState } from "react";

let Currenttime = () => {
  let [dateTime, setdatetime] = useState(new Date());
  useEffect(() => {
    console.log("The Interval is started Now");
    const interval = setInterval(() => {
      setdatetime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <p>
      This Is The Current Time:{dateTime.toLocaleDateString()} -{" "}
      {dateTime.toLocaleTimeString()}
    </p>
  );
};
export default Currenttime;
