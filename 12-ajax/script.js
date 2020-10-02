const filmInput = document.querySelector('#film-number')
filmInput.addEventListener('input', function (click) {
    if (this.value <= 0) this.value = 1;
    if (this.value > this.max) this.value = click.data;
})


const BASE = 'https://swapi.dev/api/'
const characters = document.querySelector('.characters');
const planetsContainer = document.querySelector('.planetsContainer');


let filmId = document.querySelector('#film-number').value

filmInput.addEventListener('input', (data) => filmId = data.data)

function getCharacters() {
    const chars = []
    document.querySelectorAll('.visible').forEach(e => e.style.display = 'none')
    document.querySelectorAll('.visbut').forEach(e => e.style.display = 'none')
    return axios.get(BASE + `films/${filmId}/`).then(film => {
            return film.data.characters;
        }).then(characters => {
            characters.forEach(char => {
                return axios.get('https' + char.substr(4, char.length)).then(char => {
                    chars.push(char.data)
                    renderChars(chars)
                })
            })
        })
        .catch(() => alert('Error, this episode does not exist!'));
}

function renderChars(chars) {
    characters.innerHTML = '';
    planetsContainer.innerHTML = '';

    chars.forEach(char => {
        const charElement = document.createElement('div');
        charElement.className = 'char';
        charElement.innerHTML += `
        
        <div class="char_name">${char.name}</div>
        <div class="char_birth">${char.birth_year}</div>
        <div class="char_gender">${char.gender}</div>`;
        characters.append(charElement);

    });
}

function getPlanets(page = 1) {
    const config = {
        method: 'GET',
        url: BASE + 'planets/',
        params: {
            page: page,
        },
    };

    document.querySelectorAll('.visible').forEach(e => e.style.display = 'grid')
    document.querySelectorAll('.visbut').forEach(e => e.style.display = 'inline-block')

    return axios(config).then(res => {
            return res.data.results;
        }).then(planets => {
            renderPlanets(planets)
        })
        .catch(() => alert('Something went wrong, try again!'));
}

function renderPlanets(planets) {
    characters.innerHTML = '';
    planetsContainer.innerHTML = ''
    planets.forEach(planet => {
        const planetEl = document.createElement('div');
        planetEl.className = 'planet';
        planetEl.innerHTML += `
      <span>${parseInt((planet.url).match(/\d+/))}</span><span>${planet.name}</span><span>${planet.population}</span>`;
        planetsContainer.append(planetEl);
        planetEl.classList.add('opacity')
    });
}

document.querySelector('#get-info').addEventListener('click', getCharacters)
document.querySelector('#get-planets').addEventListener('click', () => getPlanets())


function paginationInit() {
    let currentPage = 1;
    document.querySelector('.planets-prev').addEventListener('click', () => {
        if (currentPage < 1) return;
        getPlanets(--currentPage);
    });
    document.querySelector('.planets-next').addEventListener('click', () => getPlanets(++currentPage));
}
paginationInit()