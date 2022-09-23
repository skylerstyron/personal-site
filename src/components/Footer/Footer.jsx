import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
// import { Link } from 'react-scroll';
import { Helmet } from 'react-helmet';
import PortfolioContext from '../../context/context';

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        {/* <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span> */}
        <div className="social-links">
          {networks &&
            networks.map((network) => {
              const { id, name, url } = network;
              return (
                <a key={id} href={url} rel="noopener noreferrer" target="_blank" aria-label={name}>
                  <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
        <hr />
        <div id="wcb" className="carbonbadge wcb-d" />
      </Container>
      <Helmet>
        <script src="https://unpkg.com/website-carbon-badges@1.1.3/b.min.js" defer />
      </Helmet>
    </footer>
  );
};

export default Footer;
