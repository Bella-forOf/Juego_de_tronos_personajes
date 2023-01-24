import MainListItem from './MainListItem';
const MainList = ({user}) => {
    // console.log(user);
const Element = user.map((user) => {
    return <MainListItem user={user}/>;
  });


  return (
    <div className='card-container'> 
      <ul className='ul'> {Element}</ul>
    </div>
  );
};

export default MainList;
