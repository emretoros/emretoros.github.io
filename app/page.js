const publications = [
  {
    year: "2026",
    type: "Book",
    title: "Maltrust: How Trust Works under Democratic Backsliding",
    journal: "Routledge · Contracted",
    text: "A book about how political trust changes function as democratic constraints weaken. Expected December 2026.",
    href: "/emre-toros-cv.pdf#page=2",
  },
  {
    year: "2025",
    type: "Article",
    title: "Kulturkampf to Partykampf?",
    journal: "South European Society and Politics",
    text: "With S. Toros and Z.G. Kabakçı. Democratic backsliding and democratic satisfaction in Turkey.",
    href: "https://doi.org/10.1080/13608746.2025.2573704",
  },
  {
    year: "2025",
    type: "Article",
    title: "Bridging the Divide",
    journal: "SAGE Open, 15(3)",
    text: "With Z.G. Kabakçı, B.G. Çavdar, and Y.U. Kara. An interdisciplinary analysis of trust in science.",
    href: "https://doi.org/10.1177/21582440251352376",
  },
  {
    year: "2025",
    type: "Article",
    title: "From the Ground Up",
    journal: "Political Studies Review",
    text: "With M. Kara. Political trust and citizen participation in the wake of the Turkey earthquake.",
    href: "https://doi.org/10.1177/14789299251357768",
  },
  {
    year: "2024",
    type: "Book",
    title: "Electoral Integrity in Turkey",
    journal: "Edinburgh University Press",
    text: "A systematic account of the institutions, practices, and political conditions that shape electoral integrity in Turkey.",
    href: "https://edinburghuniversitypress.com/book-electoral-integrity-in-turkey.html",
  },
];

const themes = [
  ["01", "Electoral integrity", "The institutions, practices, and citizen judgements that shape confidence in elections."],
  ["02", "Political trust", "How trust operates in democratic and illiberal contexts, and how it shapes participation."],
  ["03", "Democratic backsliding", "The gradual erosion of constraints, democratic satisfaction, and citizen responses."],
  ["04", "Political communication", "Campaigns, news media, misinformation, and the public interpretation of political claims."],
];

const projects = [
  ["2026–2028", "Fiscal Illusion in Turkey", "TÜBİTAK 1001 · Researcher"],
  ["2026–2027", "Does Source Matter?", "TÜBİTAK 1002 · Principal Investigator"],
  ["2024–2028", "EUPopLink", "COST Action CA23102 · Working Group Member"],
  ["2022–2025", "Turkey Trust Research", "TÜBİTAK 1001 · Principal Investigator"],
];

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="Home">ET<span>•</span></a>
        <div className="navlinks">
          <a href="#research">Research</a>
          <a href="#publications">Publications</a>
          <a href="#projects">Projects</a>
          <a className="pill" href="/emre-toros-cv.pdf">Download CV <Arrow /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Professor of Applied Data Science · Political Scientist</p>
        <h1>Politics is not only what institutions do. It is also what citizens <em>believe</em> they do.</h1>
        <div className="hero-bottom">
          <p className="intro">
            I’m <strong>Emre Toros</strong>, Professor in the Department of Applied
            Data Science at TED University. My research examines electoral integrity,
            political trust, democratic backsliding, and political communication.
          </p>
          <a className="circle-link" href="#research" aria-label="Explore research">↓</a>
        </div>
        <div className="hero-rule"><span /></div>
      </section>

      <section className="section research" id="research">
        <header className="section-head">
          <p className="kicker">Research focus</p>
          <h2>Democracy, seen<br />from the citizen’s side.</h2>
          <p className="section-copy">
            My work examines elections from both institutional and citizen perspectives.
            It spans electoral integrity, political communication, participation,
            campaign strategy, and the development of democratic politics in Turkey.
          </p>
        </header>
        <div className="themes">
          {themes.map(([n, title, text]) => (
            <article className="theme" key={n}>
              <span>{n}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section writing" id="publications">
        <header className="writing-head">
          <div>
            <p className="kicker">Selected publications</p>
            <h2>Books & recent work.</h2>
          </div>
          <a href="/emre-toros-cv.pdf">Full publication list in CV <Arrow /></a>
        </header>
        <div className="pubs">
          {publications.map((pub) => (
            <a className="pub" href={pub.href} key={pub.title}>
              <div className="pub-meta"><span>{pub.year}</span><span>{pub.type}</span></div>
              <div>
                <h3>{pub.title}</h3>
                <p className="venue">{pub.journal}</p>
              </div>
              <p className="abstract">{pub.text}</p>
              <span className="pub-arrow"><Arrow /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="section teaching" id="projects">
        <div className="teaching-label">
          <p className="kicker">Current profile</p>
          <span className="monogram">ET</span>
        </div>
        <div className="teaching-main">
          <h2>Research across<br /><em>institutions & citizens.</em></h2>
          <p>
            My work combines political science, communication research, and applied
            data science. I have held visiting positions at Harvard University,
            King&apos;s College London, and Stanford University, and served as Dean of
            the Faculty of Communication at Hacettepe University.
          </p>
          <div className="course-list">
            {projects.map(([years, title, role]) => (
              <div key={title}><span>{years}</span><strong>{title}<small>{role}</small></strong></div>
            ))}
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="kicker">Let’s continue the conversation</p>
          <h2>Research begins<br />with a good question.</h2>
        </div>
        <div className="footer-links">
          <a href="mailto:emretoros@bilkent.edu.tr">Email <Arrow /></a>
          <a href="https://orcid.org/0000-0002-7550-3185">ORCID <Arrow /></a>
          <a href="https://tinyurl.com/yeydy7jp">Google Scholar <Arrow /></a>
          <a href="/emre-toros-cv.pdf">Download CV <Arrow /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="fineprint">© 2026 Emre Toros · Ankara, Türkiye</p>
      </footer>
    </main>
  );
}
