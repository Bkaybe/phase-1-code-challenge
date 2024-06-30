function calculateSalary(basicSalary, benefits) {
  const grossSalary = basicSalary + benefits; //adding basicSalary and benefits or allowances to get grossSalary before tax

  // Getting the returns of PAYE,NSSF and NHIF and storing them in variables
  const PAYE = payAsYouEarn(grossSalary);
  const NHIFDeductions = nHIFDeductions(grossSalary);
  const NSSFDeductions = nSSFContribution(basicSalary);

  //getting total deductions
  const totalDeductions = PAYE + NHIFDeductions + NSSFDeductions;
  return grossSalary - totalDeductions; //this will be the output for the whole program when I invoke calculateSalary()
}

// PAYE calculation
function payAsYouEarn(grossSalary) {
  if (grossSalary <= 24000) {
    return grossSalary * 0.1;
  } else if (grossSalary > 24000 && grossSalary <= 32333) {
    return grossSalary * 0.25;
  } else if (grossSalary > 32333 && grossSalary <= 500000) {
    return grossSalary * 0.3;
  } else if (grossSalary > 500000 && grossSalary <= 800000) {
    return grossSalary * 0.32;
  } else {
    return grossSalary * 0.35;
  }
}

// NHIF calculation based on the KRA Site
function nHIFDeductions(grossSalary) {
  switch (true) {
    case grossSalary <= 5999:
      return 150;
      break;
    case grossSalary <= 7999:
      return 300;
      break;
    case grossSalary <= 11999:
      return 400;
      break;
    case grossSalary <= 14999:
      return 500;
      break;
    case grossSalary <= 19999:
      return 600;
      break;
    case grossSalary <= 24999:
      return 750;
      break;
    case grossSalary <= 29999:
      return 850;
      break;
    case grossSalary <= 34999:
      return 900;
      break;
    case grossSalary <= 39999:
      return 950;
      break;
    case grossSalary >= 100000:
      return 1700;
      break;
    default:
      return grossSalary * 0.025; // 2.5% for any other range
  }
}

//NSSF calculation
function nSSFContribution(basicSalary) {
  // getting the contribution rate and limits
  const tier1Rate = 0.06;
  const tier1Limit = 7000;
  const tier2Limit = 28000;

  // Tier 1 contribution
  let tier1Contribution = Math.min(basicSalary * tier1Rate, tier1Limit);

  // Tier 2 contribution
  let tier2Contribution = 0;
  if (basicSalarySalary > tier1Limit) {
    const excessSalary = basicSalary - tier1Limit;
    tier2Contribution = Math.min(excessSalary * tier1Rate, tier2Limit);
  }

  // Total NSSF contribution
  return tier1Contribution + tier2Contribution;
}
