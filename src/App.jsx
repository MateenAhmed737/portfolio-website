import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Portfolio, PageNotFound, Contact, Experience } from "./pages";
import { Navbar, Footer, Project } from "./components";
import { useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "./config/firebase";
// import { Provider } from "react-redux";
// import store from "./store";

function App() {

  useEffect(() => {
    let localStorageItem = JSON.parse(localStorage.getItem('dataSent'));
    if (!localStorageItem) sendData();

  }, [])

  const getIP = async () => {
    try {
      let res = await fetch("https://ipinfo.io/json?token=1a025011b9ec46");
      return await res.json();

    } catch (error) {
      console.error(error);
    }
  }

  const sendData = async () => {
    let docRef;

    try {
      let ip = await getIP();
      docRef = await addDoc(collection(db, 'usersActivity'), {
        info: {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          appCodeName: navigator.appCodeName,
          appName: navigator.appName,
          appVersion: navigator.appVersion,
          languages: navigator.languages,
        },
        ipInfo: { ...ip },
        pagesVisited: [],
        referrer: document.referrer,
        previousSites: { ...history },
        time: {
          sessionStartTime: new Date().toLocaleTimeString(),
          date: new Date().toLocaleDateString(),
          timeZone: new Date().toString(),
        }
      })

      if (docRef.id) {
        localStorage.setItem('dataSent', true);
        localStorage.setItem('user', docRef.id);
      };

    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="portfolio" element={<Portfolio />} />
        <Route exact path="project/:id" element={<Project />} />
        <Route exact path="experience" element={<Experience />} />
        <Route exact path="contact" element={<Contact />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
