import React from 'react';

const PrintView = ({ checkedItems, progress, checklistData }) => {
  return (
    <div className="print-view">
      <h1>卒論・修論の進捗報告</h1>
      <div className="print-progress">
        <h2>現在の進捗度: {progress}%</h2>
      </div>
      <div className="print-checklist">
        {Object.entries(checklistData).map(([section, subsections], sectionIndex) => (
          <div key={sectionIndex} className="print-section">
            <h3>{section}</h3>
            {Object.entries(subsections).map(([subsection, items], subsectionIndex) => (
              <div key={subsectionIndex} className="print-subsection">
                <h4>{subsection}</h4>
                <ul>
                  {items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <input
                        type="checkbox"
                        checked={checkedItems[item] || false}
                        readOnly
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintView;