// Components
import Header from "./components/header/Header";
import TrainingSection from "./components/training/TrainingSection";
import Membership from "./components/membership/Membership";
import Success from "./components/testimonials/Success";
import Testimonials from "./components/testimonials/Testimonials";
import NewsletterSection from "./components/newsletter/NewsletterSection";
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
      <Success />
      <Testimonials />
      <NewsletterSection />
    </>
  );
}

export default App;
