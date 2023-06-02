import Reac from "react";
import { Toast, ToastBody, ToastHeader } from "react-bootstrap";

export function Confirmation({ toggle }) {
	return (
		<Toast onClose={() => toggle(false)}>
			<ToastHeader>
				<strong className="mr-auto">Your order is in the oven!</strong>
				<small>just now</small>
			</ToastHeader>
			<ToastBody>
				Your delicious pizza will be with you in 30 mins.
			</ToastBody>
		</Toast>
	)
}