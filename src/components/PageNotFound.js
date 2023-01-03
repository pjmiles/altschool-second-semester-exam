import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <h1>
      Something went wrong
      <Link to="/">Go Back</Link>
    </h1>
  );
};

export default PageNotFound;
