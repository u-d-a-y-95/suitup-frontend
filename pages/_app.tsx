import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layouts from "../components/layouts";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layouts>
      <Component {...pageProps} />
    </Layouts>
  );
}
