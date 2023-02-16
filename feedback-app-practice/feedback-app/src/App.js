// import MyButton from "./components/button/MyButton";
// import Board from "./components/tic-tac-toe/Tic";
// import Game from "./components/tic-tac-toe/Tac";
// import PicBg from "./components/pic-bg/PicBg";
// import EditProfile from "./components/edit-profile/EditProfile";
// import MailClient from "./components/letter-highlight/MailClient";
// import MailSelect from "./components/letter-select/MailSelect";
// import TaskApp from "./components/task-app/TaskApp";
// import HeadingApp from "./components/heading-context/HeadingApp";
import PostApp from "./components/heading-post/PostApp";

// Update buttons together
// export default function App() {
// 	const [count, setCount] = useState(0);
// 	function handleClick() {
// 		setCount(count + 1);
// 	}
// 	return (
// 		<div className="App">
// 			<MyButton count={count} onClick={handleClick} />
// 			<MyButton count={count} onClick={handleClick} />
// 		</div>
// 	);
// }
// function MyButton({ count, onClick }) {
// 	return <button onClick={onClick}>Clicked {count} times</button>;
// }

// Update buttons individually

// export default function App() {
// 	return <MailClient />;
// }

export default function App() {
	return (
		<div className="ButtonApp">
			{/* <MyButton />
			<MyButton /> */}
			{/* <Game /> */}
			{/* <PicBg /> */}
			{/* <EditProfile /> */}
			{/* <MailSelect /> */}
			{/* <TaskApp /> */}
			{/* <HeadingApp /> */}
			<PostApp />
		</div>
	);
}
