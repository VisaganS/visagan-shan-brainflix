import "./CommentItem.scss";

const CommentItem = ({ commItem }) => {
  const { id, name, comment, likes, timestamp } = commItem;

  const formattedDate = new Date(timestamp).toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <div className="item">
      <div className="item__image-container"></div>
      <div className="item__text">
        <div className="item__header">
          <div className="item__name">{name}</div>
          <div className="item__date">{formattedDate}</div>
        </div>
        <div className="item__body">{comment}</div>
      </div>
    </div>
  );
};

export default CommentItem;
