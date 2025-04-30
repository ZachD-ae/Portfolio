export default function Project({ title, image, deployedLink, repoLink }) {
  return (
    <div className="card h-100 shadow-sm text-center">
      
      <div className="p-3">
        <img
          src={image}
          alt={`${title} screenshot`}
          className="img-fluid"
          style={{
            maxHeight: '150px',
            objectFit: 'contain',
            width: '100%',
            backgroundColor: 'white',
            borderRadius: '8px',
            padding: '0.5rem',
          }}
        />
      </div>

      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="d-flex gap-2 justify-content-center">
          {deployedLink && (
            <a
              href={deployedLink}
              className="btn btn-primary btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          )}
          {repoLink && (
            <a
              href={repoLink}
              className="btn btn-outline-secondary btn-sm"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
