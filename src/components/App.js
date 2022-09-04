import { useState, useEffect } from "react";
import FormComponent from "./FormComponent";
import HeaderComponent from "./HeaderComponent";
import SectionComponent from "./SectionComponent";
import FooterComponent from "./FooterComponent";
import { getInitialData } from "../utils/data";

function App() {
  const [query, setQuery] = useState("");
  const [searchNotes, setSearchNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());

  const activeNotes = (searchNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchNotes || notes).filter((note) => note.archived);

  useEffect(() => {
    setSearchNotes(notes.filter((note) => note.title.toLowerCase().includes(query.toLowerCase())));
  }, [query, notes]);

  return (
    <>
      <HeaderComponent search={query} updateQuery={setQuery} updateNotes={setNotes} />
      <main>
        <FormComponent updateNotes={setNotes} />
        <SectionComponent label='Your Active Notes' notes={activeNotes} setNotes={setNotes} />
        <SectionComponent label='Archived Your Notes' notes={archivedNotes} setNotes={setNotes} />
      </main>
      <FooterComponent/>
    </>
  );
}

export default App;
