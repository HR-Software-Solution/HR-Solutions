const AISearch = () => {
  return (
    <div className="ai-search">
        <h1>חיפוש AI חכם</h1>
        <h2>תאר את הדרישות והמשרה בטקסט חופשי, ו-AI ימצא את המועמדים המתאימים ביותר!</h2>
        <input 
            type="text" 
            placeholder="לדוגמא: אני מחפש מפתח/ת React עם לפחות 3 שנות ניסיון, שמכיר/ה TypeScript ו- Node.js ויכול/ה לעבוד היברידית..." 
        />
        <button type="button">חפש מועמדים</button>
    </div>
  );
}

export default AISearch;



