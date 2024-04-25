const exercises = {
  stretch: [
    {
        name: "Arm Circles",
        image: "assets/exercise/Stretch/Arm Circles.gif",
        description: "Stand with your feet shoulder-width apart. Extend your arms out to the sides at shoulder height. Make small circular motions with your arms, gradually increasing the size of the circles. After a few repetitions, switch directions."
    },
    {
        name: "Arm Crossover",
        image: "assets/exercise/Stretch/Arm Crossover.gif",
        description: "Stand tall with your feet hip-width apart. Extend your right arm straight out in front of you at shoulder height. Swing your arm across your chest, pulling it towards your left side with your left hand. Hold for a few seconds, then switch arms."
    },
    {
        name: "Back Slaps Wrap Around",
        image: "assets/exercise/Stretch/Back Slaps Wrap Around.gif",
        description: "Stand with your feet hip-width apart. Reach your right hand over your right shoulder and your left hand under your left shoulder. Try to touch your hands behind your back. Hold for a few seconds, then switch arm positions."
    },
    {
        name: "Lying Knee to Chest",
        image: "assets/exercise/Stretch/Lying Knee to Chest.gif",
        description: "Lie on your back with your legs extended. Bend your right knee and hug it towards your chest. Hold for a few seconds, then switch legs."
    },
    {
        name: "Neck Extension",
        image: "assets/exercise/Stretch/Neck Extension.gif",
        description: "Sit or stand tall with your shoulders relaxed. Slowly tilt your head back, looking up towards the ceiling. Hold for a few seconds, then return to the starting position."
    },
    {
        name: "Seated Piriformis",
        image: "assets/exercise/Stretch/Seated Piriformis.gif",
        description: "Sit on the floor with your legs extended. Bend your right knee and place your right foot on the outside of your left knee. Place your left elbow on the outside of your right knee and gently twist to the right. Hold for a few seconds, then switch sides."
    },
    // Add more stretch exercises as needed
  ],
  hiit: [
    {
        name: "Mountain Climbers",
        image: "assets/exercise/HIIT/Mountain Climbers.gif",
        description: "Start in a plank position with your hands directly under your shoulders. Drive one knee towards your chest, then quickly switch legs. Continue alternating legs as quickly as possible."
    },
    {
        name: "Fast Feet Run",
        image: "assets/exercise/HIIT/Fast Feet Run.gif",
        description: "Stand with your feet shoulder-width apart. Quickly alternate lifting each foot off the ground as if running in place. Move your arms in sync with your legs for increased intensity."
    },
    {
        name: "Split Jump Squat",
        image: "assets/exercise/HIIT/Split Jump Squat.gif",
        description: "Start in a lunge position with your right leg forward and your left leg back. Jump explosively into the air, switching legs mid-air to land with your left leg forward and your right leg back. Repeat in a continuous motion."
    },
    {
        name: "Spider Plank",
        image: "assets/exercise/HIIT/Spider Plank.gif",
        description: "Start in a plank position with your hands directly under your shoulders. Bring your right knee towards your right elbow, then return to the starting position. Repeat on the left side. Continue alternating sides as quickly as possible."
    },
    {
        name: "Bear Crawl",
        image: "assets/exercise/HIIT/Bear Crawl.gif",
        description: "Start in a tabletop position with your hands under your shoulders and your knees under your hips. Lift your knees off the ground and begin to crawl forward, keeping your back flat and your hips low. Move opposite arm and leg together, mimicking a bear's movement."
    },
    {
        name: "Plyo Jacks",
        image: "assets/exercise/HIIT/Plyo Jacks.gif",
        description: "Start in a standing position with your feet together. Jump into the air, spreading your legs wide and bringing your arms overhead. Land softly with your feet together and immediately jump back into the starting position."
    },
    // Add more HIIT exercises as needed
  ],
  yoga: [
    {
        name: "Cat Cow Pose",
        image: "assets/exercise/Yoga/Cat-Cow-Pose.gif",
        description: "Start on your hands and knees with your wrists directly under your shoulders and your knees directly under your hips. Inhale and arch your back, lifting your chest and tailbone towards the ceiling (Cow Pose). Exhale and round your back, tucking your chin and tailbone towards your belly button (Cat Pose). Repeat for several breaths."
    },
    {
        name: "Double Pigeon Pose",
        image: "assets/exercise/Yoga/Double-Pigeon-Pose.gif",
        description: "Sit on the floor with your legs stretched out in front of you. Bend your right knee and bring your right ankle to rest on your left thigh. Flex both feet. If this is enough of a stretch, stay here. If you'd like more, hinge at your hips and lean forward."
    },
    {
        name: "Four Limbed Staff Pose",
        image: "assets/exercise/Yoga/Four-Limbed-Staff-Pose.gif",
        description: "Start in a plank position. Lower your body halfway down, keeping your elbows close to your sides and your body in a straight line. Hold for a few breaths, then push back up to plank."
    },
    {
        name: "Frog Pose",
        image: "assets/exercise/Yoga/Frog-Pose.gif",
        description: "Start on your hands and knees. Slowly widen your knees until you feel a gentle stretch in your inner thighs. Keep your ankles in line with your knees and your feet flexed. Hold for a few breaths."
    },
    {
        name: "Sphinx Pose",
        image: "assets/exercise/Yoga/Sphinx-Pose.gif",
        description: "Lie on your stomach with your legs hip-width apart and your elbows under your shoulders. Press into your forearms and lift your chest and head, keeping your neck long. Hold for several breaths."
    },
    {
        name: "Supine Spinal Twist Pose",
        image: "assets/exercise/Yoga/Supine-Spinal-Twist-Pose.gif",
        description: "Lie on your back with your arms extended out to the sides. Bend your knees and draw them towards your chest. Lower your legs to the right side, keeping both shoulders on the ground. Hold for a few breaths, then switch sides."
    },
    // Add more yoga exercises as needed
  ],


  strength: [
    {
      name: "Push-ups",
      image: "assets/exercise/Strength/push-ups.gif",
      description:
        "Start in a plank position with your hands slightly wider than shoulder-width apart. Lower your body towards the ground until your chest nearly touches the floor. Push back up to the starting position.",
    },
    {
      name: "Squats",
      image: "assets/exercise/Strength/squats.gif",
      description:
        "Stand with your feet hip-width apart. Bend your knees and lower your body down as if you're sitting back into a chair. Keep your chest upright and your knees behind your toes. Push through your heels to return to standing.",
    },
    {
      name: "Pull-ups",
      image: "assets/exercise/Strength/pull-ups.gif",
      description:
        "Grab a pull-up bar with your palms facing away from you, hands shoulder-width apart. Hang with straight arms and pull yourself up until your chin is over the bar. Lower yourself back down with control.",
    },
    {
      name: "Dumbbell Deadlifts",
      image: "assets/exercise/Strength/dumbbell-deadlifts.gif",
      description:
        "Stand with feet hip-width apart and a loaded barbell in front of you. Bend at your hips and knees, keeping your back straight. Grasp the bar with an overhand grip. Lift the bar by extending your hips and knees.",
    },
    {
      name: "Bench Press",
      image: "assets/exercise/Strength/bench-press.gif",
      description:
        "Lie on a flat bench with your eyes under the bar. Grab the bar with a medium grip and lift it off the rack, lowering it to your mid-chest. Press it back up until your arms are straight.",
     
    },
    {
      name: "Dumbbell Lunges",
      image: "assets/exercise/Strength/dumbbell-lunges.gif",
      description:
        "Stand tall with a dumbbell in each hand, feet hip-width apart. Take a big step forward with your right leg and lower your body until your right thigh is parallel to the ground and your left knee is bent 90 degrees.",
    },
    // Add more strength exercises as needed
  ],
};

