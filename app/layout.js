import "./globals.css";
import { FormProvider } from "./form/FormContext";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <FormProvider>{children}</FormProvider>
      </body>
    </html>
  )
}
