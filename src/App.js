import "./App.css";
import Button from "./Button";

function App() {
	return (
		<div className="wrapper">
			<Button color="default">Default</Button>
			<Button primary>Primary</Button>
			<Button secondary>Secondary</Button>
			<Button danger>Danger</Button>
		</div>
	);
}

export default App;
