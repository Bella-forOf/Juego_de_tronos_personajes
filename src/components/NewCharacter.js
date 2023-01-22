const NewCharacter = (props) => {
const handleNewCharacter = (ev) => {
  props.handleNew(ev.target.id, ev.target.value);
};
    return (
        <section className="new">
        <form className="new-contact__form">
          <h2 className="new-contact__title">Añade nuevo personaje</h2>
          <input
            className="new-contact__input"
            type="text"
            name="name"
            id="name"
            placeholder="Nombre"
            onInput={handleNewCharacter}
            value={props.newCharacter.name}
          />
          
          <input
            className="new-contact__input"
            type="text"
            name="slug"
            id="slug"
            placeholder="slug"
            onInput={handleNewCharacter}
            value={props.newCharacter.slug}
           
          />
            {/* <input
            className="new-contact__input"
            type="text"
            name="house"
            id="house"
            placeholder="House"
            // onInput={handleNew}
            // value={newPhrase.character}
            // exactamente no entiendo el value
          /> */}
          <input
            className="new-contact__btn"
            type="submit"
            value="Añadir"
            onClick={props.handleClick}
          />
          </form>
          </section>
    );
  };
  
  export default NewCharacter;