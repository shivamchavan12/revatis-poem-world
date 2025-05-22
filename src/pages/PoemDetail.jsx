import React from "react";
import { useParams, Link } from "react-router-dom";
import poemData from "../poemsData";  // Adjust path as needed
import "./PoemDetail.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';



const PoemDetail = () => {
  const { id } = useParams();

  // Find poem by id
  const poem = poemData.find(p => p.id === parseInt(id) || p.id === id);

  // Sharing functionality
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(poem?.title || "Beautiful Poem");
    
    let shareUrl = '';
    
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${title}&url=${url}`;
        break;
      case 'instagram':
        // Instagram doesn't support direct sharing via URL
        alert("Copy this link to share on Instagram: " + window.location.href);
        return;
      case 'whatsapp':
        shareUrl = `https://api.whatsapp.com/send?text=${title}%20${url}`;
        break;
      default:
        return;
    }
    
    window.open(shareUrl, '_blank', 'width=600,height=400');
  };

  if (!poem) {
    return (
      <div className="poem-not-found">
        <h2>कविता सापडली नाही</h2>
        <p>Requested poem could not be found.</p>
        <Link to="/Poems" className="back-link">Back to Poems</Link>
      </div>
    );
  }

  return (
    <div className="poem-page-container">
      <div 
        className="poem-container" 
        style={{ 
          backgroundImage: poem.backgroundImage 
            ? `url(${poem.backgroundImage})`
            : "linear-gradient(135deg, #f5f7fa, #c3cfe2)" 
        }}
      >
        {/* Floating decorative elements */}
        <div className="floating-element element-1">✿</div>
        <div className="floating-element element-2">❀</div>
        <div className="floating-element element-3">✿</div>
        <div className="floating-element element-4">❀</div>
        
        <div className="poem-card">
          <h1 className="poem-title1">{poem.title}</h1>
          <div className="poem-divider"></div>
          
          {poem.author && <p className="poem-author">by {poem.author}</p>}
          
          {poem.description && (
            <div className="poem-description">
              {poem.description}
            </div>
          )}
          
          <div className="poem-content1">
            {poem.content.split('\n').map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </div>
          
          <div className="share-section">
            <p className="share-title">Share this poem</p>
            <div className="share-icons">
              <div 
                className="share-icon facebook" 
                onClick={() => handleShare('facebook')}
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </div>
              <div 
                className="share-icon twitter" 
                onClick={() => handleShare('twitter')}
              >
                <FontAwesomeIcon icon={faTwitter} />
              </div>
              <div 
                className="share-icon instagram" 
                onClick={() => handleShare('instagram')}
              >
                <FontAwesomeIcon icon={faInstagram} />
              </div>
              <div 
                className="share-icon whatsapp" 
                onClick={() => handleShare('whatsapp')}
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </div>
            </div>
          </div>
          
          <div className="navigation-buttons">
            <Link to="/Poems" className="nav-button">
              Back to Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoemDetail;
