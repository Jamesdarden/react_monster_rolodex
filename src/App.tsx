// import logo from "./logo.svg";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import {useState, useEffect, ChangeEvent} from 'react';
import {getData} from './utils/data.utils'


export type Monster = {
  id:string;
  name: string;
  email:string;

}

const App = ()=> {

  const [searchField, setSearchField] = useState('');
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  

  useEffect(() => {
      const fetchUsers = async () => {
        const users = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users")
        setMonsters(users)
      }

      fetchUsers()
  },[])

  useEffect(()=>{
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField)
    })

    setFilteredMonsters(newFilteredMonsters)
  },[searchField,monsters])

  const onSearchChange = (e:ChangeEvent<HTMLInputElement>): void => {
    const searchFieldString = e.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  };




    return (
      <div className="App">
        <h1 className="monsters-title">Monsters roledex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="Search Monsters"
          className="search-box"
        />

        <CardList monsters={filteredMonsters} />
      </div>
    );
  }

export default App;
