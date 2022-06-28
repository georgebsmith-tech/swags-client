import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <h1>This is for all pages</h1>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
