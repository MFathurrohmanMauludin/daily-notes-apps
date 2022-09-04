import { useState } from "react";
import FormItemInput from "./FormItemInput";


const FormComponent = ({ updateNotes }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  const createNote = (event) => {
    event.preventDefault();
    const timestamp = new Date().toISOString();

    updateNotes((notes) => [
      ...notes,
      { id: timestamp, title, body: note, archived: false, createdAt: timestamp },
    ]);
  };

  return (
    <form onSubmit={createNote}>
      <h2>Create Notes</h2>
      <small>
        Remaining characters:&nbsp;<span>{50 - title.length}</span>
      </small>
      <FormItemInput
        value={title}
        onChange={setTitle}
        type='text'
        placeholder='Title your notes'
        id='title'
        name='title'
        required
      />
      <FormItemInput
        value={note}
        onChange={setNote}
        type='textarea'
        placeholder='Write your notes today...'
        id='note'
        name='note'
        required
      />
      <FormItemInput type='submit' id='submit_form' name='submit_form' value='Save' />
    </form>
  );
};

export default FormComponent;
