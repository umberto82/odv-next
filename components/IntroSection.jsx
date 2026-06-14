import '../app/styles/intro_section.css'

export default function IntroSection() {
  return (
    <section className="intro-section">
      <div className="container intro-card">
        {/* ROW 1 */}
        <div className="intro-row">
          <div className="intro-text">
            <h2>Una casa vacanze tra natura, tradizione e comfort</h2>

            <p>
              Situata nel cuore dei Colli Euganei, la nostra casa vacanze a
              Lozzo Atestino è il luogo ideale per chi cerca tranquillità,
              bellezza e autenticità. Ogni ambiente è curato nei dettagli per
              offrire il massimo relax: camere con travi in legno, cucina
              tradizionale, salotto con camino e bagni spaziosi.
            </p>

            <a href="#">Scopri di più</a>
          </div>

          <div className="intro-image">
            <img
              src="/imgs/home/intro-section/oasi-dolce-vita-casa-vacanze-esterno-veneto.jpg"
              alt="Casa vacanze Oasi Dolce Vita immersa nel verde dei Colli Euganei in Veneto"
            />
          </div>
        </div>

        {/* ROW 2 */}
        <div className="intro-row reverse">
          <div className="intro-text">
            <h2>Tutto ciò che ti serve per sentirti a casa</h2>

            <p>
              La casa offre ogni comfort: lenzuola sempre fresche, asciugamani
              puliti, stoviglie e utensili completi, TV e una cucina attrezzata
              per soggiorni lunghi e indipendenti.
            </p>

            <a href="#">Scopri di più</a>
          </div>

          <div className="intro-image">
            <img
              src="/imgs/home/intro-section/oasi-dolce-vita-cucina-attrezzata-casa-vacanze.jpg"
              alt="Cucina moderna e completamente attrezzata della casa vacanze Oasi Dolce Vita"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
