import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "pedro cruz",
};

type NestedItem = {
  id: string;
  title: string;
  body: React.ReactNode;
};

type Section = {
  id: string;
  label: string;
  parentId: string;
  items: NestedItem[];
};

const sections: Section[] = [
  {
    id: "mainOne-collapse1",
    label: "projects",
    parentId: "mainAccordionOne",
    items: [
      {
        id: "nestedOne-collapse1",
        title: "Apple Inc. Matryoshka Diffusion Models (2024)",
        body: (
          <>
            I contributed to open-sourcing Apple&apos;s Matryoshka Diffusion
            Models as a Python library. I specifically wrote unit tests for
            their tokenizer, refactored the project&apos;s dependency
            management, cleaned code style for disambiguation, and worked on
            documentation for the package.{" "}
            <a target="_blank" rel="noreferrer" href="https://github.com/apple/ml-mdm">
              <strong>GitHub Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i> <strong>Python, ML, Apple, Unit testing.</strong>
          </>
        ),
      },
      {
        id: "nestedOne-collapse2",
        title: "TV Show Recommender (2024)",
        body: (
          <>
            I developed an NLP-powered recommendation system to find similar
            titles based on a user-provided show description. I wanted to play
            around with available libraries related to ML and NLP, and was able
            to learn a ton in the process. I definitely would have changed the
            approach a bit to try to use more sophisticated methods (using LCA
            rathen than PCA for dimensionality reduction, for example).{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dscarb21/ML_Final-Project_DIS-S24"
            >
              <strong>GitHub Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i>{" "}
            <strong>Python (NLTK, SKlearn, Pandas, NumPy), ML</strong>
          </>
        ),
      },
      {
        id: "nestedOne-collapse3",
        title: "Omnilingo (2023)",
        body: (
          <>
            I contributed to Omnilingo, a listening-based language learning
            app. Think about Duolingo, but open-source. I learned a lot about
            web development, application design, and integrating pedagogical
            goals through engineering.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/omnilingo/omnilingo"
            >
              <strong>GitHub Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i> <strong>Web Development, HTML/CSS/JavaScript</strong>
          </>
        ),
      },
      {
        id: "nestedOne-collapse4",
        title: "Zapotec Talking Dictionaries (2022)",
        body: (
          <>
            I developed a digital dictionary to promote community language
            documentation in Oaxaca, Mexico; the project was supported by
            National Geographic. This was one of my first summer projects when
            in college. I worked closely with language activits from Santiago
            Matatlán, Mexico, to support the revitalization of their native
            Zapotec to a community of +10,000 speakers. My work was very
            deta-related. I helped them think about what should go in their
            dictionary, then helped them collect the data, and made decisions as
            to how to effectively store the database in disk and online.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://talkingdictionary.swarthmore.edu/matatlan/"
            >
              <strong>Online Dictionary.</strong>
            </a>
            <br />
            <i>Keywords:</i>{" "}
            <strong>Data Collection; Fieldwork; Language Documentation.</strong>
          </>
        ),
      },
      {
        id: "nestedOne-collapse5",
        title: "Nheengatu-Portuguese Rule-Based Translator (2022)",
        body: (
          <>
            I developed an NLP-powered recommendation system to find similar
            titles based on a user-provided show description.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/dscarb21/ML_Final-Project_DIS-S24"
            >
              <strong>GitHub Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i>{" "}
            <strong>Python (NLTK, SKlearn, Pandas, NumPy), ML</strong>
          </>
        ),
      },
      {
        id: "nestedOne-collapse6",
        title: "Political Pressure Tool (2021)",
        body: (
          <>
            I created a web application for the Frente pelo Avanço dos Direitos
            Políticos das Mulheres to hold local congresspeople accountable for
            constitutional amendment projects. They were able to gather +900
            signatures collected from all Brazilian states using this
            application. I learned a lot about web development doing this
            project. In hindsight, I could have been more careful with how data
            was being stored and handled through the forms. There&apos;s pretty
            much no cryptography in the app, which I would implement nowadays to
            make it safer. Also, I would have done a much better top-down design
            to make the app simpler (it&apos;s very unnecessarily complex.){" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/pedroborgescruz/Ferramenta-Pressao-Politica"
            >
              <strong>GitHub Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i> <strong>Web Development, HTML/CSS/JavaScript</strong>
          </>
        ),
      },
    ],
  },
  {
    id: "mainTwo-collapse1",
    label: "research",
    parentId: "mainAccordionTwo",
    items: [
      {
        id: "nestedTwo-collapse1",
        title: "Starlink Internet Latency Measurement (2025)",
        body: (
          <>
            I worked under Prof. Vasanta Chaganti in analyzing Starlink internet
            latency. As a member of the lab, my goal was to identify performance
            measures that are salient, accurate, and statistically significant -
            for constituencies that range from consumers making purchase
            decisions, to regulators, to those who diagnose issues in the
            network. I specifically analyzed 2022-2024 data related to Starlink
            idle latency while creating Jupyter Notebooks.{" "}
            <a target="_blank" rel="noreferrer" href="/assets/pdfs/ssrn-5400556.pdf">
              <strong>Article.</strong>
            </a>
            <br />
            <i>Keywords:</i>{" "}
            <strong>Python, Data Analysis, Pandas, NumPy.</strong>
          </>
        ),
      },
      {
        id: "nestedTwo-collapse2",
        title: "UltraTrace (2022)",
        body: (
          <>
            During my sophomore year, I was part of the Swarthmore Phonetics
            Laboratory. I worked on Ultrace, a tool for manual annotation of 2D
            UTI (Ultrasound Tongue Imaging) data. This software can be used by
            linguists interested in annoting phonological data for their
            research. I worked under Prof. Jonathan Washington and supported the
            correction of bugs and roadmap development for the software.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/SwatPhonLab/UltraTrace"
            >
              <strong>Github Repository.</strong>
            </a>
            <br />
            <i>Keywords:</i>{" "}
            <strong>Python, Software Development, Linguistics.</strong>
          </>
        ),
      },
    ],
  },
  {
    id: "mainThree-collapse1",
    label: "design",
    parentId: "mainAccordionThree",
    items: [
      {
        id: "nestedThree-collapse1",
        title: "Latin American Leadership Academy (LALA) Rebranding (2022)",
        body: (
          <>
            I researched and designed the new visual identity for LALA, an
            educational institution in Latin America worth over US$ 1 mi.{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.behance.net/gallery/134585645/Latin-American-Leadership-Academy-(LALA)?tracking_source=search_projects|latin+american+leadership+academy&l=2"
            >
              <strong>Behance.</strong>
            </a>
          </>
        ),
      },
    ],
  },
  {
    id: "mainFour-collapse1",
    label: "industry",
    parentId: "mainAccordionFour",
    items: [
      {
        id: "nestedFour-collapse1",
        title: "Stone Co.",
        body: (
          <>
            <a href="https://www.stone.com.br/" target="_blank" rel="noreferrer">
              Stone
            </a>{" "}
            is one of the biggest fintechs in Brazil. I led the research for an
            AI in-app payments assistant, aiming to support over 2.1 million
            active users in managing their daily expenses. This product was
            projected to generate US$1 billion annually to the company. Part of
            my work involved exploring product-market fit, conducting
            benchmarking analysis in Brazil and internationally, leading product
            ideation, prototyping, and validating the product&apos;s first
            version with seven clients. I also worked on the financial
            projection.
          </>
        ),
      },
      {
        id: "nestedFour-collapse2",
        title: "ImpulsoGov",
        body: (
          <>
            My project was to help the organization understand what were the
            funding opportunities in Brazil to leverage their products. I
            developed a database analyzing congressional spending to prioritize
            healthcare tech funding opportunities. I wrote Python scripts for
            web scraping and data analysis to gather data from over 535 entities
            and individuals across the internet and did data analysis.
            Ultimately, I identified key opportunities totaling US$4 million
            annually for the organization, which provided actionable insights to
            guide the second-semester funding strategy.
          </>
        ),
      },
    ],
  },
];

function NestedAccordion({
  parentId,
  items,
}: {
  parentId: string;
  items: NestedItem[];
}) {
  const nestedId = `nested-${parentId}`;

  return (
    <div className="accordion accordion-flush" id={nestedId}>
      {items.map((item) => (
        <div className="accordion-item" key={item.id}>
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${item.id}`}
              aria-expanded="false"
              aria-controls={item.id}
            >
              {item.title}
            </button>
          </h2>
          <div
            id={item.id}
            className="accordion-collapse collapse"
            data-bs-parent={`#${nestedId}`}
          >
            <div className="accordion-body">{item.body}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <div className="intro-section container-fluid">
        <div className="container text-center">
          <div className="row">
            <div className="col">
              <div className="quick-info">welcome.</div>
            </div>
            <div className="col">
              <p className="secondary-info">
                Born &amp; raised in São Paulo, Brazil, I&apos;m currently a
                senior at Swarthmore College majoring in computer science.
                I&apos;m passionate about tech and aim to learn from both
                industry and academia to drive innovation. I&apos;m intrigued by
                how machine learning can break down language barriers in natural
                language applications. I&apos;m also excited by the impact of
                fintechs and the challenges of space communications.
              </p>
            </div>
            <div className="col">
              <p className="secondary-info">
                I&apos;m also very interested in computer science and
                linguistics research. I have experience working with computer
                networking and open-source software development in academia.
                During my summers, I was able to explore different positions of
                a company&apos;s tech pipeline, ranging from operations to
                product and development. As a new-grad, I&apos;m ready to focus
                towards technical development.
              </p>
            </div>
          </div>
          <div className="call-to-action titles row">
            <i>↓ Check out some of my projects at the bottom of this page ↓</i>
          </div>
        </div>
      </div>

      {sections.map((section) => (
        <div
          className="accordion accordion-flush"
          id={section.parentId}
          key={section.parentId}
        >
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed titles"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#${section.id}`}
                aria-expanded="false"
                aria-controls={section.id}
              >
                {section.label}
              </button>
            </h2>
            <div
              id={section.id}
              className="accordion-collapse collapse"
              data-bs-parent={`#${section.parentId}`}
            >
              <div className="accordion-body">
                <NestedAccordion
                  parentId={section.parentId}
                  items={section.items}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
