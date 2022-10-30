import type { NextPage } from "next";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import HeroList from "../components/HeroList";
import AppContext from "../context";
import Hero from "../utils/types/hero.interface";

const Home: NextPage = () => {
	const [heroes, setHeroes] = useState<Hero[]>();
	const [viewdHeroes, setViewdHeroes] = useState<Array<{ name: string; id: string }>>();

	useEffect(() => {
		const viewdHeroes: Array<{ name: string; id: string }> | null = JSON.parse(
			sessionStorage.getItem("heroes") as string,
		);
		if (viewdHeroes) {
			setViewdHeroes(viewdHeroes);
		}
	}, []);

	const onSubmitHandler = (e: React.FormEvent): void => {
		e.preventDefault();
		getHeroes(((e.target as HTMLFormElement).elements[0] as HTMLInputElement).value).then(hero =>
			setHeroes(hero.results),
		);
	};

	const onKeyDownhHandler = (e: React.KeyboardEvent): void => {
		if (e && e.code === "Enter") {
			getHeroes((e.target as HTMLFormElement).value).then(res => setHeroes(res.results));
		}
	};

	const getHeroes = async (heroName: string): Promise<{ results: Hero[] }> => {
		const rawData = await fetch(`https://swapi.dev/api/people/?search=${heroName}`);
		const data = await rawData.json();

		return data;
	};

	return (
		<>
			<AppContext.Provider value={heroes as Hero[]}>
				<div className="container pt-5 main">
					<div className="container-fluid d-flex align-items-center">
						<div className="hero me-5">
							<form onSubmit={onSubmitHandler}>
								<div className="d-flex">
									<input
										onKeyDown={onKeyDownhHandler}
										type="text"
										name="search"
										placeholder="search heroes"
										className="p-3 me-3 search-input"
									/>

									<button className="btn btn-primary p-3 search-btn" type="submit">
										Search
									</button>
								</div>
							</form>

							<HeroList />
						</div>

						<div className="history ms-5">
							<h2>Viewed heroes</h2>
							<ul className="list-group">
								{viewdHeroes &&
									(viewdHeroes as Array<{ name: string; id: string }>).map(({ name, id }) => (
										<>
											<Link href={`/about/${id}`}>
												<li
													className="list-group-item list-group-item-action list-item"
													role="button"
													key={id}
												>
													<strong>{name}</strong>
												</li>
											</Link>
										</>
									))}
							</ul>
						</div>
					</div>
				</div>

				<style jsx>{`
					.wrap {
						height: 100vh;
					}

					.search-input {
						width: 100%;
					}

					.history {
						width: 43%;
					}
				`}</style>
			</AppContext.Provider>
		</>
	);
};

export default Home;
