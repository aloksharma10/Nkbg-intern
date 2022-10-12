import React from 'react'
import NavforHorizontalcard from '../../component/NavforHorizontalcard'
import Overlapdiv from '../../component/Overlapdiv'
import Horicariimg from '../../component/Horicariimg'
import Inversehoricard from '../../component/Inversehoricard';

function Infrastructure() {
  return (
    <>
      <Overlapdiv />
      <NavforHorizontalcard />
      <Inversehoricard title="Building" description="The modern elegant and aesthetically designed school building is built in a 2 acre plot of land. It has an excellent infrastructure with large well ventilated class rooms equipped with latest technological aids, computers, CCTV Cameras to provide a conducive teaching and learning environment." img="building.png" p1="The school maintains very high safety standards." p2="Security guards are on duty 24 X 7 on all the 3 gates of the school." p3="CCTV cameras are fitted in all gates and lobby of the school to ensure the safety and security of the children as well as to help maintain discipline in the school. All staircases in the school are very wide fitted with proper protective steel railings." />
      <Horicariimg
        title="Transport Facility"
        description="The school transport facility is available on selected routes only. Application for this facility can be submitted in the prescribed form with the required details to the Transport Department. This facility is subject to the availability of seat in the bus opted for. Buses will ply through their regular routes and this will not be changed to individual needs. The school bus facility cannot be demanded as a matter of right. The Transport Department reserves the right to disallow any student from availing the bus facility for any justifiable reasons at their own discretion."
        img="bus.png"
        p1="Providing bus facility is not mandatory on the school. The bus facility is provided as a convenience and all possible care is taken to make the bus facility safe for the student. However, the school will not be responsible for any unforeseen incident."
        p2="Pick up and Drop points of every child will be informed by the transporter as per directions of the school management and it cannot be changed during the academic year unless there is a change in the residence. If the residential address falls on the existing route, only then you can avail the facility."
      />

      <Inversehoricard title="Laboratories" description="Learning by doing is the most effective way of learning. The school provides the most modern labs which are continually upgraded." img="biolab.png" p1="Theory is incomplete without practical. One needs to completely get involved in the various practical experiments whether it be Chemistry, Biology or Physics, to get a thorough knowledge and understanding of what had been taught in the theory class." p2="Labs are neatly arranged with a view to a fresh approach. When a student walks in, the Lab assistant and the teacher both assist him / her in understanding and undertaking experiments." p3="N. K. Bagrodia Global School aims to ensure that every student strengthens his / her knowledge of theory with lively practicals which will be remembered for ever." />

    </>
  )
}

export default Infrastructure