// Get DOM elements
const categories = document.querySelectorAll(".categories button");
const exercisesContainer = document.querySelector(".exercises");

// Function to display exercises for a given category
function displayExercises(category) {
  // Hide the initial icon
  document.getElementById("intial-icon").classList.add("initial-hidden");

  // Clear previous exercises
  exercisesContainer.innerHTML = "";

  // Get exercises for the selected category
  const categoryExercises = exercises[category];

  // Create exercise cards
  categoryExercises.forEach((exercise) => {
    const exerciseCard = document.createElement("div");
    exerciseCard.classList.add("exercise-card");

    const exerciseImage = document.createElement("img");
    exerciseImage.src = exercise.image;
    exerciseImage.alt = exercise.name;

    const exerciseName = document.createElement("h3");
    exerciseName.textContent = exercise.name;

    const exerciseDescription = document.createElement("p");
    exerciseDescription.textContent = exercise.description;

    exerciseCard.appendChild(exerciseImage);
    exerciseCard.appendChild(exerciseName);
    exerciseCard.appendChild(exerciseDescription);

    exercisesContainer.appendChild(exerciseCard);
  });
}

// Function to handle category button click
function handleCategoryClick(categoryBtn) {
    // Remove "active" id from all category buttons
    categories.forEach(btn => {
        btn.removeAttribute("id");
    });

    // Add "active" id to the clicked button
    categoryBtn.setAttribute("id", "active");

    // Get the category name
    const category = categoryBtn.textContent.toLowerCase();

    // Display exercises for the selected category
    displayExercises(category);
}

// Event listeners for category buttons
categories.forEach(categoryBtn => {
    categoryBtn.addEventListener("click", () => {
        handleCategoryClick(categoryBtn);
    });
});

// Add event listener for mousewheel event
const container = document.querySelector(".container");
container.addEventListener("mousewheel", function (event) {
  // Calculate the scroll amount
  container.scrollTop += event.deltaY;
});