import {useState} from "react";
import {Tab, Tabs} from "@mui/material";
import {mockedBanks} from "../../mocks";
import Form from "../Form/Form";

const BankTabs = () => {
  const [chosenBank, setChosenBank] = useState(0)

  const changeTabHandler = (event) => {
    setChosenBank(event.target.id)
  }

  const bankTabs = mockedBanks.map((el, index) => {
    return (
      <Tab value={el.name} label={el.name} id={index} />
    )
  })

  return (
    <div>
      <Tabs
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
        onChange={changeTabHandler}
        value={mockedBanks[chosenBank].name}
      >
        {bankTabs}
      </Tabs>
      <Form
        interestRatePercentage={mockedBanks[chosenBank].interestRatePercentage}
        minimumCreditAmount={mockedBanks[chosenBank].minimumCreditAmount}
        maximumCreditAmount={mockedBanks[chosenBank].maximumCreditAmount}
        minimumTerm={mockedBanks[chosenBank].minimumTerm}
        maximumTerm={mockedBanks[chosenBank].maximumTerm}
      />
    </div>

  )
}

export default BankTabs