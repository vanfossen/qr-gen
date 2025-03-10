import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { QRCodeSVG } from "qrcode.react";

const TEXT_AREA_LENGTH = 512;

function App() {
  const [value, setValue] = useState("");

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <>
      <Navbar />

      <div className="flex grow flex-col items-center justify-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">QR Code Value</legend>
          <textarea
            id="qr-value"
            className="textarea h-64 w-128"
            placeholder="Type here"
            maxLength={TEXT_AREA_LENGTH}
            value={value}
            onChange={handleValueChange}
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
