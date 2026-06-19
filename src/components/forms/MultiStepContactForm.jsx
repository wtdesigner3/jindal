"use client";

import React, { useState } from "react";

export default function MultiStepContactForm() {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const [formData1, setFormData1] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    contactNo: "",
    address: "",
  });

  const [formData2, setFormData2] = useState({
    standard: "",
    grade: "",
    thicknessMin: "",
    thicknessMax: "",
    widthMin: "",
    widthMax: "",
    qty: "",
    surfaceFinish: "",
    hardness: "",
    selectOne: "",
    uts: "",
    ys: "",
    elongation: "",
    endUse: "",
    specialRequirements: "",
  });

  const handleChange1 = (e) => {
    setFormData1({ ...formData1, [e.target.name]: e.target.value });
  };

  const handleChange2 = (e) => {
    setFormData2({ ...formData2, [e.target.name]: e.target.value });
  };

  const handleSubmitStep1 = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send first form
    setTimeout(() => {
      console.log("Form 1 Submitted (Sent to email):", formData1);
      setIsSubmitting(false);
      setStep(2);
      setSubmitMessage("Thank you! Your basic inquiry has been sent. Please fill out the technical details below if possible.");
    }, 1000);
  };

  const handleSubmitStep2 = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call to send second form
    setTimeout(() => {
      console.log("Form 2 Submitted:", formData2);
      setIsSubmitting(false);
      setStep(3);
    }, 1000);
  };

  return (
    <div className="contact-form-wrap two" style={{ position: "relative", minHeight: "400px" }}>
      
      {/* Step 1: Mandatory Contact Info */}
      <div 
        style={{ 
          display: step === 1 ? "block" : "none",
          animation: "fadeIn 0.4s ease"
        }}
      >
        <h4 className="mb-4">Contact Information</h4>
        <form onSubmit={handleSubmitStep1}>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="form-inner">
                <label>Company Name *</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData1.companyName}
                  onChange={handleChange1}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <label>Contact Person Name *</label>
                <input
                  type="text"
                  name="contactPerson"
                  value={formData1.contactPerson}
                  onChange={handleChange1}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <label>Email ID *</label>
                <input
                  type="email"
                  name="email"
                  value={formData1.email}
                  onChange={handleChange1}
                  required
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-inner">
                <label>Contact No. *</label>
                <input
                  type="tel"
                  name="contactNo"
                  value={formData1.contactNo}
                  onChange={handleChange1}
                  required
                />
              </div>
            </div>
            
            <div className="col-md-12">
              <div className="form-inner">
                <label>Address</label>
                <textarea
                  name="address"
                  rows="4"
                  value={formData1.address}
                  onChange={handleChange1}
                ></textarea>
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="primary-btn4 btn-hover black-bg mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Inquiry"}
          </button>
        </form>
      </div>

      {/* Step 2: Optional Technical Details */}
      <div 
        style={{ 
          display: step === 2 ? "block" : "none",
          animation: "fadeIn 0.5s ease" 
        }}
      >
        {submitMessage && (
          <div className="alert alert-success mb-4" role="alert">
            {submitMessage}
          </div>
        )}
        
        <form onSubmit={handleSubmitStep2}>
          <div className="row g-4">
            
            {/* Left Column - Material Requirements */}
            <div className="col-md-6">
              <h4 className="mb-4">Material Requirements</h4>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Standard</label>
                    <select name="standard" value={formData2.standard} onChange={handleChange2} className="form-control">
                      <option value="">Select Standard</option>
                      <option value="ASTM">ASTM</option>
                      <option value="JIS">JIS</option>
                      <option value="EN">EN</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Grade</label>
                    <select name="grade" value={formData2.grade} onChange={handleChange2} className="form-control">
                      <option value="">Select Grade</option>
                      <option value="304">304</option>
                      <option value="316">316</option>
                      <option value="430">430</option>
                    </select>
                  </div>
                </div>
                
                <div className="col-md-12 mt-4">
                  <h6 className="mb-3">Thickness (in MM)</h6>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="form-inner">
                        <label>Min.</label>
                        <input type="text" name="thicknessMin" value={formData2.thicknessMin} onChange={handleChange2} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-inner">
                        <label>Max.</label>
                        <input type="text" name="thicknessMax" value={formData2.thicknessMax} onChange={handleChange2} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-md-12 mt-4">
                  <h6 className="mb-3">Width (in MM)</h6>
                  <div className="row g-2">
                    <div className="col-6">
                      <div className="form-inner">
                        <label>Min.</label>
                        <input type="text" name="widthMin" value={formData2.widthMin} onChange={handleChange2} />
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="form-inner">
                        <label>Max.</label>
                        <input type="text" name="widthMax" value={formData2.widthMax} onChange={handleChange2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Mechanical Properties */}
            <div className="col-md-6">
              <h4 className="mb-4 mt-4 mt-md-0">Mechanical Properties</h4>
              
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Qty (in Kg)</label>
                    <input type="text" name="qty" value={formData2.qty} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Surface Finish</label>
                    <input type="text" name="surfaceFinish" value={formData2.surfaceFinish} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Hardness</label>
                    <input type="text" name="hardness" value={formData2.hardness} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Select One</label>
                    <select name="selectOne" value={formData2.selectOne} onChange={handleChange2} className="form-control">
                      <option value="">Select Option</option>
                      <option value="Option 1">Option 1</option>
                      <option value="Option 2">Option 2</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>UTS (in N/mm2)</label>
                    <input type="text" name="uts" value={formData2.uts} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>YS (in N/mm2)</label>
                    <input type="text" name="ys" value={formData2.ys} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>Elongation %</label>
                    <input type="text" name="elongation" value={formData2.elongation} onChange={handleChange2} />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-inner">
                    <label>End Use</label>
                    <input type="text" name="endUse" value={formData2.endUse} onChange={handleChange2} />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-12 mt-4">
              <div className="form-inner">
                <label>Other Special Requirements...</label>
                <textarea
                  name="specialRequirements"
                  rows="4"
                  value={formData2.specialRequirements}
                  onChange={handleChange2}
                ></textarea>
              </div>
            </div>
            
            <div className="col-md-12 mt-3">
              <div className="d-inline-flex align-items-center bg-light p-3 border rounded">
                <input type="checkbox" id="recaptcha" className="form-check-input me-3" style={{ width: "24px", height: "24px" }} />
                <label htmlFor="recaptcha" className="mb-0">I'm not a robot</label>
                <img src="https://www.gstatic.com/recaptcha/api2/logo_48.png" width="32" className="ms-4" alt="reCAPTCHA" />
              </div>
            </div>
          </div>
          
          <button
            type="submit"
            className="primary-btn4 btn-hover black-bg mt-4"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Submit Technical Details (Optional)"}
          </button>
        </form>
      </div>

      {/* Step 3: Fully Completed */}
      <div 
        style={{ 
          display: step === 3 ? "block" : "none",
          animation: "fadeIn 0.5s ease" 
        }}
        className="text-center py-5"
      >
        <div className="mb-4">
          <i className="bi bi-check-circle-fill text-success" style={{ fontSize: "4rem" }}></i>
        </div>
        <h3>All Details Submitted</h3>
        <p className="text-muted mt-3">
          Thank you for providing the complete technical specifications. Our team will review the details and get back to you with an accurate quote shortly.
        </p>
        <button 
          className="primary-btn4 btn-hover black-bg mt-4"
          onClick={() => {
            setStep(1);
            setFormData1({ companyName: "", contactPerson: "", email: "", contactNo: "", address: "" });
            setFormData2({ standard: "", grade: "", thicknessMin: "", thicknessMax: "", widthMin: "", widthMax: "", qty: "", surfaceFinish: "", hardness: "", selectOne: "", uts: "", ys: "", elongation: "", endUse: "", specialRequirements: "" });
            setSubmitMessage("");
          }}
        >
          Submit Another Inquiry
        </button>
      </div>
      
    </div>
  );
}

