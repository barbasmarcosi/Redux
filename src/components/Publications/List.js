const List = (props) => {
  return (
    <div className="List">
      <ul>
        {props.publications
          .map((publication) => {
            return <li key={publication.id }>{publication.title}</li>;
          })}
      </ul>
    </div>
  );
};

export default List;
