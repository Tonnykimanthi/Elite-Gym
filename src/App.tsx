// Components
import Header from "./components/header/Header";
// Images
import headerBg from "./assets/headerBg.avif";
import TrainingSection from "./components/training/TrainingSection";

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
    </>
  );
}

export default App;
