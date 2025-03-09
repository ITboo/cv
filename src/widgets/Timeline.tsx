import './Timeline.css'; // Стили для таймлайна
const events = [
    { year: '', description: 'Belorussian-Russian University, Department of Economics' },
    { year: '2015-2017', description: 'Lohva, Accountant-economist' },
    { year: '2022', description: 'LasPergolas, Frontend Developer' },
    { year: '2022-2024', description: 'Rolling Scopes School' },
    { year: 'january-march, 2025', description: 'Itransition Group, Software Engineer' },
  ];
const Timeline = () => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
          <div className="timeline-content">
            <h2>{event.year}</h2>
            <p>{event.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;