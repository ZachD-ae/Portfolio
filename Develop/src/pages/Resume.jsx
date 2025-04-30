export default function Resume() {
  return (
    <section className="container py-5 text-center">
      <h2 className="mb-2 text-secondary">Resume</h2>
<p className="text-muted mb-4" style={{ fontStyle: 'italic' }}>
  Note: This resume represents past experience and may not reflect my most current work.
</p>
      <a href="/resume.pdf" download className="btn btn-outline-secondary mb-5">
        Download My Resume
      </a>

      <div className="text-start mx-auto" style={{ maxWidth: '900px' }}>
        <h3>Experience</h3>

        <div className="mb-4">
          <h5>Marketing Manager, Agile Off-Road <small className="text-muted">Feb 2023 – Sept 2023 | Santee, CA</small></h5>
          <ul>
            <li>Controlled social media platforms including Instagram, Facebook, and YouTube</li>
            <li>Uploaded product photos and videos daily to influence sales and increase following</li>
            <li>Filmed, photographed, and edited branded content</li>
            <li>Met weekly with CEO to analyze analytics and ensure sales growth</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Graphic Artist, Veteran Entertainment Television <small className="text-muted">Jan 2021 – Feb 2022 | San Diego, CA</small></h5>
          <ul>
            <li>Designed motion graphics for live streaming broadcasts</li>
            <li>Assisted in filming and editing high-quality video content</li>
            <li>Collaborated with the marketing team on digital content ideas to boost subscribers</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Bartender, Pacific Beach Shore Club <small className="text-muted">June 2020 – Aug 2023 | San Diego, CA</small></h5>
          <ul>
            <li>Provided personalized recommendations with extensive cocktail and beer knowledge</li>
            <li>Maintained fast, high-quality service during peak hours</li>
            <li>Kept an organized bar station to reduce wait times and increase efficiency</li>
            <li>Aloha POS and Toast POS trained</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Graphic Designer, Hurricane Group Inc. <small className="text-muted">July 2018 – Feb 2020 | Remote</small></h5>
          <ul>
            <li>Created web banners for digital advertisements</li>
            <li>Designed brochures using Adobe software for direct-to-consumer campaigns</li>
            <li>Managed advertising content across social media platforms</li>
          </ul>
        </div>

        <div className="mb-4">
          <h5>Digital Content Creator, Krupto Strategic <small className="text-muted">May 2018 – Present | San Diego, CA</small></h5>
          <ul>
            <li>Produced high-quality videos, logos, infographics, and social media assets</li>
            <li>Partnered with influencers and brands for sponsored content and collaborations</li>
            <li>Adapted strategies to match evolving industry trends and platform algorithms</li>
          </ul>
        </div>

        <h3>Education</h3>
        <p>B.S., Media Arts and Animation — The Art Institute of California, San Diego (June 2017)</p>
      </div>
    </section>
  );
}
