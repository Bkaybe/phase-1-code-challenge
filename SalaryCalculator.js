function calculateSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits; //adding basicSalary and benefits or allowances to get grossSalary before tax

  console.log("Your Gross salary is:", grossSalary);

  // PAYE calculation
  function payAsYouEarn() {
    let grossSalaryMinusPAYE;

    if (grossSalary <= 24000) {
      grossSalaryMinusPAYE = grossSalary * 0.1;
    } else if (grossSalary > 24000 && grossSalary <= 32333) {
      grossSalaryMinusPAYE = grossSalary * 0.25;
    } else if (grossSalary > 32333 && grossSalary <= 500000) {
      grossSalaryMinusPAYE = grossSalary * 0.3;
    } else if (grossSalary > 500000 && grossSalary <= 800000) {
      grossSalaryMinusPAYE = grossSalary * 0.32;
    } else {
      grossSalaryMinusPAYE = grossSalary * 0.35;
    }

    console.log("Your gross salary minus PAYE: ", grossSalaryMinusPAYE);

    // NHIF calculation based on the KRA Site
    function nHIFDeductions() {
      let salaryMinusNHIF;

      if (grossSalary <= 5999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 150;
      } else if (grossSalary <= 7999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 300;
      } else if (grossSalary <= 11999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 400;
      } else if (grossSalary <= 14999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 500;
      } else if (grossSalary <= 19999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 600;
      } else if (grossSalary <= 24999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 750;
      } else if (grossSalary <= 29999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 850;
      } else if (grossSalary <= 34999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 900;
      } else if (grossSalary <= 39999) {
        salaryMinusNHIF = grossSalaryMinusPAYE - 950;
      } else {
        salaryMinusNHIF = grossSalaryMinusPAYE - 1700;
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
        netsalary = salaryMinusNHIF - nssfContribution;

        console.log("Your total Net pay is: ", netsalary);
        return netsalary;
      }
      nSSFContribution();
    }
    nHIFDeductions();
  }
  payAsYouEarn();
}

console.log(calculateSalary(30000, 4000));
