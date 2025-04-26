import mongoose from 'mongoose';

const PollutionReportSchema = new mongoose.Schema({
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], required: true }, // [longitude, latitude]
  },
  pollutionType: {
    type: String,
    required: true,
  },
  description: String,
  photoUrl: String,
  dateReported: {
    type: Date,
    default: Date.now,
  },
});

PollutionReportSchema.index({ location: "2dsphere" });

const PollutionReport = mongoose.model('PollutionReport', PollutionReportSchema);

export default PollutionReport;
