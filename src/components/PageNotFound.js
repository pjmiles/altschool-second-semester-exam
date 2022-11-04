import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <h1>
      PageNotFound
      <Link to="/">Go Back</Link>
    </h1>
  );
};

export default PageNotFound;
