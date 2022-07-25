const Comments = (props) => {
  return (
    <ul className="Comments">
      {props.comments.map((comment) => {
        return <li>{comment.name}</li>;
      })}
    </ul>
  );
};

export default Comments;
