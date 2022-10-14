import Image from "next/image";
import { useEffect } from "react";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
	const { id } = context.params as { id: string };
	const res = await fetch(`https://swapi.dev/api/people/${id}`);
	const heroPhotoData = await fetch(`https://akabab.github.io/starwars-api/api/id/${id}.json`);

	const hero = await res.json();
	const heroPhoto = await heroPhotoData.json();

	return {
		props: {
			id,
			hero,
			heroPhotoUrl: heroPhoto.image,
		},
	};
}

const AboutHero = ({
	hero,
	heroPhotoUrl,
	id,
}: {
	hero: { name: string; id: string; birth_year: string; height: number; mass: number };
	heroPhotoUrl: string;
	id: string;
}) => {
	useEffect(() => {
		const heroes = sessionStorage.getItem("heroes");
		if (!heroes || !heroes.length) {
			sessionStorage.setItem("heroes", JSON.stringify([{ name: hero.name, id: id }]));
			return;
		}
		const heroList = JSON.parse(heroes);

		if (!heroList.find((hero: { id: string }) => hero.id === id)) {
			heroList.push({ name: hero.name, id: id });
		}

		sessionStorage.setItem("heroes", JSON.stringify(heroList));
	}, []);

	return (
		<>
			<div className="container">
				<section className="hero d-flex">
					<Image src={heroPhotoUrl} alt={hero.name} width="500" height="600" />
					<div className="hero-datails ms-5">
						<h2 className="name">
							<strong>{hero.name}</strong>
						</h2>
						<div className="birth_year">
							<p className="h6">
								Birth year: <span>{hero.birth_year}</span>
							</p>
						</div>
						<div className="height h6">
							<span>
								Height: <span className="h6">{hero.height}</span>
							</span>
						</div>
						<div className="height h6">
							Mass: <span className="h6">{hero.mass}</span>
						</div>
					</div>
				</section>
			</div>
		</>
	);
};

export default AboutHero;
