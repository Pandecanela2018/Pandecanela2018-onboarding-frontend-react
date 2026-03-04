import { useTranslation } from "react-i18next";
import ContactForm from "./components/forms/contactForm";
import CallbackRenderDemo from "./components/CallbackRenderDemo";
import UseMemoPerformanceDemo from "./components/UseMemoPerformanceDemo";
import UseEffectLifecycleDemo from "./components/UseEffectLifecycleDemo";

function App() {
  const { t } = useTranslation();
  return (
    <main>
      <h1>{t("welcome")}</h1>
      <ContactForm />
      <CallbackRenderDemo />
      <UseMemoPerformanceDemo />
      <UseEffectLifecycleDemo />
    </main>
  );
}

export default App;
