import { showFormattedDate } from "../utils/data";
import CardItemButton from "./CardItemButton";

const CardComponent = ({ id, title, createdAt, body, archived, action }) => {
  const deleteNote = (item) => action((notes) => notes.filter((note) => note.id !== item));
  const toggleArchive = (item) => {
    action((notes) =>
      notes.map((note) => {
        if (note.id === item) {
          return { ...note, archived: !note.archived };
        }
        return note;
      }),
    );
  };

  return (
    <article id={id}>
      <div className={"card"}>
        <h3>{title}</h3>
        <small>{showFormattedDate(createdAt)}</small>
        <p>{body}</p>
        <div className={"card-footer"}>
          <CardItemButton eventHandler={() => deleteNote(id)} label='delete' />
          <CardItemButton
            eventHandler={() => toggleArchive(id)}
            label={archived ? "unarchived" : "archive"}
          />
        </div>
      </div>
    </article>
  );
};

export default CardComponent;
