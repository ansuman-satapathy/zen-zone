const exercises = {
    stretch: [
        {
            name: "Hamstring Stretch",
            image: "images/stretch1.jpg",
            description: "Stand with your feet hip-width apart. Extend one leg in front of you with your toes pointing up. Lean forward from your hips and reach towards your toes. Hold for 15-30 seconds, then switch legs."
        },
        {
            name: "Quad Stretch",
            image: "images/stretch2.jpg",
            description: "Stand tall with your feet hip-width apart. Bend one knee and grab your ankle with your hand. Pull your heel towards your glutes and hold for 15-30 seconds. Repeat on the other side."
        },
        // Add more stretch exercises as needed
    ],
    hiit: [
        {
            name: "Burpees",
            image: "images/hiit1.jpg",
            description: "Start in a standing position. Drop into a squat position with your hands on the ground. Kick your feet back, while keeping your arms extended. Quickly return to the squat position, then jump up as high as possible."
        },
        {
            name: "Mountain Climbers",
            image: "images/hiit2.jpg",
            description: "Start in a plank position with your hands directly under your shoulders. Drive one knee towards your chest, then quickly switch legs. Continue alternating legs as quickly as possible."
        },
        // Add more HIIT exercises as needed
    ],
    yoga: [
        {
            name: "Downward Dog",
            image: "images/yoga1.jpg",
            description: "Start in a plank position. Lift your hips towards the ceiling, pressing your palms and heels into the ground. Keep your head between your arms and hold for 5-10 breaths."
        },
        {
            name: "Warrior II",
            image: "images/yoga2.jpg",
            description: "Stand with your feet wide apart. Turn your right foot out 90 degrees and your left foot slightly in. Extend your arms out to the sides and bend your right knee. Hold for 5-10 breaths, then switch sides."
        },
        // Add more yoga exercises as needed
    ],
    strength: [
        {
            name: "Push-ups",
            image: "images/strength1.jpg",
            description: "Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your body towards the ground until your chest nearly touches the floor. Push back up to the starting position."
        },
        {
            name: "Squats",
            image: "images/strength2.jpg",
            description: "Stand with your feet hip-width apart. Bend your knees and lower your body down as if you're sitting back into a chair. Keep your chest upright and your knees behind your toes. Push through your heels to return to standing."
        },
        // Add more strength exercises as needed
    ]
};
// Get DOM elements
const categories = document.querySelectorAll('.categories button');
const exercisesContainer = document.querySelector('.exercises');

// Function to display exercises for a given category
function displayExercises(category) {
    // Clear previous exercises
    exercisesContainer.innerHTML = '';

    // Get exercises for the selected category
    const categoryExercises = exercises[category];

    // Create exercise cards
    categoryExercises.forEach(exercise => {
        const exerciseCard = document.createElement('div');
        exerciseCard.classList.add('exercise-card');

        const exerciseImage = document.createElement('img');
        exerciseImage.src = exercise.image;
        exerciseImage.alt = exercise.name;

        const exerciseName = document.createElement('h3');
        exerciseName.textContent = exercise.name;

        const exerciseDescription = document.createElement('p');
        exerciseDescription.textContent = exercise.description;

        exerciseCard.appendChild(exerciseImage);
        exerciseCard.appendChild(exerciseName);
        exerciseCard.appendChild(exerciseDescription);

        exercisesContainer.appendChild(exerciseCard);
    });
}

// Event listeners for category buttons
categories.forEach(categoryBtn => {
    categoryBtn.addEventListener('click', () => {
        const category = categoryBtn.textContent.toLowerCase();
        displayExercises(category);
    });
});
