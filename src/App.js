import Map from "./component/Map";
import { useState, useEffect } from "react";

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      setLoading(true);
      const res = await fetch(
        "https://eonet.sci.gsfc.nasa.gov/api/v2.1/events"
      );
      const { events } = await res.json();
      setEventData(events);
      setLoading(false);
    };
    fetchEvent();
    console.log(eventData);
  }, []);
  return (
    <div className="App">
      <Map />
    </div>
  );
}

export default App;
