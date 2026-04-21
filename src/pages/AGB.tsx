import { ReactNode } from 'react';
import { useReveal } from '../hooks/useReveal';
import Nav from '../components/Nav/Nav';
import MountainDivider from '../components/MountainDivider/MountainDivider';
import Footer from '../components/Footer/Footer';
import styles from './Legal.module.css';

const TOC = [
  { id: 'geltung', label: '§ 1 Geltungsbereich' },
  { id: 'vertrag', label: '§ 2 Vertragsschluss' },
  { id: 'leistungen', label: '§ 3 Leistungsumfang' },
  { id: 'preise', label: '§ 4 Preise & Zahlung' },
  { id: 'mitwirkung', label: '§ 5 Mitwirkungspflichten' },
  { id: 'abnahme', label: '§ 6 Abnahme' },
  { id: 'gewaehrleistung', label: '§ 7 Gewährleistung' },
  { id: 'haftung', label: '§ 8 Haftung' },
  { id: 'eigentumsvorbehalt', label: '§ 9 Eigentumsvorbehalt' },
  { id: 'widerruf', label: '§ 10 Widerrufsrecht' },
  { id: 'schluss', label: '§ 11 Schlussbestimmungen' },
];

function Clause({ items }: { items: ReactNode[] }) {
  return (
    <div className={styles.clause}>
      {items.map((content, i) => (
        <div key={i} className={styles.clauseP}>
          <span className={styles.idx}>({i + 1})</span>
          <span className={styles.txt}>{content}</span>
        </div>
      ))}
    </div>
  );
}

