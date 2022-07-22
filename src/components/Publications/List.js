const List = (props) => {
  return (
    <div className="List">
      <ul>
        {console.log(props.publications)}
        {props.publications.map((publication) => {
          return (
            <>
              <h2 key={publication.id}>{publication.title}</h2>
              <li key={publication.id}>{publication.body}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default List;
