import React, { useState } from 'react';
import './Calender.scss';

const Calender = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDayFiles, setSelectedDayFiles] = useState(null);
  const [showMonthPicker, setShowMonthPicker] = useState(false);
  const [showYearPicker, setShowYearPicker] = useState(false);

  const daysWithBadges = {
    '2024-06-01': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-07-10': { status: 'due', badges: 4, files: ['form2.pdf', 'form3.docx', 'form2.pdf', 'form3.docx'] },
    '2024-08-24': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-08-30': { status: 'pending', badges: 5, files: ['form5.xlsx', 'form2.pdf', 'form3.docx', 'form2.pdf', 'form3.docx'] },
    '2024-06-05': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-07-15': { status: 'due', badges: 2, files: ['form2.pdf', 'form3.docx'] },
    '2024-08-25': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-09-03': { status: 'done', badges: 1, files: ['form5.xlsx'] },
    '2024-03-01': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-01-10': { status: 'due', badges: 2, files: ['form2.pdf', 'form3.docx'] },
    '2024-04-24': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-09-20': { status: 'due', badges: 1, files: ['form5.xlsx'] },
    '2024-06-07': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-07-18': { status: 'due', badges: 2, files: ['form2.pdf', 'form3.docx'] },
    '2024-08-21': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-09-22': { status: 'pending', badges: 1, files: ['form5.xlsx'] },
    '2024-06-04': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-06-19': { status: 'due', badges: 2, files: ['form2.pdf', 'form3.docx'] },
    '2024-06-23': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-06-08': { status: 'pending', badges: 1, files: ['form5.xlsx'] },
    '2024-06-02': { status: 'done', badges: 1, files: ['form1.pdf'] },
    '2024-06-20': { status: 'due', badges: 6, files: ['form2.pdf', 'form3.docx', 'form2.pdf', 'form3.docx', 'form2.pdf', 'form3.docx'] },
    '2024-06-27': { status: 'done', badges: 1, files: ['form4.pptx'] },
    '2024-06-06': { status: 'pending', badges: 5, files: ['form5.xlsx', 'form2.pdf', 'form3.docx', 'form2.pdf', 'form3.docx'] },
  };

  const statusColors = {
    done: 'green',
    due: 'red',
    pending: 'blue',
  };

  const daysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
  
  const firstDayIndex = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

  const handleDayClick = (day) => {
    const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    if (daysWithBadges[formattedDate]) {
      setSelectedDayFiles(daysWithBadges[formattedDate].files);
    } else {
      setSelectedDayFiles(null);
    }
  };

  const renderCalendar = () => {
    const totalDays = daysInMonth(currentDate.getFullYear(), currentDate.getMonth());
    const calendarDays = [];
    
    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="calendar__day empty"></div>);
    }

    for (let day = 1; day <= totalDays; day++) {
      const formattedDate = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayData = daysWithBadges[formattedDate] || {};
      const dayColor = statusColors[dayData.status] || '';

      calendarDays.push(
        <div
          key={day}
          className={`calendar__day ${dayColor}`}
          onClick={() => handleDayClick(day)}
        >
          {day}
          {dayData.badges && <span className="badge">{dayData.badges}</span>}
        </div>
      );
    }

    return calendarDays;
  };

  const handleYearChange = (direction) => {
    const newDate = new Date(currentDate.setFullYear(currentDate.getFullYear() + direction));
    setCurrentDate(new Date(newDate));
  };

  const handleSelectYear = (year) => {
    const newDate = new Date(currentDate.setFullYear(year));
    setCurrentDate(new Date(newDate));
    setShowYearPicker(false);
  };

  const handleMonthChange = (direction) => {
    const newDate = new Date(currentDate.setMonth(currentDate.getMonth() + direction));
    setCurrentDate(new Date(newDate));
  };

  const handleSelectMonth = (month) => {
    const newDate = new Date(currentDate.setMonth(month));
    setCurrentDate(new Date(newDate));
    setShowMonthPicker(false);
  };

  const renderYearPicker = () => {
    const years = [];
    for (let year = currentDate.getFullYear() - 5; year <= currentDate.getFullYear() + 5; year++) {
      years.push(
        <div key={year} className="calendar__year-option" onClick={() => handleSelectYear(year)}>
          {year}
        </div>
      );
    }
    return <div className="calendar__year-picker">{years}</div>;
  };

  const renderMonthPicker = () => {
    const months = Array.from({ length: 12 }, (_, index) =>
      new Date(0, index).toLocaleString('default', { month: 'long' })
    );

    return (
      <div className="calendar__month-picker">
        {months.map((month, index) => (
          <div key={index} className="calendar__month-option" onClick={() => handleSelectMonth(index)}>
            {month}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="calendar-container">
      <div className="calendar-header">
        <button onClick={() => handleYearChange(-1)}>&lt;&lt;</button>
        <button onClick={() => handleMonthChange(-1)}>&lt;</button>

        <button onClick={() => setShowYearPicker(!showYearPicker)}>{currentDate.getFullYear()}</button>
        <button onClick={() => setShowMonthPicker(!showMonthPicker)}>
          {currentDate.toLocaleString('default', { month: 'long' })}
        </button>
        <button onClick={() => handleMonthChange(1)}>&gt;</button>

        <button onClick={() => handleYearChange(1)}>&gt;&gt;</button>

        
      </div>

      <div className="calendar-content">
        <div className="calendar">
        <div className="calendar__day-name">Sun</div>
          <div className="calendar__day-name">Mon</div>
          <div className="calendar__day-name">Tue</div>
          <div className="calendar__day-name">Wed</div>
          <div className="calendar__day-name">Thu</div>
          <div className="calendar__day-name">Fri</div>
          <div className="calendar__day-name">Sat</div>
          {renderCalendar()}
        </div>

        {selectedDayFiles && (
          <div className="file-list">
            <h4>Files of the day:</h4>
            <ul>
              {selectedDayFiles.map((file, index) => (
                <li key={index}>{file}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {showYearPicker && renderYearPicker()}
      {showMonthPicker && renderMonthPicker()}
    </div>
  );
};

export default Calender;

