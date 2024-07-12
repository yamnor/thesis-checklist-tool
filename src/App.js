import React, { useState, useEffect } from 'react';
import './App.css';

const checklistData = {
  "1. 内容について 📝": {
    "1.1 題目 🏷️": [
      "研究のテーマを適切かつ魅力的に表現していますか？",
      "研究の目的、範囲、方向性、手法が具体的に示されていますか？",
      "専門家の関心を惹くような独創性が題目に反映されていますか？"
    ],
    "1.2 目次 📑": [
      "論文の全体像が目次だけで把握できるよう、章・節のタイトルや構成が適切ですか？",
      "論理的な流れが目次構成から読み取れますか？"
    ],
    "1.3 背景 🌄": [
      "研究の必要性が社会的・学術的文脈から明確に説明されていますか？",
      "関連する先行研究を網羅的に紹介し、未解決の問題を明確に指摘していますか？",
      "研究分野の最新の国際的動向が反映されていますか？"
    ],
    "1.4 目的 🎯": [
      "研究で解決すべき課題や達成したいことが具体的かつ明確に説明されていますか？",
      "研究の独自性や革新性が強調されていますか？",
      "研究目的と背景との関連性が明確に示されていますか？"
    ],
    "1.5 方法 🔬": [
      "研究手順が再現可能なレベルで詳細に説明されていますか？",
      "データ収集、処理、分析の手続きが透明で一貫していますか？",
      "採用した研究方法の妥当性や限界について言及していますか？",
      "統計分析や実験デザインの適切性が説明されていますか？",
      "研究倫理に関する配慮や承認プロセスについて言及していますか？"
    ],
    "1.6 結果 📊": [
      "研究結果が図表を適切に用いて分かりやすく説明されていますか？",
      "提示するデータが論旨を効果的に支持するよう適切に選択されていますか？",
      "統計的有意性や効果量など、結果の重要性を示す指標が適切に報告されていますか？",
      "予期せぬ結果や例外的なデータについても公正に報告されていますか？"
    ],
    "1.7 考察 🤔": [
      "結果に基づいて、研究の結論が論理的に導かれていますか？",
      "結果の解釈が多角的な視点から行われていますか？",
      "研究成果の実用性や応用可能性が具体的に考察されていますか？",
      "先行研究との比較や対照が適切に行われていますか？",
      "研究の限界と将来の研究方向性について詳細に考察されていますか？"
    ],
    "1.8 結論 🏁": [
      "研究目的と結論の関連性が明確に説明されていますか？",
      "研究成果の学術的・社会的意義、波及効果が十分にアピールされていますか？",
      "研究の独自性や革新性が改めて強調されていますか？"
    ],
    "1.9 総括 📌": [
      "研究の全体像（目的〜結論）が簡潔かつ適切にまとめられていますか？",
      "今後の課題や将来の研究展望が具体的に述べられていますか？",
      "研究の学術的貢献度が明確に示されていますか？"
    ]
  },
  "2. 論理構成と文章について 📐": {
    "2.1 論理構成 🧠": [
      "論文全体を通じて論理の一貫性が保たれていますか？",
      "各章・節の繋がりが自然で、論旨の流れがスムーズですか？",
      "主張とそれを支持する証拠の関係が明確ですか？",
      "反論の可能性を考慮し、それに対する応答が含まれていますか？"
    ],
    "2.2 文章 ✍️": [
      "誤字・脱字がなく、読みやすい文章になっていますか？",
      "物理量の単位が適切に表記されていますか？",
      "専門用語が適切に使用され、学術的な文体で統一されていますか？",
      "パラグラフ構成が適切で、各パラグラフに明確なトピックセンテンスがありますか？",
      "文章の長さやリズムに変化をつけ、読みやすさに配慮していますか？"
    ]
  },
  "3. 図表と視覚資料 📈": {
    "3.1 図表の品質 🖼️": [
      "図表や文字の配置・配色がバリアフリーに配慮されていますか？",
      "図表が本文を補完し、効果的に情報を伝えていますか？",
      "全ての図表に適切なキャプションと説明が付されていますか？",
      "引用した図表の出典が適切に明記されていますか？",
      "オリジナルの図表が研究の独自性を示すために効果的に使用されていますか？"
    ]
  },
  "4. 引用と参考文献 📚": {
    "4.1 引用と参考文献の適切性 🔍": [
      "必要十分な参考文献が挙げられ、本文中で適切に引用されていますか？",
      "引用の形式（直接引用、間接引用）が適切に使い分けられていますか？",
      "参考文献リストが指定された形式で正確に作成されていますか？",
      "最新の研究動向を反映した文献が含まれていますか？",
      "自己剽窃を避け、過去の自身の研究を適切に引用していますか？"
    ]
  },
  "5. 研究倫理とデータの信頼性 🔒": {
    "5.1 研究倫理とデータ管理 📊": [
      "研究倫理に関するガイドラインを遵守していますか？",
      "データの収集、保管、処理が適切に行われ、その過程が透明に記述されていますか？",
      "利益相反の可能性がある場合、適切に開示されていますか？",
      "共同研究者や協力者の貢献が適切に認識され、謝辞に記載されていますか？"
    ]
  },
  "6. プレゼンテーションと質疑応答の準備 🎤": {
    "6.1 発表準備 💼": [
      "発表用スライドが論文の要点を簡潔かつ効果的に伝えるものになっていますか？",
      "発表時間内に収まるよう、内容が適切に取捨選択されていますか？",
      "想定される質問に対する回答を準備していますか？",
      "研究の限界や今後の課題について、建設的な議論ができる準備がありますか？"
    ]
  },
  "7. 最終チェック ✅": {
    "7.1 最終確認 🔎": [
      "指導教員やピアレビューからのフィードバックを適切に反映させましたか？",
      "論文全体を通して一貫したフォーマットや引用スタイルが使用されていますか？",
      "提出前に第三者に通読してもらい、客観的な視点からのフィードバックを得ましたか？",
      "提出期限や提出方法など、すべての要件を満たしていることを確認しましたか？"
    ]
  }
};

