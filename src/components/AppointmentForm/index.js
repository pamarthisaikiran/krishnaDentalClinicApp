import {useState} from 'react'
import emailjs from 'emailjs-com'
import './index.css'

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    number: '',
    appointmentDate: '',
    appointmentTime: '',
    message: '',
  })

  const handleSubmit = e => {
    e.preventDefault()

    emailjs
      .send(
        'service_m12hao8',
        'template_23nckya',
        formData,
        '9fbEVKopibwg_xike',
      )
      .then(
        result => {
          alert('Appointment booked successfully!')
        },
        error => {
          alert('Failed to send appointment data. Please try again.')
        },
      )
    setFormData({
      name: '',
      email: '',
      number: '',
      appointmentDate: '',
      appointmentTime: '',
      message: '',
    })
  }

  const handleChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div className="ap-con">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Book an Appointment</h1>
        <div className="name-con">
          <label htmlFor="name-id">Name</label>
          <div>
            <input
              placeholder="enter your name"
              id="name-id"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="name-con">
          <label htmlFor="number-id">Number</label>
          <div>
            <input
              id="number-id"
              placeholder="enter your number"
              type="text"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="name-con">
          <label htmlFor="email-id">Email</label>
          <div>
            <input
              id="email-id"
              placeholder="enter your email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="name-con">
          <label htmlFor="date-id">Date</label>
          <div>
            <input
              id="date-id"
              type="date"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="name-con">
          <label htmlFor="time-id">Time</label>
          <div>
            <input
              id="time-id"
              placeholder="time"
              type="time"
              name="appointmentTime"
              value={formData.appointmentTime}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="name-con">
          <label htmlFor="message-id">Message</label>
          <div>
            <textarea
              id="message-id"
              placeholder="message...."
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
        </div>
        <button className="button" type="submit">
          Book Appointment
        </button>
      </form>
    </div>
  )
}

export default AppointmentForm
