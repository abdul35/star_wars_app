import { ReactNode } from "react";

export default function Custom404(): ReactNode {
	return (
		<>
			<div>
				<div className="container">
					<div className="alert alert-danger d-flex align-items-center align-content-center" role="alert">
						<svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:">
							<use xlinkHref="#exclamation-triangle-fill" />
						</svg>
						<div className="h1 me-3">404</div>
						<div className="h6">Something went wrong</div>
					</div>
				</div>
			</div>
		</>
	);
}
