/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { 
  AlertTriangle, 
  BookOpen, 
  Building2, 
  CloudRain, 
  GraduationCap, 
  HardHat, 
  Library, 
  Quote, 
  Star, 
  WifiOff,
  ShieldCheck,
  BarChart3,
  Waves,
  Fingerprint,
  Wifi
} from "lucide-react";

const ExposedStamp = () => (
  <motion.div 
    initial={{ scale: 2, opacity: 0, rotate: -20 }}
    animate={{ scale: 1, opacity: 0.8, rotate: -15 }}
    transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.5 }}
    className="absolute top-10 right-10 border-8 border-upl-red text-upl-red px-6 py-2 font-mono text-4xl font-bold uppercase tracking-widest transform -rotate-12 select-none pointer-events-none z-50"
    style={{ textShadow: "2px 2px 0px rgba(0,0,0,0.5)" }}
  >
    Exposed
  </motion.div>
);

const RainEffect = () => {
  const [drops, setDrops] = useState<{ id: number; left: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    const newDrops = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${0.5 + Math.random() * 0.5}s`,
    }));
    setDrops(newDrops);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute top-[-20px] w-[1px] h-[20px] bg-blue-400/40"
          style={{
            left: drop.left,
            animation: `rain ${drop.duration} linear infinite`,
            animationDelay: drop.delay,
          }}
        />
      ))}
      <style>{`
        @keyframes rain {
          0% { transform: translateY(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(800px); opacity: 0; }
        }
      `}</style>
    </div>
  );
};

const SectionDivider = ({ bottom = false }: { bottom?: boolean }) => (
  <div className={`w-full h-8 bg-upl-gold/10 ${bottom ? 'newspaper-edge-bottom' : 'newspaper-edge'}`} />
);

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="min-h-screen selection:bg-upl-gold selection:text-upl-bg overflow-x-hidden">
      {/* Hero Section */}
      <header className="relative h-screen flex flex-col items-center justify-center text-center px-4 bg-[radial-gradient(circle_at_center,_#1a1a1a_0%,_#0d0d0d_100%)]">
        <ExposedStamp />
        
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <div className="inline-block border border-upl-gold/30 px-4 py-1 mb-6 font-mono text-xs uppercase tracking-[0.3em] text-upl-gold">
            The Unofficial Honest Review
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 leading-tight">
            UPL University <br />
            <span className="text-upl-gold italic font-normal">of Sustainability?</span>
          </h1>
          <p className="text-xl md:text-2xl text-upl-cream/60 max-w-2xl mx-auto font-light leading-relaxed">
            Where your tuition fees sustain the chairman's luxury car collection, 
            and your career prospects evaporate faster than the library's WiFi signal.
          </p>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 text-upl-gold/50"
        >
          <div className="font-mono text-[10px] uppercase tracking-widest mb-2">Scroll to witness the tragedy</div>
          <div className="w-[1px] h-12 bg-upl-gold/30 mx-auto" />
        </motion.div>
      </header>

      <SectionDivider />

      {/* Placement Stats */}
      <section className="py-24 px-4 bg-upl-bg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-4">
              <GraduationCap className="text-upl-gold" />
              "100% Placement"
            </h2>
            <p className="text-lg text-upl-cream/70 mb-8 leading-relaxed">
              Our marketing department defines "placement" as any situation where a student 
              is physically placed somewhere. This includes standing at a bus stop, 
              sitting in a park, or occupying a space in their parents' basement.
            </p>
            <div className="space-y-4 font-mono text-sm">
              {[
                { label: "Chai Stall Entrepreneur", val: "45%", color: "bg-upl-gold" },
                { label: "Professional LinkedIn Lurker", val: "30%", color: "bg-upl-red" },
                { label: "MLM 'Business Owner'", val: "20%", color: "bg-white/20" },
                { label: "Actual Engineering Job", val: "5%", color: "bg-blue-500" },
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex justify-between mb-1">
                    <span>{item.label}</span>
                    <span className="text-upl-gold">{item.val}</span>
                  </div>
                  <div className="h-1 w-full bg-white/5 overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: item.val }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      className={`h-full ${item.color}`} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square flex items-center justify-center"
          >
            {/* CSS Pie Chart */}
            <div className="w-64 h-64 rounded-full border-4 border-upl-gold/20 relative flex items-center justify-center">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `conic-gradient(
                    #c9a84c 0% 45%, 
                    #c0392b 45% 75%, 
                    rgba(255,255,255,0.1) 75% 95%, 
                    #3b82f6 95% 100%
                  )`
                }}
              />
              <div className="w-48 h-48 rounded-full bg-upl-bg z-10 flex flex-col items-center justify-center text-center p-4">
                <span className="text-3xl font-bold text-upl-gold">100%</span>
                <span className="text-[10px] font-mono uppercase tracking-tighter opacity-50">Creative Accounting</span>
              </div>
            </div>
            
            {/* Award Badge */}
            <div className="absolute -bottom-4 -right-4 bg-upl-gold text-upl-bg p-4 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center transform rotate-12 shadow-xl border-4 border-upl-bg">
              <Star size={20} fill="currentColor" />
              <span className="text-[10px] font-bold uppercase leading-tight mt-1">Most Creative Placement Stats 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionDivider bottom />

      {/* Facilities */}
      <section className="py-24 px-4 bg-[#111]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 italic">World-Class Facilities*</h2>
            <p className="text-upl-gold font-mono text-xs uppercase tracking-widest">*Terms and conditions (and reality) apply</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Library className="w-8 h-8" />,
                title: "The 'Library'",
                desc: "Contains 3 books: a 1994 Encyclopedia (Volume G), a stained copy of 'C++ for Dummies', and the Chairman's autobiography. Silence is mandatory because the librarian is sleeping."
              },
              {
                icon: <WifiOff className="w-8 h-8" />,
                title: "Tuesday WiFi",
                desc: "High-speed internet available every Tuesday between 2:00 PM and 2:03 PM. Supports up to 2 simultaneous users. Password changes every 4 minutes for 'security'."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "1987 Lab Tech",
                desc: "Our computers are vintage artifacts. They run on coal and prayer. The monitors are so thick they double as structural support for the building."
              }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="p-8 border border-white/5 bg-upl-bg/50 hover:border-upl-gold/30 transition-colors group"
              >
                <div className="text-upl-gold mb-6 group-hover:scale-110 transition-transform duration-300">{card.icon}</div>
                <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                <p className="text-upl-cream/60 text-sm leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Construction Quality */}
      <section className="py-24 px-4 bg-upl-bg relative overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Construction Milestones</h2>
          
          <div className="relative border-l border-upl-gold/20 ml-4 md:ml-0 md:left-1/2">
            {[
              { year: "2018", event: "Foundation laid. Architect flees the country citing 'moral objections'." },
              { year: "2019", event: "Walls completed. Visible cracks added for 'natural ventilation'." },
              { year: "2020", event: "Roof installed. Discovered to be 40% cardboard during first drizzle." },
              { year: "2022", event: "Classrooms flood. University rebrands as 'Venice of the East'." },
              { year: "2024", event: "Building declared 'Historic' to avoid safety inspections." }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`relative mb-12 md:w-1/2 ${i % 2 === 0 ? 'md:pr-12 md:text-right md:ml-[-50%]' : 'md:pl-12 md:ml-[0%]'}`}
              >
                <div className={`absolute top-0 w-4 h-4 bg-upl-gold rounded-full border-4 border-upl-bg ${i % 2 === 0 ? 'right-[-9px] md:right-[-9px]' : 'left-[-9px]'}`} />
                <div className="font-mono text-upl-gold text-sm mb-2">{item.year}</div>
                <div className="text-lg font-medium">{item.event}</div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Decorative Cracks */}
        <div className="absolute top-20 right-10 opacity-10 pointer-events-none">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <path d="M0 0 L50 40 L30 80 L100 120 L80 160 L150 200" stroke="white" fill="none" strokeWidth="2" />
          </svg>
        </div>
      </section>

      {/* THE STAIRCASE */}
      <section className="relative py-32 px-4 bg-upl-bg overflow-hidden border-y border-upl-red/30">
        <RainEffect />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Warning Sign */}
              <div className="bg-upl-red text-white p-8 border-4 border-white shadow-2xl transform -rotate-3">
                <div className="flex items-center gap-4 mb-4">
                  <AlertTriangle size={48} />
                  <h3 className="text-3xl font-black uppercase tracking-tighter">Warning</h3>
                </div>
                <p className="font-mono text-sm font-bold uppercase mb-4">
                  Legendary Waterfall Staircase Ahead
                </p>
                <ul className="space-y-2 text-xs font-mono opacity-90">
                  <li>• Life jackets mandatory for Floor 2 access</li>
                  <li>• No fishing in the main lobby</li>
                  <li>• Faculty boats have right of way</li>
                  <li>• Slide down at your own risk</li>
                </ul>
              </div>
              
              {/* Award Badge */}
              <div className="absolute -top-10 -right-10 bg-white text-upl-red p-4 rounded-full w-32 h-32 flex flex-col items-center justify-center text-center transform rotate-12 shadow-xl border-4 border-upl-red">
                <CloudRain size={20} />
                <span className="text-[10px] font-bold uppercase leading-tight mt-1">Best Waterfall Staircase 2024</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl font-black mb-8 leading-none uppercase italic text-upl-red">
                The Great <br />
                <span className="text-upl-cream not-italic">Stair-Fall</span>
              </h2>
              <p className="text-lg text-upl-cream/70 mb-8 leading-relaxed">
                Why build a fountain when your main staircase becomes a 4-story waterfall 
                every time someone sneezes near a cloud? Our innovative "Hydro-Transport System" 
                allows students to reach the ground floor in record time (approx. 2.4 seconds).
              </p>
              
              <div className="bg-white/5 p-6 border-l-4 border-upl-red font-mono text-sm">
                <div className="text-upl-red mb-2 uppercase font-bold">Recent Incident Log:</div>
                <div className="space-y-3 text-upl-cream/60">
                  <p>• 09:15 - Dean spotted using a jet ski to reach HOD office.</p>
                  <p>• 11:30 - Third-year student successfully surfed from Library to Canteen.</p>
                  <p>• 14:45 - Canteen samosas used as emergency flotation devices.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-4 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-16 text-center">Student Testimonials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rahul 'The Surfer' K.",
                role: "B.Tech (Aquatic Engineering)",
                quote: "I came for the degree, I stayed because the staircase current was too strong to leave. 10/10 would drown again."
              },
              {
                name: "Priya M.",
                role: "MBA (Creative Placement)",
                quote: "UPL promised me a global career. I'm now globally recognized as the best chai-maker in my neighborhood. Thanks, UPL!"
              },
              {
                name: "Ankit S.",
                role: "Drop-out (Smart Choice)",
                quote: "The library's single book on C++ was actually a hollowed-out box containing the librarian's lunch. Very educational."
              }
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="p-8 bg-upl-bg border border-upl-gold/10 relative"
              >
                <Quote className="absolute top-4 right-4 text-upl-gold/20" size={40} />
                <div className="flex gap-1 mb-4">
                  {[...Array(1)].map((_, i) => <Star key={i} size={14} fill="#c9a84c" color="#c9a84c" />)}
                  {[...Array(4)].map((_, i) => <Star key={i} size={14} color="#333" />)}
                </div>
                <p className="text-upl-cream/80 italic mb-6 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-upl-gold">{t.name}</div>
                  <div className="text-[10px] font-mono uppercase opacity-50">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 px-4 bg-black border-t border-upl-gold/10 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-16">
            <h3 className="text-upl-gold font-mono text-xs uppercase tracking-[0.4em] mb-12 opacity-50">Official Accreditations</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16">
              {[
                { 
                  icon: <Waves size={40} />, 
                  name: "World Association of Slightly Damp Buildings",
                  id: "WASDB-2024"
                },
                { 
                  icon: <BarChart3 size={40} />, 
                  name: "Global Council for Dubious Statistics",
                  id: "GCDS-99.9%"
                },
                { 
                  icon: <ShieldCheck size={40} />, 
                  name: "Institute of Theoretical Safety Standards",
                  id: "ITSS-VOID"
                },
                { 
                  icon: <Fingerprint size={40} />, 
                  name: "Bureau of Unverifiable Academic Excellence",
                  id: "BUAE-404"
                },
                { 
                  icon: <Wifi size={40} />, 
                  name: "International Society for WiFi Archaeology",
                  id: "ISWA-OFFLINE"
                }
              ].map((logo, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center group"
                >
                  <div className="w-20 h-20 rounded-full border-2 border-upl-gold/20 flex items-center justify-center text-upl-gold mb-4 group-hover:border-upl-gold group-hover:scale-110 transition-all duration-500 relative overflow-hidden">
                    {logo.icon}
                    <div className="absolute inset-0 bg-gradient-to-tr from-upl-gold/0 via-upl-gold/10 to-upl-gold/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>
                  <div className="max-w-[150px]">
                    <div className="text-[10px] font-bold text-upl-gold uppercase leading-tight mb-1">{logo.name}</div>
                    <div className="text-[8px] font-mono text-upl-cream/30 uppercase tracking-widest">{logo.id}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="w-full h-px bg-gradient-to-r from-transparent via-upl-gold/20 to-transparent mb-12" />

          <div className="text-upl-gold font-serif font-bold text-3xl mb-4 italic tracking-tight">UPL University</div>
          <p className="text-upl-cream/40 text-[10px] font-mono uppercase tracking-[0.3em] mb-12">
            Sustainability through Tuition Hikes since 2018
          </p>
          
          <div className="max-w-2xl mx-auto">
            <div className="p-8 border border-upl-gold/10 bg-upl-gold/5 relative overflow-hidden group">
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-upl-gold/40" />
              <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-upl-gold/40" />
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-upl-gold/40" />
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-upl-gold/40" />
              
              <p className="text-upl-cream/60 text-xs md:text-sm leading-relaxed font-serif italic">
                "UPL University of Sustainability Technology is a fictional institution. 
                This website is satire. All placements are purely imaginary. 
                Please do not sue us. We have no assets."
              </p>
            </div>
            <div className="mt-6 text-[9px] font-mono text-upl-cream/20 uppercase tracking-widest">
              © 2024 UPL University. All wrongs reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
