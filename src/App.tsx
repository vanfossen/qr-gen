import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="flex grow flex-col items-center justify-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">QR Code Value</legend>
          <textarea
            className="textarea h-64 w-128"
            placeholder="Type here"
          ></textarea>
        </fieldset>
      </div>

      <Footer />
    </>
  );
}

export default App;
