import React from "react";
import { Card, Badge, Button } from "react-bootstrap";

export function PizzaCard({ data, setOdered }) {
	return (
		<>
			<Card>
				<img src="../logo" alt="data-image" className="card-img-top" />
				<div className="card-body">
					<h5 className="card-title">{data.name}</h5>
				</div>
			</Card>
		</>
	)
} 