// Components
import Header from "./components/header/Header";
// Images
import headerBg from "./assets/headerBg.avif";
import TrainingSection from "./components/training/TrainingSection";
import Membership from "./components/membership/Membership";

function App() {
  return (
    <>
      <div
        className="h-screen bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${headerBg})`,
        }}
      >
        <Header />
      </div>
      <TrainingSection />
      <Membership />
    </>
  );
}

export default App;
