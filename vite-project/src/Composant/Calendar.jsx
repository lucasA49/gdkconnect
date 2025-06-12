import { useEffect } from "react";

export default function Calendar() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-white px-4">
      <div
        className="calendly-inline-widget w-full max-w-5xl"
        data-url="https://calendly.com/gdkconnect/30min"
        style={{ minWidth: "320px", height: "700px" }}
      ></div>
    </div>
  );
}
