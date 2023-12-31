import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:9000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.log(err);
      });
  });
  return <div>{message}</div>;
}

export default App;
