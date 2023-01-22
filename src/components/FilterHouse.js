const FilterHouse = (props) => {
const handleSearch =  (ev) => {
  props.handleFilterHouse(ev.target.value);

};
    return (
       <select className='select'
       name='house'
       id='house'
        onChange={handleSearch}
        >
          <option value="Todos">Todos</option>
          <option value="jon">Stark</option>
          <option value="sansa">Lannister</option>
          <option value="jaime">Baratheon</option>
          <option value="targaryen">Targaryen</option>
         </select> 
    );
  };
  
  export default FilterHouse;
          
         
      
      