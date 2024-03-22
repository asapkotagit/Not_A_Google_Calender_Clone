import Calender from "./components/Calender";
import { EventsProvider } from "./context/Events";
import "./styles.css";
function App() {
  return (
    <EventsProvider>
      <Calender />
    </EventsProvider>
  );
}

export default App;
