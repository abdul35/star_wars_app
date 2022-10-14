import type { InferGetStaticPropsType } from "next";

export async function getStaticProps() {
	const res = await fetch("https://api.github.com/repos/vercel/next.js");
	const data = await res.json();
	return {
		props: {
			stars: data.stargazers_count,
		},
	};
}

export default function About({ stars }: InferGetStaticPropsType<typeof getStaticProps>) {
	return (
		<>
			<h1>About - {stars}</h1>
		</>
	);
}
