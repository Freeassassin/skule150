async function loadApp() {
  const { React } = await import("react");
  const { ReactDOM } = await import("ReactDOM");
  await import("./index.css");
  const { App } = await import("./App.js"); // this is your normal entry file - (index.js, main.js, app.mjs etc.)
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}
loadApp();
