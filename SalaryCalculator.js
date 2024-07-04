function netSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits; //adding basicSalary and benefits or allowances to get grossSalary before tax

  console.log("Your Gross salary is:", grossSalary);

  // PAYE calculation
  function payAsYouEarn() {
    let grossSalaryMinusPAYE;

    if (grossSalary > 40000) {
      grossSalaryMinusPAYE = grossSalary - 15000;
    } else if (grossSalary > 30000) {
      grossSalaryMinusPAYE = grossSalary - 3000;
    } else if (grossSalary > 20000) {
      grossSalaryMinusPAYE = grossSalary - 2000;
    } else if (grossSalary > 10000) {
      grossSalaryMinusPAYE = grossSalary - 1000;
    }

    console.log("Your gross salary minus PAYE: ", grossSalaryMinusPAYE);

    // NHIF calculation based on the KRA Site
    function nHIFDeductions() {
      let salaryMinusNHIF;

      if (grossSalaryMinusPAYE <= 5999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 150;
      } else if (grossSalaryMinusPAYE <= 7999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 300;
      } else if (grossSalaryMinusPAYE <= 11999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 400;
      } else if (grossSalaryMinusPAYE <= 14999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 500;
      } else if (grossSalaryMinusPAYE <= 19999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 600;
      } else if (grossSalaryMinusPAYE <= 24999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 750;
      } else if (grossSalaryMinusPAYE <= 29999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 850;
      } else if (grossSalaryMinusPAYE <= 34999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 900;
      } else {
        salaryMinusNHIF = grossSalaryMinusPAYE - 950;
      }

      console.log("Your gross salary minus NHIF:", salaryMinusNHIF);

      //NSSF calculation
      function nSSFContribution() {
        // getting the contribution rate and limits
        const tier1Rate = 0.06;
        const tier1Limit = 700;
        const tier2Limit = 280;

        // Tier 1 contribution
        let tier1Contribution = (basicSalary * tier1Rate, tier1Limit);

        // Tier 2 contribution
        let tier2Contribution = 0;
        if (basicSalary > tier1Limit) {
          const excessSalary = basicSalary - tier1Limit;
          tier2Contribution = (excessSalary * tier1Rate, tier2Limit);
        }

        // Total NSSF contribution
        let nssfContribution = tier1Contribution + tier2Contribution;
        const netsalary = salaryMinusNHIF - nssfContribution;

        console.log("Your total Net pay is: ", netsalary);
        return netsalary;
      }
      nSSFContribution();
    }
    nHIFDeductions();
  }
  payAsYouEarn();
}

netSalary(30000, 4000);
