import { useEffect, useState } from 'react';
import './App.css';

const Enemies = [
  {'name':'Joker', 'power':'Evil laugh'},
  {'name':'Kryptonite', 'power':'Sucks the life out of you'},
]

const SuperHeros = [
  {'name':'Batman', 'nemesis':'Joker'},
  {'name':'Superman', 'nemesis':'Kryptonite'},
  {'name':'Pikachu'},
  {'name': 'Captain Planet'},
]

// Do not change the logic of this function (it must remain async and wait 500 ms)
// Please do improve the function + variable names though :)
async function getCurrentEnemie(nemesis) {
  return await new Promise((resolve) => {
    // simulates network request. 
    setTimeout(() => {
      const EnemieFound = Enemies.find((enemie) => enemie.name === nemesis);
      resolve(EnemieFound)
    }, 500)
  }); 
}

function App() {

  const [superHeros, setSuperHeros] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  const IsLoadingTrue = true;
  const IsLoadingFalse = false;

  useEffect(() => {

    setIsLoading(IsLoadingTrue);

    async function fetchData() {

      let data = await Promise.all(SuperHeros.map(async (superHero) => {
    
        if (superHero.nemesis) {
    
          const enemie = await getCurrentEnemie(superHero.nemesis)
          
          return {...superHero, enemie};
    
        } 
        
        return superHero;
    
      }));
      
      setSuperHeros(data);
      setIsLoading(IsLoadingFalse);

    }

    fetchData();

  }, []);

  return (
    <div className="App">
        <header className="App-header">
           {isLoading && 'Loading...'}
        <ul>
          {superHeros.map((CurrentSuperHero) => {
            return (
              <li key={CurrentSuperHero['name']}>
                Name: {CurrentSuperHero.name} {CurrentSuperHero.enemie && `, Nemesis: ${CurrentSuperHero.nemo?.name} ${CurrentSuperHero.enemie?.power}`}
              </li>
            )
          })}
        </ul>
        </header>
    </div>  
    );
} 

export default App;
