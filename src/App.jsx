import './App.css'

import Intro from './Intro'
import Invitation from './Invitation'
import Gallery from './Gallery'
import Calendar from './Calendar'
import Location from './Location'

function App() {
  return (
    <div className="flex flex-col items-center bg-pink-50 min-h-screen text-center">

      <Intro />
      <Invitation />
      <Gallery />
      <Calendar />
      <Location />
    </div>
  );
}

export default App;
