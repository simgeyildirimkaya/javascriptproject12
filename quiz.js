// Questions will be asked
const Questions = [{
		id: 0,
		q: "What was the first toy to be advertised on television?",
		a: [{ text: "LOL dolls", isCorrect: false },
			{ text: "Super Toy Factory", isCorrect: false },
			{ text: "Mr.Potato Head from Toy Story", isCorrect: true },
			{ text: "Detective Pikachu", isCorrect: false }
		]

	},
	{
		id: 1,
		q: "How many legs does a spider have?",
		a: [{ text: "7", isCorrect: false, isSelected: false },
			{ text: "11", isCorrect: false },
			{ text: "5", isCorrect: false },
			{ text: "8", isCorrect: true }
		]

	},
	{
		id: 2,
		q: "What does Volkswagen mean?",
		a: [{ text: "Family Car", isCorrect: false },
			{ text: "People's Car", isCorrect: true },
			{ text: "Powerful Car", isCorrect: false },
			{ text: "Reliable Car", isCorrect: false }
		]

	}
]

// Set start
var start = true;

// Iterate
function iterate(id) {

	// Getting the result display section
	var result = document.getElementsByClassName("result");
	result[0].innerText = "";

	// Getting the question
	const question = document.getElementById("question");


	// Setting the question text
	question.innerText = Questions[id].q;

	// Getting the options
	const op1 = document.getElementById('op1');
	const op2 = document.getElementById('op2');
	const op3 = document.getElementById('op3');
	const op4 = document.getElementById('op4');


	// Providing option text
	op1.innerText = Questions[id].a[0].text;
	op2.innerText = Questions[id].a[1].text;
	op3.innerText = Questions[id].a[2].text;
	op4.innerText = Questions[id].a[3].text;

	// Providing the true or false value to the options
	op1.value = Questions[id].a[0].isCorrect;
	op2.value = Questions[id].a[1].isCorrect;
	op3.value = Questions[id].a[2].isCorrect;
	op4.value = Questions[id].a[3].isCorrect;

	var selected = "";

	// Show selection for op1
	op1.addEventListener("click", () => {
		op1.style.backgroundColor = "green";
		op2.style.backgroundColor = "yellow";
		op3.style.backgroundColor = "yellow";
		op4.style.backgroundColor = "yellow";
		selected = op1.value;
	})

	// Show selection for op2
	op2.addEventListener("click", () => {
		op1.style.backgroundColor = "yellow";
		op2.style.backgroundColor = "green";
		op3.style.backgroundColor = "yellow";
		op4.style.backgroundColor = "yellow";
		selected = op2.value;
	})

	// Show selection for op3
	op3.addEventListener("click", () => {
		op1.style.backgroundColor = "yellow";
		op2.style.backgroundColor = "yellow";
		op3.style.backgroundColor = "light green";
		op4.style.backgroundColor = "yellow";
		selected = op3.value;
	})

	// Show selection for op4
	op4.addEventListener("click", () => {
		op1.style.backgroundColor = "yellow";
		op2.style.backgroundColor = "yellow";
		op3.style.backgroundColor = "yellow";
		op4.style.backgroundColor = "light green";
		selected = op4.value;
	})

	// Grabbing the evaluate button
	const evaluate = document.getElementsByClassName("evaluate");

	// Evaluate method
	evaluate[0].addEventListener("click", () => {
		if (selected == "true") {
			result[0].innerHTML = "True";
			result[0].style.color = "Orange";
		} else {
			result[0].innerHTML = "False";
			result[0].style.color = "blue";
		}
	})
}

if (start) {
	iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
	start = false;
	if (id < 2) {
		id++;
		iterate(id);
		console.log(id);
	}

})
