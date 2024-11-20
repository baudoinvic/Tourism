
import './ProgressComponent.css';

const ProgressComponent = () => {
  const progressData = [
    { label: 'Accommodation', percentage: 80 },
    { label: 'Destination', percentage: 95 },
    { label: 'Meals', percentage: 67 },
    { label: 'Transport', percentage: 87 },
  ];

  return (
    <div className="progress-container">
      <div className="text-section">
        <h1>The headline of <strong>Alphabet</strong> subline.</h1>
        <p>
          Far far away, behind the word mountains, far from the countries Vokalia and
          Consonantia, there live the blind texts. Separated they live in Bookmarksgrove 
          right at the coast of the Semantics, a large language ocean. A small river named 
          Duden flows by their place and supplies it with the necessary regalia. It is a 
          paradisematic country blind text by the name of Lorem Ipsum decided to leave for 
          the far World of Grammar.
        </p>
      </div>
      <div className="progress-section">
        {progressData.map((item, index) => (
          <div key={index} className="progress-bar-container">
            <div className="progress-label">
              {item.label}
              <span className="percentage">{item.percentage}%</span>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${item.percentage}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressComponent;
