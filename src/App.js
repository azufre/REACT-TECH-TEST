import './App.css';

const NEMESES = [
  {
    'name': 'Joker',
    'power': 'Evil laugh'
  },
  {
    'name': 'Kryptonite',
    'power': 'Sucks the life out of you'
  }
]

const SUPERHEROES = [
  {
    name: 'Batman',
    nemesis: 'Joker'
  },
  {
    name: 'Superman',
    nemesis: 'Kryptonite'
  },
  {
    name: 'Pikachu'
  },
  {
    name: 'Captain Planet'
  }
]

// Do not change this function
async function getNemesisForSuperhero(nemesisName) {
  const nemesis = await new Promise((resolve) => {
    // simulates network request. 
    setTimeout(() => {
      const nemesis = NEMESES.find((nemesisData) => nemesisData.name === nemesisName)

      resolve(nemesis)
    }, 500)
  })

  return nemesis
}

function App() {
  const superHeroData = []
  SUPERHEROES.forEach(async (superHero) => {
    if (superHero.nemesis) {
      const nemesis = await getNemesisForSuperhero(superHero.nemesis)

      superHeroData.push({
        ...superHero,
        nemesis
      })
    } else {
      superHeroData.push(superHero)
    }
  })

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {superHeroData.map((superHeroRecord) => {
            return (
              <li>
                Name: {superHeroRecord.name} {superHeroRecord.nemesis && `, Nemesis: ${superHeroRecord.nemesis?.name} ${superHeroRecord.nemesis?.power}`}
              </li>
            )
          })}
        </ul>
      </header>
    </div>
  );
}

export default App;
