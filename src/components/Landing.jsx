import { Stats, Navbar, Hero, Business, Billings, CardDeals, GetStarted, Testimonials, Client, CTA, Footer } from "../components" ;
import styles from "../style" ;

export default function Landing()
{
  return (
  <>
    <div className={`bg-primary w-full overflow-hidden`}>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billings />
          <CardDeals />
          <Client />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  </>
  ) ;
}