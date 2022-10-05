const joke = document.querySelector('.joke');
const container = document.querySelector('.container');
const button = document.querySelector('#jokeBtn');


generateJoke()


function generateJoke() {
    const config = {
            headers: {
                'Accept': 'application/json'
            }
    }
    fetch('https://icanhazdadjoke.com', config).then(res => res.json()).then(data => {
        joke.innerHTML = data.joke;
    })
}

button.addEventListener('click', generateJoke);