import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Education</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech – Computer Science and Engineering</h4>
                <h5>Gokaraju Rangaraju Institute of Engineering and Technology (GRIET)</h5>
              </div>
              <h3>2020 - 2024</h3>
            </div>
            <p>
              CGPA: 9.11
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intermediate</h4>
                <h5>Narayana Junior College</h5>
              </div>
              <h3>2018 - 2020</h3>
            </div>
            <p>
              Percentage: 94.3%
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary School Education</h4>
                <h5>Sahiti Vidya Niketan High School</h5>
              </div>
              <h3>2016 - 2018</h3>
            </div>
            <p>
              CGPA: 9.7
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
