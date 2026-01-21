const AppointmentForm = ({
  date,
  time,
  reason,
  setDate,
  setTime,
  setReason,
  handleSubmit,
}) => {
  return (
    <>
      <div className="mb-3">
        <label className="form-label">Date</label>
        <input
          type="date"
          className="form-control"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Time</label>
        <input
          type="time"
          className="form-control"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Reason</label>
        <textarea
          className="form-control"
          rows="3"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleSubmit}>
        Book Appointment
      </button>
    </>
  );
};
export default AppointmentForm;