import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "../components/layout";
import { ReactNode } from "react";

function MyApp({ Component, pageProps }: AppProps): ReactNode {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	);
}

export default MyApp;
