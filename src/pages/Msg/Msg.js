import React from 'react'
import Overlapdiv from '../../component/Overlapdiv'
import Navabout from '../../component/Navabout'
import Horicariimg from '../../component/Horicariimg'

function msg() {
    return (
        <>
            <Overlapdiv />
            <Navabout />
            <div className="container mt-3">
                <h3 className='text-center display-6' style={{ fontWeight: "600" }}>Message</h3>
                <div className="row" style={{fontSize: "1rem"}}>
                    <Horicariimg title="Founder's Message" sourcetitle="- Founder's Message" description="Late Shri Nand Kishore Bagrodia ji - A great Utopian, Thinker, Pragmatist, Visionary - par excellence is the driving force behind the golden legacy of the timeless value   and rich principles bestowed upon his associates. ‘Simple living and high thinking’ personified his zeal and humility for mankind. A legendary who possessed ‘Midas Touch’ and revolutionized quality education in Delhi and Rajasthan." img="Trustee.png" />
                    <Horicariimg title="Chairman's Message" sourcetitle="- Chairman's Message" description="The Chairperson of the school who aspired to translate the founder's vision into reality. He dedicated himself in pursuit of educational excellence.The school aims to be a citable of learning, dedicated in imparting quality and holistic education for producing leaders of tomorrow with strong values. It is run under the aegis of Seth Sagarmal Bagrodia Charitable Trust, comprising the extra ordinary committee of erudite experts." img="chairman1.png" />
                    <Horicariimg title="Director's Message" sourcetitle="- Director's Dr. (Mrs) Rajee N. Kumar" description="I am honoured and humbled to be the part of this great institution N. K. Bagrodia Public School, Sector-IV, Dwarka, New Delhi-110078 for the last 20 years as the founder Principal which was founded by a visionary par excellence Late Sh. Nand Kishore Bagrodiaji and now as the Director of this esteemed institution. The school has completed 21 glorious years to become one of the prestigious institutions catering to more than 3000 students."
                     img="director.jpg"
                      p1="I believe that to be the best at whatever one endeavors to do is perhaps the most rewarding of all exercises in life. The institution has once again been ranked among the top ten schools (consecutively for the last 6 years) at the All India level for its academic reputation. To begin with I would like to place on record the dedication and commitment of the Bagrodian faculty at Dwarka who have dedicated their lives to the cause of education which apparently has been the prime and inevitable determinant of excellence. " 
                      p2="Many of our Alumni have been offered good placements in top companies of the world. For our children their world is a confusing quagmire of emotional crevasses and high walls of knowledge. Teachers on the contrary tap the potential of each student by holding their hands to access, then climb and reach the heights of knowledge and learning. Teachers are the classroom heroes who identify and clear the path of the students, while parents give roots to the child; teachers shape their minds and give them wings to soar high. We as teachers should guide each and every student imbibe better values, right skills and a qualitative life to become a good human being." p3="I seek blessings from the God Almighty to shower his choicest blessings on the entire Bagrodian fraternity at Dwarka to persistently walk on the path of educational excellence only to leave a trail and a roadmap for making this institution become a world class school perhaps the best in the world!" />
                    <Horicariimg title="Principal's Message" sourcetitle="- Principal's Message" description="Late Shri Nand Kishore Bagrodia ji - A great Utopian, Thinker, Pragmatist, Visionary - par excellence is the driving force behind the golden legacy of the timeless value   and rich principles bestowed upon his associates. ‘Simple living and high thinking’ personified his zeal and humility for mankind. A legendary who possessed ‘Midas Touch’ and revolutionized quality education in Delhi and Rajasthan." img="principal.jpeg" />
                </div>
            </div>
        </>
    )
}
export default msg