// Fichero src/components/App.js
import '../styles/App.scss';
import { useEffect, useState } from 'react';
import MainList from './MainList';
import Header from './Header';
import Footer from './Footer';
import NewCharacter from './NewCharacter';
import Filter from './Filter';
import getDataFromAPI from './services/Api';


function App() {
  
  const [data, setData] = useState([]);
  const [filterHouse, setFilterHouse] = useState('Todos');
  const [filterName, setFilterName] = useState('');
  const [newCharacter, setNewCharacter] = useState ({
    name: '',
    slug: '',
    id: crypto.randomUUID(),

  });

  useEffect(() => {
    
    getDataFromAPI().then((cleanData) => {
      setData(cleanData);
     
    });
  }, []);
const handleFilterHouse = ( value) => {
  setFilterHouse(value);
};
const handleFilterName = ( value) => {
  setFilterName(value);
};

const handleNew = (id, value) => {
  setNewCharacter ({...newCharacter,[id]: value});
};

const filterCharacter = data

.filter((character) => { return filterHouse === 'Todos' ? true : character.slug === filterHouse;})
.filter((character) => character.name.toLowerCase().includes(filterName.toLowerCase()) ||
character.slug.toLowerCase().includes(filterName.toLowerCase()) );

const handleClick = (ev) => {
  ev.preventDefault();
  data.push(newCharacter);
  setData([...data]);
  setNewCharacter({
    name:'',
    slug:'',
    id: '',
  });
};
  return (
    <div> 
     
       <Header></Header>
        <main className='main'>
          <section><Filter
           handleFilterHouse={handleFilterHouse}
           handleFilterName={handleFilterName}>
            filterName={filterName}
            </Filter></section>
          <section className='section'>
            <MainList user={filterCharacter}></MainList>
            <NewCharacter 
            handleNew={handleNew}
            newCharacter={newCharacter}
            handleClick={handleClick}
            ></NewCharacter>
          </section>
          </main>
          <footer>
          <Footer></Footer>
          </footer>
    </div>
  );
}

export default App;

