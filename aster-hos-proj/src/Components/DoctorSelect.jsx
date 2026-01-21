const DoctorSelect = ({ doctors, selectedDoctor, setSelectedDoctor }) => {
  return (
    <div className="mb-3">
      <label className="form-label">Select Doctor</label>
      <select
        className="form-select"
        value={selectedDoctor}
        onChange={(e) => setSelectedDoctor(e.target.value)}
      >
        <option value="">-- Choose Doctor --</option>
        {doctors.map((doctor) => (
          <option key={doctor.id} value={doctor.id}>
            {doctor.name}
          </option>
        ))}
      </select>
    </div>
  );
};
export default DoctorSelect;