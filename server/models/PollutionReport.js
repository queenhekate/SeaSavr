import mongoose from 'mongoose';

const PollutionReportSchema = new mongoose.Schema({
    location: {
        name: String,
        lat: Number,
        lng: Number,
      },
  pollutionType: {
    type: String,
    required: true,
  },
  description: String,
  severity: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    default: 'Low',
  },
    reporterName: String,
  photoUrl: String,
  dateReported: {
    type: Date,
    default: Date.now,
  },
});

PollutionReportSchema.index({ location: "2dsphere" });

const PollutionReport = mongoose.model('PollutionReport', PollutionReportSchema);

export default PollutionReport;
