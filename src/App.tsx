// Components
import Header from "./components/header/Header";
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
    </>
  );
}

export default App;
