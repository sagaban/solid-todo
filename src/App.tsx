import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "ui/components/Button";

function App() {
	const [count, setCount] = createSignal(0);

	const handleCount = () => {
		setCount((count) => count + 1);
	};

	return (
		<>
			<div>
				<a href="https://vitejs.dev" target="_blank" rel="noreferrer">
					<img src={viteLogo} class="logo" alt="Vite logo" />
				</a>
				<a href="https://solidjs.com" target="_blank" rel="noreferrer">
					<img src={solidLogo} class="logo solid" alt="Solid logo" />
				</a>
			</div>
			<h1>Vite + Solid</h1>
			<div class="card">
				<Button onClick={handleCount}>count is {count()}</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on the Vite and Solid logos to learn more
			</p>
		</>
	);
}

export default App;
