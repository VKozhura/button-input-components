import "./App.css";
import Button from "./components/Button/Button";
import { Input } from "./components/Input/Input";

function App() {
	return (
		<div className="container">
			<h1>Inputs</h1>
			<Input />
			<Input error />
			<Input disabled />
			<div className="wrapper">
				<Input helperText="Some interesting text" />
				<Input helperText="Some interesting text" error />
			</div>
			<div className="wrapper">
				<Input startIcon />
				<Input endIcon />
			</div>
			<Input value="Text" />
			<div className="wrapper">
				<Input size="sm" />
				<Input size="md" />
			</div>
			<Input fullwidth />
			<Input multiline row="4" />

			<h1>Buttons</h1>
			<Button />
			<Button variant="outline" />
			<Button variant="text" />
			<Button disableshadow />
			<div className="wrapper">
				<Button disabled />
				<Button variant="text" disabled />
			</div>
			<div className="button-icon-wrapper">
				<Button startIcon="local_grocery_store" />
				<Button endIcon="local_grocery_store" />
			</div>
			<div className="wrapper">
				<Button size="sm" />
				<Button size="md" />
				<Button size="lg" />
			</div>
			<div className="wrapper">
				<Button color="default" />
				<Button color="primary" />
				<Button color="secondary" />
				<Button color="danger" />
			</div>
		</div>
	);
}

export default App;
