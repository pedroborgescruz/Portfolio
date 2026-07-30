export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container-fluid">
        <div className="container text-center">
          <div className="row">
            <strong>{"< Made with ❤ >"}</strong>
          </div>
          <div className="row">
            <p>&copy; {year} Pedro Cruz</p>
          </div>
          <div className="row">
            <div className="col">
              <a href="mailto:pedroborgespc@gmail.com" target="_blank" rel="noreferrer">
                <img
                  className="social-icon"
                  src="/assets/envelope-heart-fill.svg"
                  alt="E-mail"
                />
              </a>
              <a
                href="https://github.com/pedroborgescruz/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src="/assets/github.svg"
                  alt="GitHub"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/pedroborgespc/"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="social-icon"
                  src="/assets/linkedin.svg"
                  alt="LinkedIn"
                />
              </a>
              <a href="https://x.com/pedroborgespc" target="_blank" rel="noreferrer">
                <img
                  className="social-icon"
                  src="/assets/twitter.svg"
                  alt="Twitter/X"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
