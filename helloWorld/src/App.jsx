import { useTranslation } from "react-i18next";
import ContactForm from "./components/forms/contactForm";

function App() {
  const { t } = useTranslation();
  return (<h1>{t("welcome")}</h1>)(<ContactForm></ContactForm>);
}

export default App;
