import React from 'react'
import NavforHorizontalcard from '../../component/NavforHorizontalcard'
import Overlapdiv from '../../component/Overlapdiv'
import Eitem from '../../component/Eitem'
import Horicariimg from '../../component/Horicariimg'




function Academic() {
  return (
    <>
      <Overlapdiv />
      <NavforHorizontalcard />
      <Horicariimg title="Academics" description={`The N. K. Bagrodia Global School approach was designed to help children grow by letting them explore the world around them. Classrooms are called "prepared environments" where children's innate zeal for learning is encouraged allowing them to choose among an array of purposeful activities to work on under the guidance of a trained adult.`} p1="The method is based on the child's imperious need to learn by doing and has a profound respect for the child's personality. It enables the teacher to deal with each child individually in each subject. Each child works at his/her own pace, and the child has the freedom of movement in the classroom. Children pursue their own self-paced curriculum, and learning takes place individually or in small groups." p2="The classroom is composed of several learning areas: practical life, sensorial, language, maths, science and cultural subjects. The abundance of materials makes it possible for the children to exercise more self-direction and independent work than is usually possible in a traditional class room." p3="We at N. K. Bagrodia Global School, follow the CCE pattern of education introduced by the CBSE board which also includes co-scholastic areas of life skills, attitudes and values, sports and games as well as co-curricular activities." img="swings1.png" />
      <div className="container px-5 my-3 ">
        <h2 className='text-center fw-bold'>Education</h2>
        <div className="row d-flex justify-content-center">
          <Eitem imageUrl="img/preschool.png" title="Pre School" />
          <Eitem imageUrl="img/secondaryschool.png" title="Secondary School" />
          <Eitem imageUrl="img/seniorsecondary.png" title="Senior Secondary School" />
        </div>
      </div>

    </>
  )
}

export default Academic