import GeneralInfoIncome from "./GeneralInfoIncome";
import GeneralInfoOrder from "./GeneralInfoOrder";
import GeneralInfoUsers from "./GeneralInfoUsers";

export default function GeneralInfo () {
    return(
        <div className="flex py-8 gap-6 ">
          <GeneralInfoIncome/>
          <GeneralInfoOrder/>
          <GeneralInfoUsers/>
       </div>
    )
}