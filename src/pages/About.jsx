import React from "react";
import "./About.css";
import poetImage from "../assets/images/bhakti.jpg";
// Import award images
import award1Image from "../assets/images/school-poetry-award.jpg";
import award2Image from "../assets/images/district-literature-meet.jpg";
import award3Image from "../assets/images/balkavi-award.jpg";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="poet-profile">
          <div className="poet-image-container">
            <img src={poetImage} alt="रेवती संदिप चव्हाण" className="poet-image" />
          </div>
          
          <div className="poet-info">
            <h1 className="poet-name">रेवती संदिप चव्हाण</h1>
            <div className="poet-title">कवयित्री | तरुण लेखिका</div>
          </div>
        </div>

        <div className="poet-bio">
          <p>
            मी रेवती संदिप चव्हाण, इयत्ता सहावीत शिकणारी एक उत्साही कवयित्री. लहानपणापासूनच कविता, 
            गोष्टी आणि ललित लेखनाची आवड मनात रुजली आहे. माझ्या भावनांना शब्दरूप देण्याचे एक 
            माध्यम म्हणून मी कविता लेखनाकडे वळले आहे.
          </p>
          
          <p>
            माझ्या कवितांमध्ये सहजता आणि संवेदनशीलता प्रतिबिंबित होते. निसर्गाचे सौंदर्य, मानवी 
            संबंधांची गुंतागुंत आणि जीवनातील दैनंदिन गोष्टींमधील अदृश्य सौंदर्य शोधून त्यांना 
            शब्दांद्वारे जिवंत करण्याचा प्रयत्न मी करते. माझ्या लेखनातून माझे विचार आणि भावना
            अशा रीतीने व्यक्त होतात की त्या वाचकांच्या हृदयाला भिडतात.
          </p>
          
          <blockquote className="poet-quote">
            "शब्दांच्या जादूमध्ये, मी माझा आत्मा शोधते."
          </blockquote>
          
          <p>
            अनेक प्रसिद्ध मराठी कवींच्या लेखनातून प्रेरणा घेत, मी माझी स्वतःची अभिव्यक्ती शैली विकसित 
            करण्याचा प्रयत्न करत आहे. माझ्या शाळेत आणि समुदायात, माझ्या कवितांमुळे मला एक वेगळी 
            ओळख मिळाली आहे. माझे स्वप्न आहे की माझ्या कविता केवळ आजच्या वाचकांना नव्हे तर
            पुढील पिढीलाही प्रेरणा देतील आणि मराठी साहित्यात एक अनमोल ठेवा ठरतील.
          </p>
          
          <div className="achievements">
            <h2>पुरस्कार आणि उपलब्धी</h2>
            
            <div className="awards-grid">
              <div className="award-item">
                <div className="award-image-container">
                  <img src={award1Image} alt="जागतिक विश्वविक्रम" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>जागतिक विश्वविक्रम</h3>
                  <p>ज्ञानवर्धिनी विद्या प्रसारक मंडळ आयोजित,बालकवी यांच्या स्वरचित कवितांचे अहोरात्र २५ तास सादरीकरण करून वंडर बुक ऑफ वर्ल्ड रेकॉर्ड,लंडन या मध्ये नोंद झाली..</p>
                </div>
              </div>

              <div className="award-item">
                <div className="award-image-container">
                  <img src={award2Image} alt="कविता वेबसाईटचे प्रकाशन" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>कविता वेबसाईटचे प्रकाशन</h3>
                  <p>स्वरचित कवितांच्या वेबसाईटचे प्रकाशन (उद्घाटन) सिने अभिनेत्री ऋग्वेदी प्रधान यांच्या शुभहस्ते</p>
                </div>
              </div>

              <div className="award-item">
                <div className="award-image-container">
                  <img src={award3Image} alt="SHARDA'S STAR AWARD" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>SHARDA'S STAR AWARD</h3>
                  <p>शारदा इंग्लिश मिडियम स्कूल २०२४-२५ चा SHARDA'S STAR AWARD (2025)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;