const mongoose = require('mongoose')

const Schema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, 'First name is required']
  },
  lastname: {
    type: String,
    required: [true, 'Last name is required']
  },
  age: {
    type: Number,
    required: [true, 'Age name is required'],
    min: [18, 'Age must not inferior to 18 years']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [8, 'Password must be more than 6 characters']
  },
  email: {
    type: String,
    lowercase: true,
    trim: true,
    match: [/.+@.+\..+/],
    unique: [true, 'Email already exist'],
    required: [true, 'Email is required'],
    index: true
  }
}, {
  collection: 'users',
  minimize: false,
  versionKey: false
}).set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id

    delete ret._id
  }
})

module.exports = Schema