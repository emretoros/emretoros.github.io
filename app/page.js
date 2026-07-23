const publications = [
  {
    year: "2024",
    type: "Book",
    title: "Electoral Integrity in Turkey",
    journal: "Edinburgh University Press",
    text: "A book-length examination of electoral integrity and the institutions, practices, and political conditions that shape elections in Turkey.",
  },
  {
    year: "2025",
    type: "Article",
    title: "How Do Religions and Religiosity Matter for Climate Anxiety?",
    journal: "Religions, 16(3), 275",
    text: "Research on the relationship between religion, religiosity, and public responses to climate anxiety.",
  },
  {
    year: "2020",
    type: "Article",
    title: "The Peculiar Personality of Strongmen",
    journal: "Political Research Exchange, 2(1)",
    text: "With Alessandro Nai. A comparative study of Big Five and Dark Triad personality traits among political leaders worldwide.",
  },
];

const themes = [
  ["01", "Electoral integrity", "The institutions, practices, and citizen judgements that shape confidence in elections."],
  ["02", "Political behaviour", "How citizens participate, assign responsibility, and respond to political campaigns."],
  ["03", "Campaigns & parties", "Negative campaigning, electoral pledges, political communication, and party competition."],
  ["04", "Turkish politics", "Democratic institutions, political culture, media, participation, and elections in Turkey."],
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
          <a href="#writing">Writing</a>
          <a href="#teaching">Teaching</a>
          <a className="pill" href="https://github.com/emretoros">GitHub <Arrow /></a>
        </div>
      </nav>

      <section className="hero" id="top">
        <p className="eyebrow">Political scientist · Researcher · Educator</p>
        <h1>Politics is not only what institutions do. It is also what citizens <em>believe</em> they do.</h1>
        <div className="hero-bottom">
          <p className="intro">
            I’m <strong>Emre Toros</strong>, a political scientist studying electoral
            integrity, political behaviour, campaigns, and public opinion—with a
            particular focus on Turkey.
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

      <section className="section writing" id="writing">
        <header className="writing-head">
          <div>
            <p className="kicker">Selected work</p>
            <h2>Ideas in progress.</h2>
          </div>
          <a href="https://emretoros.weebly.com/cv.html">View current CV <Arrow /></a>
        </header>
        <div className="pubs">
          {publications.map((pub) => (
            <article className="pub" key={pub.title}>
              <div className="pub-meta"><span>{pub.year}</span><span>{pub.type}</span></div>
              <div>
                <h3>{pub.title}</h3>
                <p className="venue">{pub.journal}</p>
              </div>
              <p className="abstract">{pub.text}</p>
              <span className="pub-arrow"><Arrow /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="section teaching" id="teaching">
        <div className="teaching-label">
          <p className="kicker">In the classroom</p>
          <span className="monogram">ET</span>
        </div>
        <div className="teaching-main">
          <h2>Teach the question,<br /><em>not the answer.</em></h2>
          <p>
            My courses invite students to connect political concepts with evidence,
            question easy explanations, and develop arguments that can withstand
            serious scrutiny.
          </p>
          <div className="course-list">
            <div><span>Undergraduate</span><strong>Research Methods in Social Sciences</strong></div>
            <div><span>Undergraduate</span><strong>Comparative Politics</strong></div>
            <div><span>Graduate</span><strong>Public Opinion & Political Behaviour</strong></div>
          </div>
        </div>
      </section>

      <footer>
        <div>
          <p className="kicker">Let’s continue the conversation</p>
          <h2>Research begins<br />with a good question.</h2>
        </div>
        <div className="footer-links">
          <a href="https://github.com/emretoros">GitHub <Arrow /></a>
          <a href="https://emretoros.weebly.com/publications.html">Full publication list <Arrow /></a>
          <a href="#top">Back to top ↑</a>
        </div>
        <p className="fineprint">© 2026 Emre Toros · Istanbul, Türkiye</p>
      </footer>
    </main>
  );
}
