import { type AppProps } from "next/app"
import Head from "next/head";
import "src/styles/global.css";

const App = ({ Component, pageProps }: AppProps) => {
	return (<>
		<Head>
			<title>Rolando Mora | Portfolio</title>
			<link rel="icon" href="/icon.png"/>
		</Head>
		<Component {...pageProps} />
	</>)
}

export default App;