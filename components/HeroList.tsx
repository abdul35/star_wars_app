import { useContext } from "react";
import AppContext from "../context";
import Hero from "../utils/types/hero.interface";
import HeroItem from "./HeroItem";

function HeroList() {
	const heroes: Hero[] | null = useContext(AppContext);

	return (
		<>
			<div className="hero-list mt-4">
				<ul className="list-group">
					{heroes && heroes.map((hero, index) => <HeroItem hero={hero} key={index} />)}
				</ul>
			</div>
		</>
	);
}

export default HeroList;
