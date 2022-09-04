import FormItemInput from "./FormItemInput";

const HeaderComponent = ({ search, updateQuery }) => {
  return (
    <header>
      <h1>Daily Notes</h1>
      <FormItemInput
        value={search}
        onChange={updateQuery}
        type='search'
        id='search_note'
        name='search_note'
        placeholder='Search Your Notes...'
      />
    </header>
  )
}

export default HeaderComponent;
