export default function About() {
  return (
    <section
      className="text-white d-flex align-items-center justify-content-center position-relative"
      style={{
        height: '75vh',
        background: `
          linear-gradient(rgba(0,0,0,0.6), rgb(255, 255, 255)),
          url('/BG_About.jpeg') center / cover no-repeat
        `,
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="container position-relative text-center px-3" style={{ maxWidth: '800px', zIndex: 2 }}>
        <img
          src="Logo_Black.svg"
          alt="Zach Donels"
          className="img-fluid rounded-circle mb-4"
          style={{
            backgroundColor: 'white',
            padding: '1rem',
            width: '150px',
            height: '150px',
            objectFit: 'contain',
          }}
        />
        <h1 className="mb-4">About Me</h1>
        <p className="lead fw-bold">
  Hi! I’m Zach, a Colorado native with over 8 years of experience in graphic design,
  visual effects, and video production. After spending a decade in San Diego honing
  my creative and technical skills, I’ve returned to Colorado with a renewed focus.

  I recently expanded my toolkit by diving into software development, driven by a
  passion to build tools that empower creators, artists, and innovators. I specialize
  in front-end development, UI/UX, and interactive design — and I love working with
  React, APIs, and creative technologies that bring ideas to life.
</p>
      </div>
    </section>
  );
}
