const noteList = (props) => {
    const Notes = props.data.map(note => <div>{note.text}</div>)
}