export default function AGB() {
  useReveal();
  return (
    <>
      <Nav ctaVariant="kontakt" activePage="legal" />

      <section id="hero" className={styles.hero}>
        <div className={styles.heroBg} />
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroEyebrow}>Rechtliches</div>
            <h1 className={styles.heroH1}>Allgemeine Geschäftsbedingungen</h1>
            <p className={styles.heroSub}>
              Unsere AGB für Handwerksleistungen im Fensterbau, Dachsanierung und
              Innenausbau. Klar formuliert — keine versteckten Klauseln.
            </p>
          </div>
        </div>
      </section>

      <MountainDivider variant="slim" />

      <section id="legal" className={styles.legal}>
        <div className="container">
          <div className={styles.legalGrid}>
            <aside className={styles.legalToc}>
              <div className={styles.legalTocTitle}>Inhalt</div>
              {TOC.map((t) => (
                <a key={t.id} href={`#${t.id}`}>
                  {t.label}
                </a>
              ))}
            </aside>

            <div className={`${styles.legalContent} ${styles.legalContentAgb}`}>
              <div className={styles.callout}>
                <p>
                  <strong>Vertragspartner:</strong> LRE Baukomfort · Thomas Vogel,
                  [Straße und Hausnummer], [PLZ] [Ort] (im Folgenden „Auftragnehmer"
                  oder „wir").
                </p>
              </div>

              <h2 id="geltung">
                <span className={styles.num}>§ 1</span>Geltungsbereich
              </h2>
              <Clause
                items={[
                  <>
                    Diese Allgemeinen Geschäftsbedingungen (nachfolgend „AGB") gelten
                    für sämtliche Verträge zwischen dem Auftragnehmer und dem
                    Auftraggeber über die Erbringung von Handwerksleistungen im
                    Bereich{' '}
                    <strong>Fensterbau, Dachsanierung, Innenausbau</strong> sowie
                    damit verbundene Liefer- und Montageleistungen.
                  </>,
                  <>
                    Verbraucher im Sinne dieser AGB ist jede natürliche Person, die
                    das Rechtsgeschäft zu Zwecken abschließt, die überwiegend weder
                    ihrer gewerblichen noch ihrer selbständigen beruflichen Tätigkeit
                    zugerechnet werden können (§ 13 BGB). Unternehmer ist jede
                    natürliche oder juristische Person oder rechtsfähige
                    Personengesellschaft, die bei Abschluss eines Rechtsgeschäfts in
                    Ausübung ihrer gewerblichen oder selbständigen beruflichen
                    Tätigkeit handelt (§ 14 BGB).
                  </>,
                  <>
                    Abweichenden Geschäftsbedingungen des Auftraggebers wird hiermit
                    ausdrücklich widersprochen. Sie werden nur dann
                    Vertragsbestandteil, wenn der Auftragnehmer ihrer Geltung
                    schriftlich zustimmt.
                  </>,
                  <>
                    Bei Bauverträgen gelten ergänzend die Bestimmungen der VOB/B,
                    sofern dies ausdrücklich im Einzelvertrag vereinbart ist —
                    gegenüber Verbrauchern nur, wenn die VOB/B im Volltext übergeben
                    oder auf zumutbare Weise bereitgestellt wurde.
                  </>,
                ]}
              />

              <h2 id="vertrag">
                <span className={styles.num}>§ 2</span>Vertragsschluss &amp; Angebote
              </h2>
              <Clause
                items={[
                  <>
                    Unsere Angebote sind freibleibend und unverbindlich, sofern sie
                    nicht ausdrücklich als verbindlich gekennzeichnet sind oder eine
                    bestimmte Annahmefrist enthalten.
                  </>,
                  <>
                    Die Bestellung einer Leistung durch den Auftraggeber gilt als
                    verbindliches Vertragsangebot. Der Vertrag kommt zustande, sobald
                    wir die Annahme des Auftrags schriftlich (auch per E-Mail)
                    bestätigen oder mit der Ausführung der Leistung beginnen.
                  </>,
                  <>
                    Mündliche Nebenabreden bestehen nicht. Änderungen, Ergänzungen
                    und Nebenabreden bedürfen der Textform (z. B. E-Mail); dies gilt
                    auch für die Änderung dieser Textformklausel.
                  </>,
                  <>
                    Die in Angeboten enthaltenen Angaben zu Maßen, Farben, Gewichten
                    und Materialeigenschaften sind nur verbindlich, soweit sie
                    ausdrücklich als solche bezeichnet sind. Handelsübliche
                    Abweichungen bleiben vorbehalten.
                  </>,
                ]}
              />

              <h2 id="leistungen">
                <span className={styles.num}>§ 3</span>Leistungsumfang &amp; Ausführung
              </h2>
              <Clause
                items={[
                  <>
                    Der Umfang der vereinbarten Leistungen ergibt sich aus unserer
                    schriftlichen Auftragsbestätigung bzw. dem unterzeichneten
                    Angebot. Leistungen, die dort nicht aufgeführt sind, sind
                    gesondert zu vergüten.
                  </>,
                  <>
                    Wir sind berechtigt, zur Erfüllung des Auftrags qualifizierte
                    Subunternehmer hinzuzuziehen. Die Verantwortung gegenüber dem
                    Auftraggeber bleibt hiervon unberührt.
                  </>,
                  <>
                    Termine und Fristen sind nur dann verbindlich, wenn sie
                    ausdrücklich als verbindlich vereinbart wurden. Bei höherer
                    Gewalt, Witterungseinflüssen, die die Arbeit objektiv unmöglich
                    machen, Lieferverzögerungen von Vorlieferanten, Krankheit oder
                    sonstigen unvorhersehbaren, nicht von uns zu vertretenden
                    Umständen, verlängern sich Fristen angemessen.
                  </>,
                  <>
                    Stellt sich nach Vertragsschluss heraus, dass zur ordnungsgemäßen
                    Ausführung zusätzliche Leistungen erforderlich sind (z. B. bei
                    verdeckten Schäden an Dachstuhl, Mauerwerk oder Anschlüssen),
                    informieren wir den Auftraggeber unverzüglich und legen ein
                    Nachtragsangebot vor.
                  </>,
                ]}
              />

              <h2 id="preise">
                <span className={styles.num}>§ 4</span>Preise &amp; Zahlungsbedingungen
              </h2>
              <Clause
                items={[
                  <>
                    Sämtliche Preise verstehen sich — sofern nicht anders angegeben —
                    netto zuzüglich der gesetzlichen Umsatzsteuer. Gegenüber
                    Verbrauchern werden Preise inklusive Umsatzsteuer ausgewiesen,
                    soweit wir umsatzsteuerpflichtig sind.
                  </>,
                  <>
                    Bei Aufträgen mit einem Netto-Auftragsvolumen ab{' '}
                    <strong>5.000 Euro</strong> sind wir berechtigt, angemessene
                    Abschlagszahlungen auf bereits erbrachte, nachgewiesene Leistungen
                    zu verlangen (§ 632 a BGB).
                  </>,
                  <>
                    Unsere Rechnungen sind — sofern nichts anderes vereinbart ist —
                    innerhalb von <strong>14 Tagen</strong> ab Rechnungsdatum ohne
                    Abzug zur Zahlung fällig.
                  </>,
                  <>
                    Bei Zahlungsverzug werden Verzugszinsen gemäß § 288 BGB berechnet
                    (5 Prozentpunkte über dem Basiszinssatz gegenüber Verbrauchern, 9
                    Prozentpunkte gegenüber Unternehmern). Die Geltendmachung
                    weiterer Verzugsschäden bleibt vorbehalten.
                  </>,
                  <>
                    Der Auftraggeber kann nur mit unbestrittenen oder rechtskräftig
                    festgestellten Forderungen aufrechnen. Ein Zurückbehaltungsrecht
                    steht dem Auftraggeber nur zu, soweit sein Gegenanspruch auf
                    demselben Vertragsverhältnis beruht.
                  </>,
                ]}
              />

              <h2 id="mitwirkung">
                <span className={styles.num}>§ 5</span>Mitwirkungspflichten des
                Auftraggebers
              </h2>
              <Clause
                items={[
                  <>
                    Der Auftraggeber stellt uns für die Durchführung der Arbeiten
                    rechtzeitig, unentgeltlich und in einem verwendungsfähigen
                    Zustand zur Verfügung: Zugang zur Baustelle/zum Objekt, Wasser,
                    Strom, Baustrom ggf. als separater Anschluss sowie ausreichend
                    Platz zum Abstellen von Werkzeug und Material.
                  </>,
                  <>
                    Der Auftraggeber sorgt dafür, dass sich während der Ausführung
                    der Arbeiten keine Wertgegenstände in unmittelbaren
                    Arbeitsbereichen befinden, deckt bei Innenarbeiten bewegliche
                    Möbel oder entfernt sie aus dem Arbeitsbereich, sofern nicht
                    anders vereinbart.
                  </>,
                  <>
                    Kommt der Auftraggeber seinen Mitwirkungspflichten nicht, nicht
                    rechtzeitig oder unvollständig nach, verlängern sich vereinbarte
                    Termine angemessen. Dadurch entstehende Mehrkosten trägt der
                    Auftraggeber.
                  </>,
                ]}
              />

              <h2 id="abnahme">
                <span className={styles.num}>§ 6</span>Abnahme
              </h2>
              <Clause
                items={[
                  <>
                    Nach Fertigstellung der Leistung wird diese gemeinsam mit dem
                    Auftraggeber abgenommen. Eine förmliche Abnahme kann mit kurzem
                    Abnahmeprotokoll erfolgen.
                  </>,
                  <>
                    Nimmt der Auftraggeber die Leistung nicht innerhalb einer ihm
                    gesetzten angemessenen Frist ab, obwohl er hierzu verpflichtet
                    ist, gilt die Leistung als abgenommen. Gegenüber Verbrauchern
                    gilt dies nur, wenn der Auftragnehmer in der Fristsetzung auf
                    diese Rechtsfolge hingewiesen hat (§ 640 Abs. 2 BGB).
                  </>,
                  <>
                    Unwesentliche Mängel berechtigen den Auftraggeber nicht zur
                    Verweigerung der Abnahme. Sie sind im Abnahmeprotokoll zu
                    dokumentieren und werden von uns zeitnah nachgebessert.
                  </>,
                ]}
              />

              <h2 id="gewaehrleistung">
                <span className={styles.num}>§ 7</span>Gewährleistung
                (Sachmängelhaftung)
              </h2>
              <Clause
                items={[
                  <>
                    Für die von uns erbrachten Leistungen gelten die gesetzlichen
                    Gewährleistungsvorschriften. Die Gewährleistungsfrist für unsere
                    Leistungen beträgt gegenüber Verbrauchern <strong>5 Jahre</strong>{' '}
                    für Arbeiten an Bauwerken (§ 634 a Abs. 1 Nr. 2 BGB) und im
                    Übrigen <strong>2 Jahre</strong> ab Abnahme.
                  </>,
                  <>
                    Bei Vereinbarung der VOB/B gegenüber Unternehmern beträgt die
                    Gewährleistungsfrist <strong>4 Jahre</strong> für Bauleistungen,
                    sofern im Einzelvertrag nichts anderes geregelt ist.
                  </>,
                  <>
                    Im Falle eines Mangels sind wir zunächst zur Nacherfüllung
                    berechtigt und verpflichtet. Die Wahl zwischen Mangelbeseitigung
                    oder Neuherstellung liegt bei uns, sofern nicht die vom
                    Auftraggeber gewählte Art der Nacherfüllung aus Gründen der
                    Zumutbarkeit oder Verhältnismäßigkeit vorzuziehen ist.
                  </>,
                  <>
                    Schlägt die Nacherfüllung fehl, ist sie unzumutbar oder verweigern
                    wir sie ernsthaft und endgültig, kann der Auftraggeber nach den
                    gesetzlichen Vorschriften mindern, zurücktreten oder
                    Schadensersatz verlangen.
                  </>,
                  <>
                    Keine Gewährleistung übernehmen wir für Schäden, die nach Abnahme
                    durch unsachgemäße Behandlung, normalen Verschleiß, fehlende oder
                    unsachgemäße Wartung, bauliche Veränderungen durch Dritte, extreme
                    Witterungseinflüsse oder mangelhafte Vorarbeiten Dritter entstehen.
                  </>,
                ]}
              />

              <h2 id="haftung">
                <span className={styles.num}>§ 8</span>Haftung
              </h2>
              <Clause
                items={[
                  <>
                    Wir haften unbeschränkt für Schäden aus der Verletzung des
                    Lebens, des Körpers oder der Gesundheit, die auf einer
                    fahrlässigen Pflichtverletzung von uns oder einer vorsätzlichen
                    oder fahrlässigen Pflichtverletzung unserer gesetzlichen
                    Vertreter oder Erfüllungsgehilfen beruhen, sowie nach dem
                    Produkthaftungsgesetz.
                  </>,
                  <>
                    Bei sonstigen Schäden haften wir unbeschränkt bei Vorsatz und
                    grober Fahrlässigkeit sowie bei der Übernahme einer Garantie
                    oder eines Beschaffungsrisikos.
                  </>,
                  <>
                    Bei leichter Fahrlässigkeit haften wir nur bei Verletzung
                    wesentlicher Vertragspflichten (Pflichten, deren Erfüllung die
                    ordnungsgemäße Durchführung des Vertrags überhaupt erst
                    ermöglicht und auf deren Einhaltung der Vertragspartner
                    regelmäßig vertrauen darf — sog. Kardinalpflichten). In diesem
                    Fall ist die Haftung auf den vertragstypischen, vorhersehbaren
                    Schaden begrenzt.
                  </>,
                  <>Im Übrigen ist die Haftung ausgeschlossen.</>,
                ]}
              />

              <h2 id="eigentumsvorbehalt">
                <span className={styles.num}>§ 9</span>Eigentumsvorbehalt
              </h2>
              <Clause
                items={[
                  <>
                    Gelieferte und noch nicht fest mit dem Grundstück verbundene Ware
                    bleibt bis zur vollständigen Bezahlung aller Forderungen aus dem
                    Vertragsverhältnis unser Eigentum.
                  </>,
                  <>
                    Der Auftraggeber ist verpflichtet, die Vorbehaltsware pfleglich
                    zu behandeln und uns über Zugriffe Dritter (z. B. Pfändung)
                    unverzüglich zu informieren.
                  </>,
                ]}
              />

              <h2 id="widerruf">
                <span className={styles.num}>§ 10</span>Widerrufsrecht für
                Verbraucher
              </h2>
              <Clause
                items={[
                  <>
                    Verbrauchern, die einen Vertrag außerhalb unserer Geschäftsräume
                    oder im Wege des Fernabsatzes (z. B. per Telefon, E-Mail,
                    Online-Formular) abschließen, steht ein gesetzliches
                    Widerrufsrecht zu.
                  </>,
                  <>
                    Die Einzelheiten ergeben sich aus der separaten{' '}
                    <strong>Widerrufsbelehrung</strong>, die dem Verbraucher vor
                    Vertragsschluss in Textform übergeben wird.
                  </>,
                  <>
                    Ein Widerrufsrecht besteht u. a. nicht bei Verträgen zur
                    Lieferung von Waren, die nicht vorgefertigt sind und für deren
                    Herstellung eine individuelle Auswahl oder Bestimmung durch den
                    Verbraucher maßgeblich ist oder die eindeutig auf die
                    persönlichen Bedürfnisse des Verbrauchers zugeschnitten sind (§
                    312 g Abs. 2 Nr. 1 BGB) — insbesondere bei maßgefertigten
                    Fenstern, Türen oder Innenausbauelementen.
                  </>,
                  <>
                    Wünscht der Verbraucher ausdrücklich, dass wir mit der Leistung
                    vor Ablauf der Widerrufsfrist beginnen, hat er bei Widerruf
                    Wertersatz für die bis zum Widerruf bereits erbrachten Leistungen
                    zu leisten.
                  </>,
                ]}
              />

              <h2 id="schluss">
                <span className={styles.num}>§ 11</span>Schlussbestimmungen
              </h2>
              <Clause
                items={[
                  <>
                    Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss
                    des UN-Kaufrechts (CISG).
                  </>,
                  <>
                    Erfüllungsort ist — soweit zulässig vereinbart — der Sitz des
                    Auftragnehmers. Ausschließlicher Gerichtsstand für alle
                    Streitigkeiten aus dem Vertragsverhältnis ist, sofern der
                    Auftraggeber Kaufmann, juristische Person des öffentlichen Rechts
                    oder ein öffentlich-rechtliches Sondervermögen ist, der Sitz des
                    Auftragnehmers.
                  </>,
                  <>
                    Sollten einzelne Bestimmungen dieser AGB ganz oder teilweise
                    unwirksam sein oder werden, so wird hierdurch die Wirksamkeit der
                    übrigen Bestimmungen nicht berührt. An die Stelle der unwirksamen
                    Bestimmung tritt die gesetzliche Regelung.
                  </>,
                  <>
                    Wir sind nicht bereit und nicht verpflichtet, an einem
                    Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
                    teilzunehmen.
                  </>,
                ]}
              />

              <div className={styles.legalMeta}>Stand: April 2026 · Version 1.0</div>
            </div>
          </div>
        </div>
      </section>

      <Footer variant="mini" legalActive="agb" />
    </>
  );
}
