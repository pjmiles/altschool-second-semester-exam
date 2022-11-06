import { ExternalLink } from "react-external-link";

const Footer = () => {
  return (
    <footer>
      <p>
        Created with &#128157; by{" "}
        <ExternalLink
          href="https://github.com/pjmiles"
          target="_blank"
          className="foot-link"
        >
          PJMILES
        </ExternalLink>
      </p>
    </footer>
  );
};

export default Footer;