const getCertificateComment = (progress) => {
  if (progress === 100) return "おめでとうございます！論文の準備が完璧に整いました。素晴らしい成果を期待しています。";
  if (progress >= 80) return "素晴らしい進捗です。あと少しで完成です。細部を磨き上げて、さらなる高みを目指しましょう。";
  if (progress >= 60) return "良い進捗を遂げています。残りの項目にも丁寧に取り組み、質の高い論文を目指しましょう。";
  if (progress >= 40) return "順調に進んでいます。まだカバーできていない項目にも注目して、バランスの取れた論文作成を心がけましょう。";
  if (progress >= 20) return "論文作成の第一歩を踏み出しました。一つずつ着実に進めていけば、必ず良い成果につながります。頑張りましょう。";
  return "論文作成の準備を始めましたね。一つ一つのステップを大切に、着実に進めていきましょう。";
};

const ProgressBar = ({ progress }) => (
  <div className="progress-bar-container">
    <div
      className="progress-bar"
      style={{ width: `${progress}%` }}
    />
  </div>
);

const ProgressCharacter = ({ progress }) => {
  let character;
  if (progress < 20) {
    character = (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFD700"/>
        <circle cx="35" cy="40" r="5" fill="#000"/>
        <circle cx="65" cy="40" r="5" fill="#000"/>
        <path d="M35 70 Q50 60 65 70" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
    );
  } else if (progress < 40) {
    character = (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFD700"/>
        <circle cx="35" cy="40" r="5" fill="#000"/>
        <circle cx="65" cy="40" r="5" fill="#000"/>
        <path d="M35 65 Q50 70 65 65" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
    );
  } else if (progress < 60) {
    character = (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFD700"/>
        <circle cx="35" cy="40" r="5" fill="#000"/>
        <circle cx="65" cy="40" r="5" fill="#000"/>
        <path d="M35 65 Q50 65 65 65" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
    );
  } else if (progress < 80) {
    character = (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFD700"/>
        <circle cx="35" cy="40" r="5" fill="#000"/>
        <circle cx="65" cy="40" r="5" fill="#000"/>
        <path d="M35 60 Q50 70 65 60" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
    );
  } else {
    character = (
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="50" cy="50" r="45" fill="#FFD700"/>
        <path d="M30 40 Q35 35 40 40" stroke="#000" strokeWidth="3" fill="none"/>
        <path d="M60 40 Q65 35 70 40" stroke="#000" strokeWidth="3" fill="none"/>
        <path d="M30 60 Q50 80 70 60" stroke="#000" strokeWidth="3" fill="none"/>
      </svg>
    );
  }

  return <div className="progress-character">{character}</div>;
};

const Certificate = ({ progress }) => (
  <div className="certificate">
    <div className="certificate-content">
      <ProgressCharacter progress={progress} />
      <div className="certificate-text">
        <p className="progress-percentage">{progress}% 完了</p>
        <p className="certificate-comment">{getCertificateComment(progress)}</p>
      </div>
    </div>
  </div>
);

const ChecklistItem = ({ item, isChecked, onToggle }) => (
  <label className="checklist-item">
    <input
      type="checkbox"
      checked={isChecked}
      onChange={onToggle}
    />
    <span>{item}</span>
  </label>
);

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <button
        className="accordion-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={`accordion-icon ${isOpen ? 'open' : ''}`}>▼</span>
      </button>
      {isOpen && <div className="accordion-content">{children}</div>}
    </div>
  );
};

const ThesisChecklistTool = () => {
  const [checkedItems, setCheckedItems] = useState({});
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const totalItems = Object.values(checklistData).reduce(
      (acc, section) => acc + Object.values(section).reduce((sum, items) => sum + items.length, 0),
      0
    );
    const checkedCount = Object.values(checkedItems).filter(Boolean).length;
    setProgress(Math.round((checkedCount / totalItems) * 100));
  }, [checkedItems]);

  const handleToggle = (item) => {
    setCheckedItems(prev => ({ ...prev, [item]: !prev[item] }));
  };

  return (
    <div className="thesis-checklist-tool noto-sans-jp">
      <h1>卒論・修論チェッカー 📝</h1>

      {Object.entries(checklistData).map(([section, subsections], index) => (
        <Accordion key={index} title={section}>
          {Object.entries(subsections).map(([subsection, items], subIndex) => (
            <div key={subIndex} className="subsection">
              <h3>{subsection}</h3>
              {items.map((item, itemIndex) => (
                <ChecklistItem
                  key={itemIndex}
                  item={item}
                  isChecked={checkedItems[item] || false}
                  onToggle={() => handleToggle(item)}
                />
              ))}
            </div>
          ))}
        </Accordion>
      ))}

      <div className="progress-section">
        <h2>進捗状況</h2>
        <ProgressBar progress={progress} />
        <p className="progress-text">
          完成度: {progress}% {progress < 30 ? '🏁' : progress < 70 ? '🚀' : '🎉'}
        </p>
      </div>

      <Certificate progress={progress} />
    </div>
  );
};

export default ThesisChecklistTool;