import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";

// components
import Footer from "./components/Footer.tsx";
import Navbar from "./components/Navbar.tsx";

// constants
const TEXT_AREA_LENGTH = 512;
const BASE_PATH = "/qr-gen/";

function App() {
  const [value, setValue] = useState("");

  useEffect(() => {
    const pathname = window.location.pathname;
    if (pathname.startsWith(BASE_PATH)) {
      const newValue = pathname.replace(BASE_PATH, "");
      setValue(newValue);
    }
  }, []);

  const handleValueChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = event.target.value;
    setValue(value);
  };

  return (
    <>
      <Navbar />

      <div className="flex grow flex-col items-center justify-center">
        <fieldset className="fieldset">
          <legend className="fieldset-legend text-2xl">QR Code Value</legend>
          <textarea
            className="textarea textarea-lg h-64 w-72 md:h-64 md:w-128"
            placeholder="Type here"
            maxLength={TEXT_AREA_LENGTH}
            value={value}
            onChange={handleValueChange}
            aria-label="QR Code Value Input"
          ></textarea>
          <div className="fieldset-label text-base">
            Characters left: {TEXT_AREA_LENGTH - value.length}
          </div>
        </fieldset>

        {value && (
          <div className="m-4">
            <QRCodeSVG value={value} marginSize={1} size={350} />
          </div>
        )}
      </div>

      <Footer />
    </>
  );
}

export default App;
