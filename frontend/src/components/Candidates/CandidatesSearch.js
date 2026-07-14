import { useState } from 'react';
import AISearch from './AISearch';
import FilterSearch from './FilterSearch';
import './style/CandidatesSearch.scss';

const CandidatesSearch = () => {

    const [searchType, setSearchType] = useState('filter'); // 'filter' or 'ai'   
    const handleSearchTypeChange = (type) => {
        setSearchType(type);
        console.log("Search type changed to:", type);
    }

    return (
        <div className='candidates-search'>
            <div className="search-types">
                {['filter', 'ai'].map((type) => (
                    <label key={type}>
                        <input
                            type="radio"
                            value={type}
                            checked={searchType === type}
                            onChange={() => handleSearchTypeChange(type)}   
                        />
                        {type === 'filter' ? 'פילטרים מתקדמים' : 'תיבת חיפוש חכמה'}
                    </label>
                ))}
            </div>

            <div className="search-divider" /> {/* קו הפרדה */}
            
            {/* תיבת חיפוש חכמה */}
            {searchType === 'ai' && (
                <AISearch />
            )}

            {/* פילטרים מתקדמים */}
            {searchType === 'filter' && (
                <FilterSearch />
            )}
        </div>
  );
}

export default CandidatesSearch;