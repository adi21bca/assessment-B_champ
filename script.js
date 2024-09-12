let count = 0;
const quizData = { questions: [] }; // Object to hold all the questions

document.getElementById('quiz-form').addEventListener('submit', function(e) {
    e.preventDefault();
    count++;
    const question = document.getElementById('question').value;
    const options = {
        A: document.getElementById('option-a').value,
        B: document.getElementById('option-b').value,
        C: document.getElementById('option-c').value,
        D: document.getElementById('option-d').value
    };
    const correctOption = document.getElementById('correct-option').value;

    const questionData = {
        number: count,
        question: question,
        options: options,
        correctOption: correctOption
    };

    // Add question data to the quizData object
    quizData.questions.push(questionData);

    // Create question container in HTML
    const questionContainer = document.createElement('div');
    questionContainer.classList.add('question-container'); // Add class for styling
    questionContainer.innerHTML = `
        <div style="margin-left:30px;">${count}.&nbsp;${question}</div>
        <div class="box" style="display: grid; grid-template-columns: 1fr 1fr;margin-left:30px; ">
            <div>
                <ul style='list-style:none;'>
                    <li>A: ${options.A}</li>
                    <li>B: ${options.B}</li>
                </ul>
            </div>
            <div>
                <ul style='list-style:none;'>
                    <li>C: ${options.C}</li>
                    <li>D: ${options.D}</li>
                </ul>
            </div>
        </div>
        <div class="correct-option" style="margin-bottom:10px;margin-left:30px;">Correct Option: ${correctOption}</div>
    `;

    document.getElementById('questions-container').appendChild(questionContainer);

    // Reset the form
    document.getElementById('quiz-form').reset();
});

document.getElementById('publish-btn').addEventListener('click', function() {
    const subjectName = document.getElementById('subject').value;
    const difficulty = document.getElementById('difficulty').value;
    const timeLimit = document.getElementById('time-limit').value;

    // Save the quizData object to localStorage
    localStorage.setItem('quizData', JSON.stringify({
        subject: subjectName,
        difficulty: difficulty,
        timeLimit: parseInt(timeLimit, 10), // Save time limit as an integer
        questions: quizData.questions
    }));

    // Redirect to the take quiz page
    window.location.href = 'take_quiz.html';
});

document.getElementById('back-btn').addEventListener('click', function() {
    // Redirect to the quiz page
    window.location.href = 'Quiz.html'; // Update with the actual path of your quiz page
});
