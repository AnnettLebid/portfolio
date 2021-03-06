import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <div key={id} className="social-link-container">
                  <a href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                    <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                  </a>
                </div>
              );
            })}
        </div>
        <hr />
        <p className="footer__text">
          © {new Date().getFullYear()} - Developed by Anna Lebid <br />
          Powered by{' '}
          <a
            target="_blank"
            className="text-color-grey bg-color-dark-coco"
            href="https://www.gatsbyjs.com"
            rel="noreferrer"
          >
            Gatsby
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
