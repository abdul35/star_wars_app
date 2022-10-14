import Link from "next/link";

const HeroItem = ({ hero }: { hero: { name: string; url: string } }): JSX.Element => {
	let urlHero = hero.url.split("/").filter((h: string) => h);

	return (
		<>
			<Link href={`/about/${urlHero[urlHero.length - 1]}`} key={urlHero[urlHero.length - 1]}>
				<li
					className="list-group-item list-group-item-action list-item"
					role="button"
					key={urlHero[urlHero.length - 1]}
				>
					<strong>{hero.name}</strong>
				</li>
			</Link>
		</>
	);
};
export default HeroItem;
