import FilterHouse from './FilterHouse';
import FilterName from './FilterName';
import FilterSlug from './FilterSlug';
const Filter = (props) => {

    return (
      <form>
        <FilterHouse handleFilterHouse={props.handleFilterHouse}></FilterHouse>
        <FilterName handleFilterName={props.handleFilterName}>
            filterName={props.filterName}></FilterName>
        <FilterSlug></FilterSlug>
      </form>
    );
  };
  
  export default Filter;