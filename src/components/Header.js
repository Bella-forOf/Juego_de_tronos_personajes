
const Header = () => {

  return (
    <header className="header">
      <div>
        <p>Este ejercicio esta creado para practicar la creacion con un listado llamando a una API y asignandole un identificador unico que no viene dado por la API. Tambien hemos querido general un filtrado por varias caracteristicas. La primera por la casa a la que pertenecen, la segunda por el nombre y la tercera por el "mote", y haciendo que estos tres filtrados actuen en conjunto. Y por último he querido añadir una seccion para añadir a un nuevo personaje, solo añadiendo nombre y mote, ya que la ide unica se asigna al momento de la creacion.  </p>
      </div>
        <h1 className="header__title">Juego de Tronos </h1>
        <div>
          <p> Todos los personajes y sus casas en una sola web</p>
        </div>
        </header>
  );
};

export default Header;