import React from 'react';
import instaicon from "./images/instaIcon.png";
import youtubeicon from "./images/youtubeicon.png"
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-white text-center text-lg-start' style={{ backgroundColor: '#212529' }}>
      <MDBContainer className='p-4'>
        <MDBRow>

          {/* Contact Info */}
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0 text-start">
            <h5 className="text-uppercase fw-bold mb-3">Contact Us</h5>
            <p className='mb-2'><MDBIcon icon="envelope" className="me-2" />aniketthakor6419@gmail.com</p>
            <p className='mb-2'><MDBIcon icon="phone" className="me-2" />+91 7698210785</p>
            <p><MDBIcon icon="map-marker-alt" className="me-2" /> GandhiChowk,Kadi,Dist:Mehsana,382715</p>
          </MDBCol>

          {/* Social Links */}
          <MDBCol lg="6" md="12" className="mb-4 mb-md-0 text-lg-end text-center">
            <h5 className="text-uppercase fw-bold mb-3">Follow Us</h5>
            <a
              href="https://www.instagram.com/jaymataji_safa?igsh=bm1nZG5lOHJjbGt6"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <img
                src={instaicon}
                alt="Instagram"
                style={{ width: '32px', height: '32px', borderRadius: '8px' }}
              />
               
            </a>
             <a
              href="https://youtube.com/@jaymataji_safa?si=cO4AJpofu7kTZLqA"
              target="_blank"
              rel="noopener noreferrer"
              className="me-3"
            >
              <img
                src={youtubeicon}
                alt="Instagram"
                style={{ width: '32px', height: '32px', borderRadius: '8px' }}
              />
            </a>
          </MDBCol>

        </MDBRow>

        <hr className="my-4 text-white" />

        {/* Footer Note */}
        <MDBRow>
          <MDBCol className='text-center'>
            <p className='mb-1'>If you Want to Any Services Regard of us Then contact from Above Details - AniketSinh Thakor</p>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      {/* Bottom Bar */}
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
        © 2025 <strong>VedPatel Developers</strong>
      </div>
    </MDBFooter>
  );
}
