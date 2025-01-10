const button = document.getElementById('btn');
const jokeContent = document.getElementById('jokecontent');
const joke = document.getElementById('joke');

// Event listener for the button
button.onclick = () => {
  // Reset joke content when fetching a new joke
  jokeContent.textContent = 'Fetching a joke...';
  joke.textContent = '';

  axios
    .get('https://official-joke-api.appspot.com/random_joke')
    .then(function (response) {
      button.textContent = 'Next'; // Change button text to 'Next'

      // Display the joke setup first
      jokeContent.textContent = response.data.setup;

      // Add a slight delay to display the punchline for a better experience
      setTimeout(() => {
        joke.textContent = response.data.punchline;
      }, 2000); // 2-second delay for the punchline
    })
    .catch(function (error) {
      console.error(error);

      // Display error message
      jokeContent.textContent = 'Oops! Something went wrong. Please try again.';
      joke.textContent = '';
    });
};
