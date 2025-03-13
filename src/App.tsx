import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

// components
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

// constants
const TEXT_AREA_LENGTH = 512;

function App() {
  const [value, setValue] = useState("");

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  useEffect(() => {
    setValue(window.location.pathname.slice(1));
  }, []);

  return (
    <>
      <Navbar />

      <div className="flex grow flex-col items-center justify-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">QR Code Value</legend>
          <textarea
            className="textarea h-64 w-128"
            placeholder="Type here"
            maxLength={TEXT_AREA_LENGTH}
            value={value}
            onChange={handleValueChange}
            aria-label="QR Code Value Input"
          ></textarea>
          <div className="fieldset-label">
            Characters left: {TEXT_AREA_LENGTH - value.length}
          </div>
        </fieldset>

        {value && (
          <div className="m-4">
            <QRCodeSVG value={value} marginSize={1} size={384} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
