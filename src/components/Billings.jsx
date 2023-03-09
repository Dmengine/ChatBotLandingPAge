import React from "react" ;
import { sop, google, apple } from "../assets" ;
import styles, {layout} from "../style" ;

export const Billings = () => 
(
  <section id="product" className={layout.sectionReverse} >
    <div className={layout.sectionImgReverse} >
      <img src= {sop} alt="billing" className="w-[100%] h-[100%] z-[5] " />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50px] h-[50px] rounded-full gradient-white " />
      <div className="absolute z-[3] -left-1/2 bottom-0 w-[50px] h-[50px] rounded-full gradient-pink " />
    </div>
    <div className={"${layout.sectionInfo} sm:p-10"} >
      <h2 className={styles.heading2} >
      Easily control your <br className="sm:block hidden"/> billing & invoicing.
      </h2>
      <p className={"${styles.paragraph} max-w-[470px] mt-5 text-dimWhite"} >
      Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img src={apple} alt="apple-source" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
        <img src={google} alt="google_source" className="w-[128px] h-[42px] object-contain mr-5 cursor-pointer " />
      </div>
    </div>
  </section>
)