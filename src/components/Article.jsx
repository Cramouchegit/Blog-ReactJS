// Pengenalan dasar component dan JSX
// import React from "react";

// const Article = () => {
//   const name = "Mabuchi";
//   const titles = [
//     "Tutorial Belajar ReactJS",
//     "Belajar Angular",
//     "Belajar NextJS",
//   ];

//   return (
//     <>
//       <div>Article Component punya {name}</div>
//       {titles.map((title) => (
//         <p>{title}</p>
//       ))}
//     </>
//   );
// };

// export default Article;

// Props Pada Child Component
// import React from "react";

// const Article = (props) => {
//   return (
//     <>
//       <div>{props.name}</div>
//       <div>
//         {props.titles.map((title) => {
//           return <p>- {title}</p>;
//         })}
//       </div>
//     </>
//   );
// };

// export default Article;

// Blog sederhana menggunakan JSON
import { useContext } from "react";
import { GlobalContext } from "../context";
import PropTypes from "prop-types";

// Conditional Rendering 2
const ArticleStatus = ({ isNew }) => {
  return isNew ? <span>Baru!</span> : isNew === false && <span>Lama!</span>;
};

const Article = (props) => {
  const user = useContext(GlobalContext);

  return (
    <>
      <h3>{props.title}</h3>
      <small>
        Date: {props.date}, Tags: {props.tags.join(", ")}, Postingan:
        <ArticleStatus isNew={props.isNew} />
      </small>
      <br />
      <small>Ditulis oleh {user.username}</small>
    </>
  );
};

Article.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tags: PropTypes.array.isRequired,
  isNew: PropTypes.bool.isRequired,
};

export default Article;
