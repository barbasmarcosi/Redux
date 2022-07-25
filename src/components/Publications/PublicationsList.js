import Comments from "./Comments";
const PublicationsList = (props) => {
  return (
    <div className="List">
      <ul>
        {props.publications.map((publication) => {
          return (
            <li onClick={() => publication.state = !publication.state} key={publication.id}>
              <h2>{publication.title}</h2>
              {publication.body}
              {console.log(publication.comments, publication.state)}
              {publication.state && <Comments comments={publication.comments} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PublicationsList;
