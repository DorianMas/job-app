import "./App.css";
import Header from "./components/Header";
import Job from "./components/Job";

function App() {
  return (
    <div className="container">
      <Header title="The Job Board" />
      <div className="jobs">
        <Job
          className="job"
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI"
          country="Australie"
          city="Sydney"
        />
        <Job
          className="job"
          title="Agent de Sécurité - Pantin"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
        <Job
          className="job"
          title="Responsable d'Atelier (H/F)"
          contractType="CDD"
          country="France"
          city="Pantin"
        />
        <Job
          className="job"
          title="Chef de Projets"
          contractType="CDD"
          country="France"
          city="Paris"
        />
        <Job
          className="job"
          title="Développeur React.js"
          contractType="CDI"
          country="France"
          city="Paris"
        />
        <Job
          className="job"
          title="Sales Associate Stockholm"
          contractType="CDI"
          country="Suède"
          city="Stockholm"
        />
        <Job
          className="job"
          title="Vendeur/se - Crans Montana"
          contractType="CDI"
          country="Suisse"
          city="Crans-Montana"
        />
        <Job
          className="job"
          title="CRM \ Data Quality Analyst"
          contractType="CDI"
          country="USA"
          city="New-York"
        />
        <Job
          className="job"
          title="Infirmier (H/F)"
          contractType="CDI"
          country="France"
          city="Pantin"
        />
      </div>
    </div>
  );
}

export default App;
