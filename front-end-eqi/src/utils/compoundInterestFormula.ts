const compoundInterestFormula = (
  initialDeposit: string,
  monthlyDeposit: string,
  interestRate: string,
  investmentTime: string,
): number => {
  const initialDepositN = Number(initialDeposit);
  const monthlyDepositN = Number(monthlyDeposit);
  const interestRateN = Number(interestRate);
  const investmentTimeN = Number(investmentTime);

  return (
    initialDepositN * (1 + interestRateN) ** investmentTimeN +
    (monthlyDepositN *
      (1 + interestRateN) *
      ((1 + interestRateN) ** investmentTimeN - 1)) /
      interestRateN
  );
};

export default compoundInterestFormula;
