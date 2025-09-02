import './style/CandidatesButtons.scss';

const CandidatesButtons = ({ onAdd, onExport }) => {

    return (
        <div className='candidates-buttons'>
            <button type="button" onClick={onAdd}>
                + הוסף מועמד
            </button>

            <button type="button" onClick={onAdd}>
                ייבוא קו"ח + ניתוח AI
            </button>

            <button type="button" onClick={onAdd}>
                דוחות מתקדמים
            </button>

            <button type="button" onClick={onAdd}>
                ייבא קובץ
            </button>
        </div>
    );
};

export default CandidatesButtons;