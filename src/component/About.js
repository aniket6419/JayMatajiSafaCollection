import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.5 },
    }),
  };

  const cardData = [
    {
      icon: '🖌️',
      title: 'અમારા વિશે (About Us)',
      text: `Jay Mataji Safa Collection એ ભારતભરના વિભિન્ન રાષ્ટ્રીય અને ધાર્મિક અવસરો માટે વિશિષ્ટ અને વૈવિધ્યસભર સાફા અથવા પાગડી બંધાવવાની સેવા પ્રદાન કરતું એક વિશ્વસનીય નામ છે. અમે પરંપરાગત શૈલીને આધુનિક અનુભવ સાથે જોડીને તમારા વિશેષ દિવસોને વધુ શાનદાર અને યાદગાર બનાવવાનો પ્રયત્ન કરીએ છીએ. લગ્ન, મુંદન, યાત્રા, પૂજા કે કોઈ પણ ખાસ પ્રસંગ માટે અમારી અનુભવી ટીમ સમગ્ર ભારતમાં તમારી સેવામાં તૈયાર છે. ગુણવત્તા, સમયપાલન અને ગ્રાહક સંતોષ – એ અમારી સેવા ની શ્રેષ્ઠતા દર્શાવે છે.`,
    },
    {
      icon: '🎯',
      title: 'દ્રષ્ટિ (Vision)',
      text: `દરેક વિશિષ્ટ પ્રસંગે સાફા અથવા પાગડીને એક ગૌરવપૂર્ણ પરંપરા તરીકે પ્રસ્તુત કરીને ભારતીય સંસ્કૃતિને દેશ અને વિદેશમાં જીવંત રાખવી – એ Jay Mataji Safa Collectionની દ્રષ્ટિ છે.`,
    },
    {
      icon: '🌟',
      title: 'મિશન (Mission)',
      text: `ગ્રાહકોને સમગ્ર ભારતભરમાં વ્યાવસાયિક અને કસ્ટમાઇઝ્ડ સાફા અથવા પાગડી બંધાવવાની સેવા ઉપલબ્ધ કરવી.\n\nવિભિન્ન પ્રદેશોની પરંપરાગત શૈલીઓ જેવી કે રાજસ્થાની, મેવાડી, મારવાડી વગેરે ડિઝાઇનમાં નવીનતા લાવવી.\n\nપાગડી બંધાવાની કલાને આધુનિક સેવા સાથે ભેગી કરીને દરેક પ્રસંગને યાદગાર બનાવવો.\n\nગ્રાહકની જરૂરિયાત અનુસાર સમયસર, શિષ્ટ અને શ્રેષ્ઠ સેવા આપવી.`,
    },
  ];

  return (
    <div className="container py-5">
      <motion.h2
        className="text-center mb-5 fw-bold"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Us
      </motion.h2>

      <div className="row g-4 justify-content-center">
        {cardData.map((item, index) => (
          <motion.div
            className="col-md-6 col-lg-4"
            key={index}
            custom={index}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="card h-100 shadow-lg border-0 rounded-4"
              whileHover={{ scale: 1.02, boxShadow: '0 12px 24px rgba(0,0,0,0.15)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="card-body text-center p-4">
                <h5 className="card-title mb-3 fs-5">
                  {item.icon} {item.title}
                </h5>
                <p className="card-text text-muted" style={{ whiteSpace: 'pre-line' }}>
                  {item.text}
                </p>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

