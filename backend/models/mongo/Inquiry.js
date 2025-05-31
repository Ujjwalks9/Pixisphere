import mongoose from 'mongoose';

const InquirySchema = new mongoose.Schema({
  clientId: String,
  category: String,
  date: Date,
  budget: Number,
  city: String,
  referenceImageUrl: String,
  status: { type: String, enum: ['new', 'responded', 'booked', 'closed'], default: 'new' },
  assignedPartners: [String]
}, { timestamps: true });

const Inquiry = mongoose.model('Inquiry', InquirySchema);
export default Inquiry;
