import { useTranslation } from "react-i18next";
import ContactForm from "./components/forms/contactForm";
import CallbackRenderDemo from "./components/CallbackRenderDemo";

function App() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("welcome")}</h1>
      <ContactForm />
      <CallbackRenderDemo />
    </main>
  );
}

export default App;
