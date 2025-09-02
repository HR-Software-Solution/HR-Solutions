import CandidatesButtons from "./CandidatesButtons";
import CandidatesSearch from "./CandidatesSearch";
import CandidatesList from "./CandidatesList";
import './style/CandidatesFrame.scss';

const CandidatesFrame = () => {
  return (
    <div className="candidates-frame">
      <h1 className="candidates-frame__title">ניהול מועמדים</h1>
      <CandidatesButtons
          //onAdd={() => alert("Add Candidate clicked")}      
          //onExport={() => alert("Export List clicked")}
        />   

      <div className="candidates-frame__search-container">     
        <CandidatesSearch />
      </div>

      <CandidatesList />
    </div>

  );
}

export default CandidatesFrame;