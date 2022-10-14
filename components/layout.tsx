import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }): JSX.Element {
	return (
		<>
			<Header />
			<main>{children}</main>
		</>
	);
}
