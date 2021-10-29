import "../styles/globals.css";

import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const MyApp = ({ Component, pageProps }) => {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default MyApp;
