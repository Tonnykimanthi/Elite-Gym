// Components
import Header from "./components/header/Header";
import TrainingSection from "./components/training/TrainingSection";
import Membership from "./components/membership/Membership";
import Testimonials from "./components/testimonials/Testimonials";
// Images
import headerBg from "./assets/headerBg.avif";

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
      <Testimonials />
    </>
  );
}

export default App;
