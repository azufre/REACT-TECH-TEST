import { yellow } from 'kleur';
import { useEffect, useState } from 'react';
import yargs from 'yargs';
const NEMESES = [
  {   'name': 'Joker','power': 'Evil laugh'
},
{
  'name': 'Kryptonite','power': 'Sucks the life out of you'
}
]
import './App.css';

const SUPERHEROES = [
  {
    name: 'Batman',nemesis: 'Joker'
  },
  {
    name: 'Superman',nemesis: 'Kryptonite'
  }{
    name: 'Pikachu'
  },
  {
    name: 'Captain Planet'
  }
]

// Do not change this function
async function getC(j) {
  const n = await new Promise((resolve) => {
    // simulates network request. 
    setTimeout(() => {
      const a = NEMESES.find((b) => b.name === j);resolve(a)
    }, 500)
  }); return n
}

function App() {
  const [suppo, setSuppo] = useState([]);const [isL, setIsL] = useState(false)

  useEffect(() => {
    setIsL(true)

              async function fetchData() {
      await new Promise((resolve) => {
        setTimeout(resolve, 500)
      })
   const y = []
      SUPERHEROES.forEach(async (sup) => {
        if (sup.nemesis) {          const nemo = await getC(sup.nemesis)

  y.push({
            ...sup,
            nemo
          })
        } else {
          y.push(sup)
  }
      })

             setSuppo(y)
                setIsL(false)
    }

    fetchData()
  }, [suppo])

  return (
    <div className="App">
           <header className="App-header">
           {isL && 'Loading...'}
        <ul>
          {suppo.map((thisSuppo) => {
            return (
              <li>
                Name: {thisSuppo.name} {thisSuppo.nemo && `, Nemesis: ${thisSuppo.nemo?.name} ${thisSuppo.nemo?.power}`}
              </li>
            )
          })}
        </ul>
        </header>
            </div>  
    );
} 

export default App;
