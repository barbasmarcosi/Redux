const Comments = (props) => {
  console.log(props.comments.state, props.comments)
  return (
    <ul className="Comments">
      {props.state && props.comments
        .map((comment) => {
          return <li>{comment.name}</li>;
        })}
    </ul>
  );
};

export default Comments;
