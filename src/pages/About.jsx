import React, { useState } from "react";
import "./About.css";
import poetImage from "../assets/images/bhakti.jpg";
import award1Image from "../assets/images/school-poetry-award.jpg";
import award2Image from "../assets/images/district-literature-meet.jpg";
import award3Image from "../assets/images/balkavi-award.jpg";
import akashvaniImage from "../assets/images/akashvaniImage.jpeg";
import kalakunjImage from "../assets/images/kalakunjImage.jpeg";
import indiaBookImage from "../assets/images/indiaBookImage.jpeg";
import indiaBookBoxImage from "../assets/images/indiaBookBoxImage.jpeg";
import vishwasPatilImage from "../assets/images/vishwasPatilImage.jpeg";
import dalviSirImage from "../assets/images/dalviSirImage.jpeg";
import makarandPatilImage from "../assets/images/makarandPatilImage.jpeg";
import newsLetter1Image from "../assets/images/newsLetter1Image.jpeg";
import newsLetter2Image from "../assets/images/newsLetter2Image.jpeg";
import newsLetter3Image from "../assets/images/newsLetter3Image.jpeg";
import newsLetter4Image from "../assets/images/newsLetter4Image.jpeg";
import newsLetter5Image from "../assets/images/newsLetter5Image.jpeg";
import newsLetter6Image from "../assets/images/newsLetter6Image.jpeg";
import newsLetter7Image from "../assets/images/newsLetter7Image.jpeg";
import newsLetter8Image from "../assets/images/newsLetter8Image.jpeg";
import newsLetter9Image from "../assets/images/newsLetter9Image.jpeg";
import newsLetter10Image from "../assets/images/newsLetter10Image.jpeg";
import newsLetter11Image from "../assets/images/newsLetter11Image.jpeg";
import newsLetter12Image from "../assets/images/newsLetter12Image.jpeg";

