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
    photoUrl: {
        type: String,
        validate: {
          validator: function (v) {
            return /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i.test(v);
          },
          message: props => `${props.value} is not a valid URL!`,
        },
      },
  dateReported: {
    type: Date,
    default: Date.now,
  },
});

PollutionReportSchema.index({ location: "2dsphere" });

const PollutionReport = mongoose.model('PollutionReport', PollutionReportSchema);

export default PollutionReport;
