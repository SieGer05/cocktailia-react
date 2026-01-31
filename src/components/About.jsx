import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { profileLists } from "../../constants";

function About() {
   useGSAP(() => {
      const titleSplit = SplitText.create('#about h2', {
         type: 'words'
      })

      const scrollTimeline = gsap.timeline({
         scrollTrigger: {
            trigger: '#about',
            start: 'top center'
         }
      })

      scrollTimeline
         .from(titleSplit.words, {
            opacity: 0,
            duration: 1, 
            yPercent: 100,
            ease: 'expo.out',
            stagger: 0.02
         })
         .from('.sub-content > p', {
            opacity: 0,
            y: 30,
            duration: 0.8,
            ease: 'power2.out'
         }, '-=0.6')
         .from('.sub-content > div.flex > div', {
            opacity: 0,
            y: 20,
            duration: 0.8,
            stagger: 0.1, 
            ease: 'power2.out'
         }, '-=0.6') 
         .from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            duration: 1,
            ease: 'power1.inOut',
            stagger: 0.04
         }, '-=0.5')
   }, []);

   return (
      <div id="about">
         <div className="mb-16 md:px-0 px-5">
            <div className="content">
               <div className="md:col-span-8">
                  <p className="badge">Best Cocktails</p>
                  <h2>
                     Where every detail matters<span className="text-white"> - </span>
                     from muddle to garnish
                  </h2>
               </div>

               <div className="sub-content">
                  <p>
                     Every cocktail we serve is a reflection of our obsession with detail — from the first muddle to the final garnish. That care is what turns a simple drink into something truly memorable.
                  </p>
                  
                  <div className="flex flex-row">
                     <div className="items-start">
                        <div className="flex flex-row items-center gap-1 text-white text-xl">
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStar />
                           <FaStarHalfAlt />
                        </div>

                        <div>
                           <p className="md:text-3xl text-xl font-bold">
                              <span>4.5</span>/5
                              <p className="text-sm text-white-100">
                                 More than +12000 customers
                              </p>
                           </p>
                        </div>
                     </div>

                     <div className="relative h-24 w-0.5 bg-neutral-900">
                        <div className="noisy pointer-events-none"></div>
                     </div>

                     <div className="relative flex flex-row items-center -space-x-6 rounded-full bg-neutral-900 px-6 py-6">
                        <div className="noisy absolute inset-0 pointer-events-none rounded-full" />
                        {profileLists.map((profile, index) => (
                           <div
                              key={index}
                              className="relative z-10 h-14 w-14 rounded-full border-[3px] border-white transition-all duration-200 hover:z-20 hover:scale-110"
                           >
                              <img
                              src={profile.imgPath}
                              alt={`profile-${index}`}
                              className="h-full w-full rounded-full object-cover"
                              />
                           </div>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className="top-grid">
            <div className="md:col-span-3">
               <div className="noisy" />
               <img src="/images/abt1.png" alt="grid-img-1" />
            </div>

            <div className="md:col-span-6">
               <div className="noisy" />
               <img src="/images/abt2.png" alt="grid-img-2" />
            </div>

            <div className="md:col-span-3">
               <div className="noisy" />
               <img src="/images/abt5.png" alt="grid-img-5" />
            </div>            
         </div>

         <div className="bottom-grid">
            <div className="md:col-span-8">
               <div className="noisy" />
               <img src="/images/abt3.png" alt="grid-img-3" />
            </div> 

            <div className="md:col-span-4">
               <div className="noisy" />
               <img src="/images/abt4.png" alt="grid-img-4" />
            </div> 
         </div>
      </div>
   );
}

export default About;