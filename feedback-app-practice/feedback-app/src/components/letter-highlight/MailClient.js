import { useState } from "react";
import { initialLetters } from "./data.js";
import Letter from "./Letter.js";
import "./styles.css";

export default function MailClient() {
	const [letters, setLetters] = useState(initialLetters);
	// const [highlightedLetter, setHighlightedLetter] = useState(null);
	const [highlightedId, setHighlightedId] = useState(null);

	function handleHover(letter) {
		setHighlightedId(letter.id);
	}

	function handleStar(starred) {
		setLetters(
			letters.map((letter) => {
				if (letter.id === starred.id) {
					return {
						...letter,
						isStarred: !letter.isStarred,
					};
				} else {
					return letter;
				}
			})
		);
	}

	return (
		<>
			<h2>Inbox</h2>
			<ul>
				{letters.map((letter) => (
					<Letter
						key={letter.id}
						letter={letter}
						isHighlighted={letter.id === highlightedId}
						onHover={handleHover}
						onToggleStar={handleStar}
					/>
				))}
			</ul>
		</>
	);
}
