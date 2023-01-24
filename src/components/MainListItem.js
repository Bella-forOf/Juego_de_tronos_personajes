function MainListItem(props) {
    return (
      <li key={props.user.id} className='card translate'>
          <h3 className="card__title">
            {props.user.name} 
          </h3>
          <h5> Mas conocido como: {props.user.slug} </h5>
          <p className="card__description"> Este personaje pertenece a la casa <span className="house"> {props.user.slug}</span>
          </p>
          <p>Su identificador especial es {props.user.id}</p>
          <p>Para acceder a mas informacion sobre sus frases más conocidas pulsa sobre la tarjeta.</p>
      </li>
    );
  }
  export default MainListItem;