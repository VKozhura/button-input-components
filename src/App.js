import "./App.css";
import Button from "./components/Button";
// import { Button } from "./components/Button.styled";

function App() {
	return (
		<div className="container">
			<>
				<h1>Buttons</h1>
				<Button />
				<Button variant="outline" />
				<Button variant="text" />
				<Button disableshadow />
				<div className="wrapper">
					<Button disabled />
					<Button variant="text" disabled />
				</div>
				<div className="wrapper">
					<Button start-icon />
				</div>
				<div className="wrapper">
					<Button color="default" />
					<Button color="primary" />
					<Button color="secondary" />
					<Button color="danger" />
				</div>
			</>
		</div>
	);
}

export default App;
