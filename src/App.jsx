import D from "./data.js";
import photo from "./assets/photo.jpg";

const Section = ({ id, title, children, className }) => (
  <section id={id} className={className}>
    <h2>{title}</h2>
    {children}
  </section>
);
const List = ({ items }) => <ul>{items.map((x, i) => <li key={i}>{x}</li>)}</ul>;

function Header() {
  return (
    <header>
      <a className="logo" href="#top" aria-label="Accueil">DB<b>.</b></a>
      <nav>
        <a href="#apropos">À propos</a><a href="#projets">Projets</a>
        <a href="#parcours">Parcours</a><a href="#formation">Formation</a>
        <a className="btn fill" href="#contact">Me contacter</a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <div className="hero">
      <div>
        <h1>Salut, je suis {D.first}, {D.role}.</h1>
        <p className="sub">Je conçois des modèles et des applications autour des LLMs, du deep learning et du web.</p>
        <p className="search">{D.search}</p>
        <ul className="dots"><li>Data</li><li>IA</li><li>Full Stack</li></ul>
        <div className="cta">
          <a className="btn" href="#projets">Voir mes projets</a>
          <a className="btn fill" href="#contact">Parlons-en</a>
        </div>
      </div>
      <div className="circle">
        <img src={photo} alt={`Portrait de ${D.name}`} width="430" height="430" />
      </div>
    </div>
  );
}

function Marquee() {
  const items = [...D.marquee, ...D.marquee, ...D.marquee, ...D.marquee];
  return (
    <div className="strip" aria-hidden="true">
      <div className="track">{items.map((m, i) => <span key={i}>{m}</span>)}</div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main id="top">
        <Hero />
        <Marquee />
        <Section id="apropos" title="À propos">
          <div className="about">
            <p>{D.about}</p>
            <div className="stats">
              {D.stats.map(([n, l]) => <div className="stat" key={n}><b>{n}</b><span>{l}</span></div>)}
            </div>
          </div>
        </Section>
        <Section id="competences" title="Compétences">
          <div className="skills">
            {D.skills.map(([t, p]) => <div className="skill" key={t}><h3>{t}</h3><p>{p}</p></div>)}
          </div>
        </Section>
        <Section id="projets" title="Projets">
          <div className="proj">
            {D.projects.map((p) => (
              <article className="pcard" key={p.title}>
                <div className="meta">{p.date} · {p.ctx}</div>
                <h3>{p.title}</h3>
                <List items={p.points} />
                <div className="tags">{p.stack.map((t) => <span key={t}>{t}</span>)}</div>
              </article>
            ))}
          </div>
        </Section>
        <Section id="parcours" title="Expériences">
          <div className="tl">
            {D.exp.map((e) => (
              <div className="item" key={e.org}>
                <h3>{e.role}</h3>
                <div className="meta">{e.org} · {e.place} · {e.date}</div>
                <List items={e.points} />
              </div>
            ))}
          </div>
        </Section>
        <Section id="formation" title="Formation">
          <div className="two">
            <div>{D.edu.map(([a, b, c]) => <div className="row" key={a}><b>{a}</b><span>{b} · {c}</span></div>)}</div>
            <div>{D.certs.map(([a, b, c]) => <div className="row" key={a}><b>{a}</b><span>{b} : {c}</span></div>)}</div>
          </div>
        </Section>
        <Section id="qualites" title="Qualités et langues">
          <div className="chips">
            {D.qualities.map((q) => <span key={q}>{q}</span>)}
            {D.langs.map(([l, n]) => <span key={l}>{l} ({n})</span>)}
          </div>
        </Section>
        <section className="contact" id="contact">
          <h2>Travaillons ensemble</h2>
          <p>Je cherche un stage de fin d’études en Data et IA à partir de mars 2027 (12 semaines minimum). Écris-moi, je réponds vite.</p>
          <div className="cta" style={{ justifyContent: "center" }}>
            <a className="btn fill" href={`mailto:${D.email}`}>{D.email}</a>
            <a className="btn" href={D.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="btn" href={`tel:${D.phone.replace(/\s/g, "")}`}>{D.phone}</a>
          </div>
        </section>
      </main>
      <footer>© {new Date().getFullYear()} {D.name} · {D.place}</footer>
    </>
  );
}
