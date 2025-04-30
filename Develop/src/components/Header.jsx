import Navigation from './Navigation';

export default function Header() {
  return (
    <header className="bg-dark text-white text-center py-4">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          <img src="Logo_White.svg" alt="Logo" width="80" height="80" className="me-2" />
          
        </a>
        <Navigation />
      </div>
    </header>
  )};
