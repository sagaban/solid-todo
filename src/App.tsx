import { createSignal } from "solid-js";
import solidLogo from "./assets/solid.svg";
import viteLogo from "/vite.svg";
import kobalteLogo from "/kobalte.png";
import stylexLogo from "/stylex.svg";
import bunLogo from "/bun.svg";
import biomeLogo from "/biome.svg";
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
				<a href="https://kobalte.dev/" target="_blank" rel="noreferrer">
					<img src={kobalteLogo} class="logo kobalte" alt="Kobalte logo" />
				</a>
				<a href="https://stylexjs.com/" target="_blank" rel="noreferrer">
					<img src={stylexLogo} class="logo stylex" alt="StyleX logo" />
				</a>
				<a href="https://bun.sh/" target="_blank" rel="noreferrer">
					<img src={bunLogo} class="logo bun" alt="Bun logo" />
				</a>
				<a href="https://biomejs.dev/" target="_blank" rel="noreferrer">
					<img src={biomeLogo} class="logo biome" alt="Biome logo" />
				</a>
			</div>
			<h1>Vite + Solid + Kobalte + StyleX + Bun + Biome</h1>
			<div class="card">
				<Button onClick={handleCount}>count is {count()}</Button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p class="read-the-docs">
				Click on logos to learn more
			</p>
		</>
	);
}

export default App;