/* ── Photo Gallery Data – add more photos here easily ──────── */
const galleryPhotos = [
  {
    id: 1,
    src: newsLetter1Image,
    alt: "Newspaper Article",
    caption: "",
    span: "wide"
  },

  {
    id: 2,
    src: newsLetter2Image,
    alt: "Newspaper Coverage",
    caption: "",
    span: "wide"
  },

  {
    id: 3,
    src: newsLetter3Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 4,
    src: newsLetter4Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 5,
    src: newsLetter5Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 6,
    src: newsLetter6Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 7,
    src: newsLetter6Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 8,
    src: newsLetter8Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 9,
    src: newsLetter9Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 10,
    src: newsLetter10Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 11,
    src: newsLetter11Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
  {
    id: 12,
    src: newsLetter12Image,
    alt: "Media Coverage",
    caption: "",
    span: "wide"
  },
];



const About = () => {
  const [lightbox, setLightbox] = useState(null); // { src, alt, caption }

  const openLightbox = (photo) => setLightbox(photo);
  const closeLightbox = () => setLightbox(null);

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
                  <img src={indiaBookBoxImage} alt="India Book of Records Certificate and Gift Box" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>India Book of Records विश्वविक्रम</h3>
                  <p>
                    इयत्ता ७ वी मध्ये शिक्षण घेत असताना मराठी साहित्य क्षेत्रात सर्वाधिक कविता लेखन करून
                    India Book of Records मध्ये विश्वविक्रम नोंदवला. हा माझ्या आयुष्यातील अत्यंत अभिमानाचा क्षण आहे.
                  </p>
                </div>
              </div>
              <div className="award-item">
                <div className="award-image-container">
                  <img src={indiaBookImage} alt="INDIA BOOK OF RECORDS AWARD" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>शिक्षण मंत्र्यांकडून कौतुक</h3>
                  <p>
                    कमी वयातील कवयित्री म्हणून India Book of Records मध्ये नोंद झाल्याबद्दल
                    मा. ना. दादाजी भुसे साहेब, शिक्षण मंत्री, महाराष्ट्र राज्य यांच्या हस्ते
                    सन्मानित होण्याचा मान मला मिळाला. हा क्षण माझ्यासाठी खूप अभिमानाचा
                    आणि प्रेरणादायी आहे.
                  </p>
                </div>
              </div>
              <div className="award-item">
                <div className="award-image-container">
                  <img src={kalakunjImage} alt="KALAKUNJ BOOK PUBLICATION" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>अखिल भारतीय मराठी साहित्य संमेलनातील पुस्तक प्रकाशन</h3>
                  <p>
                    सातारा येथे भरलेल्या ९९ व्या अखिल भारतीय मराठी साहित्य संमेलनात माझ्या
                    “कलाकुंज” या कवितासंग्रहाचे ना. शिवेंद्रसिंह राजे भोसले यांच्या शुभहस्ते
                    प्रकाशन झाले. हा माझ्या काव्यप्रवासातील एक महत्त्वाचा टप्पा ठरला.
                  </p>
                </div>
              </div>

              <div className="award-item">
                <div className="award-image-container">
                  <img src={akashvaniImage} alt="AKASHVANI INTERVIEW" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>आकाशवाणीमधील मुलाखत</h3>
                  <p>माझी मुलाखत आकाशवाणी, अहिल्यानगर केंद्रावरील “बालमेळा” या कार्यक्रमात प्रसारित झाली. या कार्यक्रमात मी माझ्या स्वरचित कविता सादर केल्या. आकाशवाणीवरील हा माझ्यासाठी अविस्मरणीय अनुभव होता.</p>
                </div>
              </div>
              <div className="award-item">
                <div className="award-image-container">
                  <img src={award1Image} alt="जागतिक विश्वविक्रम" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>जागतिक विश्वविक्रम</h3>
                  <p>ज्ञानवर्धिनी विद्या प्रसारक मंडळ आयोजित,बालकवी यांच्या स्वरचित कवितांचे अहोरात्र २५ तास सादरीकरण करून वंडर बुक ऑफ वर्ल्ड रेकॉर्ड,लंडन या मध्ये नोंद झाली..</p>
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
                  <img src={makarandPatilImage} alt="Book Presented to Makarand Patil Sir" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>मा. मकरंद आबा पाटील यांना “कलाकुंज” भेट</h3>
                  <p>
                    मदत व पुनर्वसन मंत्री, महाराष्ट्र राज्य मा. मकरंद आबा पाटील
                    सरांना माझा “कलाकुंज” हा कवितासंग्रह भेट देण्याचा मान मिळाला.
                    हा माझ्यासाठी अत्यंत आनंदाचा व अभिमानाचा क्षण होता.
                  </p>
                </div>
              </div>
              <div className="award-item">
                <div className="award-image-container">
                  <img src={dalviSirImage} alt="Meeting with Chandrakant Dalvi Sir" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>"कलाकुंज" प्रास्तविका संदर्भात भेट</h3>
                  <p>
                    रयत शिक्षण संस्थेचे चेअरमन व रिटायर्ड आय.ए.एस. ऑफिसर मा. चंद्रकांतजी दळवी
                    साहेब यांची "कलाकुंज" या कवितासंग्रहाच्या प्रास्तविकेसंदर्भात भेट घेण्याची
                    संधी मिळाली. हा माझ्यासाठी अत्यंत मार्गदर्शक व प्रेरणादायी अनुभव होता.
                  </p>
                </div>
              </div>
              <div className="award-item">
                <div className="award-image-container">
                  <img src={vishwasPatilImage} alt="With Vishwas Patil" className="award-image" />
                </div>
                <div className="award-details">
                  <h3>साहित्यिक विश्वासजी पाटील साहेब यांच्यासोबत</h3>
                  <p>
                    प्रसिद्ध साहित्यिक व कवी मा. श्री विश्वासजी पाटील साहेब यांची भेट घेण्याचा
                    आणि त्यांच्यासोबत साहित्यसंवाद साधण्याचा अविस्मरणीय योग आला.
                    हा माझ्यासाठी प्रेरणादायी क्षण होता.
                  </p>
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

          {/* ═══════════════ PHOTO GALLERY ═══════════════ */}
          <div className="gallery-section">
            <h2 className="gallery-title">📸 आठवणींचा खजिना</h2>
            <p className="gallery-subtitle">
              माझ्या काव्यप्रवासातील काही अविस्मरणीय क्षण - पत्रे, छायाचित्रे आणि आठवणी
            </p>

            <div className="gallery-grid">
              {galleryPhotos.map((photo) => (
                <div
                  key={photo.id}
                  className={`gallery-item gallery-item--${photo.span}`}
                  onClick={() => openLightbox(photo)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openLightbox(photo)}
                  aria-label={`उघडा: ${photo.caption}`}
                >
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="gallery-item__img"
                    loading="lazy"
                  />
                  <div className="gallery-item__overlay">
                    <span className="gallery-item__caption">{photo.caption}</span>
                    <span className="gallery-item__zoom" aria-hidden="true">🔍</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════ LIGHTBOX ═══════════════ */}
      {lightbox && (
        <div
          className="lightbox"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Photo viewer"
        >
          <button
            className="lightbox__close"
            onClick={closeLightbox}
            aria-label="बंद करा"
          >
            ✕
          </button>
          <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={lightbox.src}
              alt={lightbox.alt}
              className="lightbox__img"
            />
            <p className="lightbox__caption">{lightbox.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default About;