const form = document.querySelector('form');
const calculate = form.lastElementChild;
const userInput = form.firstElementChild;
const answer = form.nextElementSibling;

userInput.setAttribute('max', new Date().toISOString().split('T')[0]);

form.onsubmit = (e) => {
	e.preventDefault();
};
calculate.onclick = () => {
	if (userInput.value != '') {
		const today = new Date();
		const userDate = new Date(userInput.value);
		const timeDifference = today - userDate;
		const millisecondsPerYear = 365.25 * 24 * 60 * 60 * 1000;
		const millisecondsPerMonth = (365.25 / 12) * 24 * 60 * 60 * 1000;
		const millisecondsPerDay = 24 * 60 * 60 * 1000;

		const years = Math.floor(timeDifference / millisecondsPerYear);
		const months = Math.floor(
			(timeDifference % millisecondsPerYear) / millisecondsPerMonth
		);
		const days = Math.floor(
			(timeDifference % millisecondsPerMonth) / millisecondsPerDay
		);
		answer.innerHTML = `<p>
					you are <span>${years}</span> years, <span>${months}</span> months and
					<span>${days}</span> days old
				</p>`;
	}
};
