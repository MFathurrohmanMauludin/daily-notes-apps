import CardComponent from "./CardComponent";

const SectionComponent = ({ label, notes, setNotes }) => {
  return (
    <section>
      <h2>{label}</h2>
      {notes.length === 0 ? (
        <p className={"fs-10"}>Nothing Your Notes</p>
      ) : (
        <div className={"flex-wrap"}>
          {notes?.map((note) => (
            <CardComponent key={note.id} action={setNotes} {...note} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SectionComponent;
