import React, { useState } from 'react';
import Navbar from './components/Navbar';
import './App.css';

interface AssignmentData {
  studentName: string;
  studentEmail: string;
  studentId: string;
  assignmentTitle: string;
  subject: string;
  description: string;
  dueDate: string;
  priority: string;
  additionalNotes: string;
}

interface StatusState {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

const App: React.FC = () => {
  const [formData, setFormData] = useState<AssignmentData>({
    studentName: '',
    studentEmail: '',
    studentId: '',
    assignmentTitle: '',
    subject: '',
    description: '',
    dueDate: '',
    priority: 'medium',
    additionalNotes: ''
  });

  const [status, setStatus] = useState<StatusState>({
    type: 'idle',
    message: ''
  });

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Submit Assignment', href: '#submit' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.studentName || !formData.studentEmail || !formData.assignmentTitle || !formData.description) {
      setStatus({
        type: 'error',
        message: 'Please fill in all required fields.'
      });
      return;
    }

    setStatus({
      type: 'loading',
      message: 'Submitting your assignment request...'
    });

    // Simulate API call
    try {
      // In a real application, you would send this data to your backend
      await new Promise(resolve => setTimeout(resolve, 2000));

      console.log('Assignment data:', formData);

      setStatus({
        type: 'success',
        message: 'Assignment submitted successfully! We will review your request and get back to you soon.'
      });

      // Reset form
      setFormData({
        studentName: '',
        studentEmail: '',
        studentId: '',
        assignmentTitle: '',
        subject: '',
        description: '',
        dueDate: '',
        priority: 'medium',
        additionalNotes: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to submit assignment. Please try again later.'
      });
    }
  };

  const handleReset = () => {
    setFormData({
      studentName: '',
      studentEmail: '',
      studentId: '',
      assignmentTitle: '',
      subject: '',
      description: '',
      dueDate: '',
      priority: 'medium',
      additionalNotes: ''
    });
    setStatus({ type: 'idle', message: '' });
  };

  return (
    <div className="App">
      <Navbar logo="Student Helper" navItems={navItems} />
      <div className="main-content">
        {/* Home Section */}
        <section id="home" className="section">
          <div className="container">
            <h1>Welcome to Student Helper</h1>
            <p>Your comprehensive academic assistance platform. Submit assignments, get help with coursework, and achieve academic success with our expert support system.</p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="section">
          <div className="container">
            <h2>About Student Helper</h2>
            <p>Student Helper is designed to support students in their academic journey by providing a streamlined platform to submit assignments and receive professional assistance.</p>

            <div className="about-features">
              <div className="feature-item">
                <div className="feature-icon">📚</div>
                <h3>Academic Support</h3>
                <p>Get help with assignments across various subjects and academic levels.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <h3>Quick Turnaround</h3>
                <p>Fast response times to meet your assignment deadlines.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🎯</div>
                <h3>Quality Assurance</h3>
                <p>Professional tutors ensure high-quality academic assistance.</p>
              </div>
              <div className="feature-item">
                <div className="feature-icon">🔒</div>
                <h3>Secure Platform</h3>
                <p>Your data and assignments are handled with complete confidentiality.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="section">
          <div className="container">
            <h2>Our Services</h2>
            <p>Comprehensive academic assistance tailored to your needs.</p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">✍️</div>
                <h3>Essay Writing</h3>
                <p>Professional help with essays, research papers, and written assignments across all subjects.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🧮</div>
                <h3>Math & Science</h3>
                <p>Expert assistance with mathematics, physics, chemistry, and other STEM subjects.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💼</div>
                <h3>Business Studies</h3>
                <p>Support with business cases, marketing projects, and economic analysis.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🔬</div>
                <h3>Research Support</h3>
                <p>Guidance with research methodology, data analysis, and academic citations.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">🎨</div>
                <h3>Creative Projects</h3>
                <p>Assistance with creative writing, design projects, and multimedia assignments.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📊</div>
                <h3>Data Analysis</h3>
                <p>Help with statistical analysis, data interpretation, and report writing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Submit Assignment Section */}
        <section id="submit" className="section">
          <div className="container">
            <h2>Submit Your Assignment</h2>
            <p>Fill out the form below to submit your assignment request. Our team will review it and get back to you promptly.</p>

            {status.type !== 'idle' && (
              <div className={`status-message status-${status.type}`}>
                {status.message}
              </div>
            )}

            <form className="assignment-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <h3>Student Information</h3>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="studentName">Full Name *</label>
                  <input
                    type="text"
                    id="studentName"
                    name="studentName"
                    className="form-control"
                    value={formData.studentName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="studentEmail">Email Address *</label>
                  <input
                    type="email"
                    id="studentEmail"
                    name="studentEmail"
                    className="form-control"
                    value={formData.studentEmail}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="studentId">Student ID (Optional)</label>
                <input
                  type="text"
                  id="studentId"
                  name="studentId"
                  className="form-control"
                  value={formData.studentId}
                  onChange={handleInputChange}
                />
              </div>

              <div className="form-group">
                <h3>Assignment Details</h3>
              </div>

              <div className="form-group">
                <label htmlFor="assignmentTitle">Assignment Title *</label>
                <input
                  type="text"
                  id="assignmentTitle"
                  name="assignmentTitle"
                  className="form-control"
                  value={formData.assignmentTitle}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="e.g., Mathematics, English, History"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dueDate">Due Date</label>
                  <input
                    type="date"
                    id="dueDate"
                    name="dueDate"
                    className="form-control"
                    value={formData.dueDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="priority">Priority Level</label>
                <select
                  id="priority"
                  name="priority"
                  className="form-control"
                  value={formData.priority}
                  onChange={handleInputChange}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                  <option value="urgent">Urgent</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="description">Assignment Description *</label>
                <textarea
                  id="description"
                  name="description"
                  className="form-control textarea"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Please provide detailed information about your assignment, including requirements, format, length, and any specific instructions..."
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  className="form-control textarea"
                  value={formData.additionalNotes}
                  onChange={handleInputChange}
                  placeholder="Any additional information or special requirements..."
                />
              </div>

              <div className="form-group">
                <button type="button" className="btn btn-secondary" onClick={handleReset}>
                  Reset Form
                </button>
                <button type="submit" className="btn" disabled={status.type === 'loading'}>
                  {status.type === 'loading' ? 'Submitting...' : 'Submit Assignment'}
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section">
          <div className="container">
            <h2>Contact Us</h2>
            <p>Have questions or need assistance? We're here to help you succeed in your academic journey.</p>

            <div className="services-grid">
              <div className="service-card">
                <div className="service-icon">📧</div>
                <h3>Email Support</h3>
                <p>Send us an email at support@studenthelper.com for any inquiries or assistance.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Chat with our support team for immediate assistance with your academic needs.</p>
              </div>
              <div className="service-card">
                <div className="service-icon">📞</div>
                <h3>Phone Support</h3>
                <p>Call us at 1-800-STUDENT (1-800-788-3368) for direct support.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
