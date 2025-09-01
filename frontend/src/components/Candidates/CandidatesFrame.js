import CandidatesButtons from "./CandidatesButtons";
import CandidatesSearch from "./CandidatesSearch";

const CandidatesFrame = () => {
  return (
    <div>
      <h1>ניהול מועמדים</h1>
      <CandidatesButtons
        //onAdd={() => alert("Add Candidate clicked")}      
        //onExport={() => alert("Export List clicked")}
      />      
      <CandidatesSearch />
    </div>

  );
}

export default CandidatesFrame;