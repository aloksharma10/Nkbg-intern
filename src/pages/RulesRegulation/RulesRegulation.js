import React from 'react'
import Overlapdiv from '../../component/Overlapdiv'
import NavforHorizontalcard from '../../component/NavforHorizontalcard'
import Horicariimg from '../../component/Horicariimg'
import Inversehoricard from '../../component/Inversehoricard'

function RulesRegulation() {
    return (
        <>
            <Overlapdiv />
            <NavforHorizontalcard />
            <Horicariimg title="School Rules" description="Students should report to school by 7:55am and they should not leave the School campus without prior permission." img="schoolrules.jpg" p1="In case of such actions found, warning letter/TC will be issued under disciplinary action by the School Management." p2="Parents may meet the Principal for any information or clarification with prior appointment." p3="A suggestion box is placed on Gate No.2 where the parents and students can drop their complaints or suggestions for the improvement of the existing condition of the School." />
            <Inversehoricard title="Fees Rules" description="The fee can be paid by cheque or Demand draft only. Fee will be accepted in cheque or Demand draft only upto 15th of the month with late fee fine of Rs. 5/- per day. If 15th happens to be a holiday then fee will be accepted on the next working day. Thereafter, fee will be accepted with a late fee fine of 5/- per day. If a student fails to clear all the dues by the 15th of last quarter, he/she will not be allowed to sit for the final examination until he/she clears all dues with an additional fine as per norms." img="feesrules.jpg" p1="Fee for the whole year is to be paid in four quarterly installments. It can also be paid in one single payment for the full year along with the first quarter. "  p2="Cheques if bounced under any circumstances will amount to non payment of fee for which a fine charged as per norms. " p3="Receipt  of fee is an important document to be kept safely and produced as and when required by the school to reconcile accounts. The fee receipt is to be presented in the bank while making payment. Parents are requested to fill the correct name, class, section, admission number and amount of fee in the fee receipt. If lost, Rs. 10 will be charged for a duplicate receipt."/>
        </>
    )
}

export default RulesRegulation