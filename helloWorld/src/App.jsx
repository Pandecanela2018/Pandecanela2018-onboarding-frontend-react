import { useTranslation } from "react-i18next";
import ContactForm from "./components/forms/contactForm";
import CallbackRenderDemo from "./components/CallbackRenderDemo";
import UseMemoPerformanceDemo from "./components/UseMemoPerformanceDemo";

function App() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("welcome")}</h1>
      <ContactForm />
      <CallbackRenderDemo />
      <UseMemoPerformanceDemo />
    </main>
  );
}

export default App;
