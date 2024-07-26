import '../styles/globals.css'
import { ThemeProvider } from "next-themes";
import {appWithTranslation} from "next-i18next";

function MyApp({ Component, pageProps }) {
  return (
      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default appWithTranslation(MyApp)
