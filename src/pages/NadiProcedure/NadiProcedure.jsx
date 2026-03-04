import SEO from "../../components/SEO/SEO";
import seoData from "../../data/seoData"
import styles from "./NadiProcedure.module.css";

function NadiProcedure() {
  return (
    <>
      <SEO {...seoData.nadiProcedure} />

      <div className={styles.container}>
        <h1 className={styles.heading}>Nadi Astrology Procedure</h1>

        {/* Section 1 */}
        <section className={styles.section}>
          <h2>How the Nadi Reading Process Works</h2>
          <p>
            After receiving your call, we confirm your appointment and fix the
            date & time. You will then be asked to send your thumb impression
            along with your place of birth and current residential city.
          </p>

          <p>
            Our team begins searching for your Nadi leaf. During the scheduled
            audio or video call, your details are verified with the ancient
            palm leaves. Once the correct leaf matches and you confirm the
            details, the full prediction begins.
          </p>

          <p>
            You may also request specific topics to be focused on during your
            prediction.
          </p>
        </section>

        {/* Section 2 */}
        <section className={styles.section}>
          <h2>Guidance from Guruji M. Arul Sivam</h2>
          <p>
            Guruji M. Arul Sivam, Traditional Nadi Astrologer, will address
            your concerns and answer your questions in detail.
          </p>

          <p>
            Questions about marriage, children, financial wealth, career,
            education, family life, or specific life events will be carefully
            explained based on the Nadi leaf readings.
          </p>
        </section>

        {/* Section 3 */}
        <section className={styles.section}>
          <h2>Information Required for Online Nadi Prediction</h2>

          <div className={styles.infoGrid}>
            <div className={styles.card}>
              <h3>Ladies</h3>
              <ul>
                <li>Left Thumb Impression</li>
                <li>Place of Birth</li>
                <li>Current City of Residence</li>
                <li>Phone / Mobile Number</li>
              </ul>
            </div>

            <div className={styles.card}>
              <h3>Gents</h3>
              <ul>
                <li>Right Thumb Impression</li>
                <li>Place of Birth</li>
                <li>Current City of Residence</li>
                <li>Phone / Mobile Number</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default NadiProcedure;