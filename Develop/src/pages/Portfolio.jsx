import Project from '../components/Project';

export default function Portfolio() {
  const programmingProjects = [
    {
      title: 'Employee Tracker',
      image: '/Clipboard.png',
      repoLink: 'https://github.com/ZachD-ae/Employee-Tracker',
    },

    {
      title: 'Digest',
      image: '/Digest_logo_BLK-GOLD.png',
      repoLink: 'https://github.com/justinvittitoe/Digest',
    },

    {
      title: 'Adopto',
      image: '/Adopto_Logo.svg',
      repoLink: 'https://github.com/justinvittitoe/Digest',
    },
    
  ];

  const designProjects = [
    {
      title: 'UNDER CONSTRUCTION',
      image: '/Construction.svg',
      deployedLink: '',
      repoLink: '',
    },
    // more...
  ];

  const visualProjects = [
    {
      title: 'UNDER CONSTRUCTION',
      image: '/Construction.svg',
      deployedLink: '',
    },
    // more...
  ];

  return (
    <section className="container py-3">
      <h2 className="text-secondary mb-3">Portfolio</h2>

      <div className="mb-5">
        <h3 className="mb-3">Programming Projects</h3>
        <div className="row g-4">
          {programmingProjects.map((proj, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <Project {...proj} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-3">Graphic Design</h3>
        <div className="row g-4">
          {designProjects.map((proj, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <Project {...proj} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-5">
        <h3 className="mb-3">Visuals & Video</h3>
        <div className="row g-4">
          {visualProjects.map((proj, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <Project {...proj} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
