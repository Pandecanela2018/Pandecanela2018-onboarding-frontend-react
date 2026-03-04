import { useTranslation } from "react-i18next";
import { Link, Route, Routes } from "react-router-dom";
import ContactForm from "./components/forms/contactForm";
import CallbackRenderDemo from "./components/CallbackRenderDemo";
import UseMemoPerformanceDemo from "./components/UseMemoPerformanceDemo";
import UseEffectLifecycleDemo from "./components/UseEffectLifecycleDemo";
import ListInputDemo from "./components/ListInputDemo";
import Home from "./pages/Home.jsx";
import Profile from "./pages/Profile.jsx";

function App() {
  const { t } = useTranslation();
  return (
    <main>
      <nav>
        <Link to="/">Home</Link> | <Link to="/profile">Profile</Link>
      </nav>
      <ListInputDemo />
      <h1>{t("welcome")}</h1>
      <ContactForm />
      <CallbackRenderDemo />
      <UseMemoPerformanceDemo />
      <UseEffectLifecycleDemo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
