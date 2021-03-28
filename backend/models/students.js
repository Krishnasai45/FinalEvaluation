const mongoose = require("mongoose");
const { Schema } = mongoose;

const StudentsSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    grade: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },

    test: [
      {
        report: [
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
        ],
      },
      {
        report: [
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
          {
            subject: { type: String },
            marks: { type: Number },
            date: { type: String },
          },
        ],
      },
    ],
  },
  { versionKey: false }
);

module.exports = mongoose.model("Students", StudentsSchema);
