// ============ Floating Hearts Animation ============
function createFloatingHearts() {
	const container = document.querySelector(".floating-hearts");
	const hearts = ["💕", "💖", "💗", "💝"];

	setInterval(() => {
		const heart = document.createElement("div");
		heart.className = "heart";
		heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
		heart.style.left = Math.random() * 100 + "%";
		heart.style.animationDelay = Math.random() * 2 + "s";
		heart.style.fontSize = Math.random() * 20 + 20 + "px";
		container.appendChild(heart);

		setTimeout(() => heart.remove(), 8000);
	}, 500);
}

// ============ Memory Cards Scroll Animation ============
function observeMemoryCards() {
	const cards = document.querySelectorAll(".memory-card");
	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("visible");
				}
			});
		},
		{ threshold: 0.2 }
	);

	cards.forEach((card) => observer.observe(card));
}

// ============ Letter Opening Function ============
let letterOpened = false;
const letterFullText = `Pyari Biharan,

Apse anurodh hai ki niswarth bhaav se party time pe dede 🙏
Happy Birthday, most pleasantly annoying and favorite sakhi. 💕

True friend always,
Panchajanya`;

function openLetter() {
	if (letterOpened) return;
	letterOpened = true;

	const envelope = document.querySelector(".envelope");
	const content = document.getElementById("letterContent");
	const textElement = document.getElementById("letterText");

	envelope.classList.add("open");

	setTimeout(() => {
		content.classList.add("show");
		typeWriter(letterFullText, textElement, 30);
	}, 600);
}

function typeWriter(text, element, speed) {
	let i = 0;
	element.textContent = "";

	function type() {
		if (i < text.length) {
			element.textContent += text.charAt(i);
			i++;
			setTimeout(type, speed);
		}
	}
	type();
}

// ============ Blow Candles Function ============
let candlesBlown = false;
function blowCandles() {
	if (candlesBlown) return;
	candlesBlown = true;

	const candles = document.getElementById("candles");
	const message = document.getElementById("wishMessage");

	candles.classList.add("blown");

	setTimeout(() => {
		message.classList.add("show");
		createConfetti();
	}, 500);
}

// ============ Confetti Animation ============
function createConfetti() {
	const colors = ["#ff6b9d", "#ffd6e7", "#a1c4fd", "#c8e7ff", "#ffb6d9"];
	const section = document.getElementById("birthday-surprise");

	for (let i = 0; i < 100; i++) {
		setTimeout(() => {
			const confetti = document.createElement("div");
			confetti.className = "confetti";
			confetti.style.left = Math.random() * 100 + "%";
			confetti.style.background =
				colors[Math.floor(Math.random() * colors.length)];
			confetti.style.animationDelay = Math.random() + "s";
			section.appendChild(confetti);

			setTimeout(() => confetti.remove(), 3000);
		}, i * 30);
	}
}

// ============ Music Toggle ============
let musicPlaying = false;
let audio = new Audio("./audio/birthday_flute.mp3");

function toggleMusic() {
	const btn = document.querySelector(".music-toggle");
	musicPlaying = !musicPlaying;

	if (musicPlaying) {
		btn.textContent = "🎵 Pause Music";
		audio.play();
	} else {
		btn.textContent = "🎵 Play Music by Panchajanya";
		audio.pause();
		audio.currentTime = 0; // restart from beginning next time
	}
}

// ============ Open Gift Function ============
let giftOpened = false;
function openGift() {
	if (giftOpened) return;
	giftOpened = true;

	const reveal = document.getElementById("giftReveal");
	reveal.classList.add("show");
	createConfetti();
}

// ============ Initialize Everything ============
window.addEventListener("load", () => {
	createFloatingHearts();
	observeMemoryCards();
});
