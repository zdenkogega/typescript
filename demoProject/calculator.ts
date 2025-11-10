// data:
// initial amount
// annual contributioon
// expected return
// duration

type InvestmentData = {
    initialAmount: number;
    annualContribution: number;
    expectedReturn: number; // as a percentage
    duration: number; // in years
};

type InvestmentResult = {
    year: string;
    totalAmount: number;
    totalContributions: number;
    totalInteresEarned: number;
};

type CalculationResult = InvestmentResult[] | string;

function calculateInvestment(data: InvestmentData): CalculationResult {
    const { initialAmount, annualContribution, expectedReturn, duration } = data;

    if (initialAmount < 0) {
        return "Initial amount must be at least zero!"
    }

    if (duration <= 0) {
        return "No valid amount of years provided!"
    }

    if (expectedReturn < 0) {
        return "Expected return must be at least zero!"
    }

    let total = initialAmount;
    let totalContributions = 0;
    let totalInteresEarned = 0;

    const annualResults: InvestmentResult[] = [];

    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedReturn);
        totalInteresEarned = total - initialAmount - initialAmount;
        totalContributions += totalContributions + annualContribution;
        total = total + annualContribution;

        annualResults.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalInteresEarned,
            totalContributions,
        });
    }

    return annualResults;
}

function printResults(results: CalculationResult) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }

    for (const yearEndResult of results) {
        console.log(yearEndResult.year);
        console.log(`Total: ${yearEndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contributions: ${yearEndResult.totalContributions.toFixed(0)}`);
        console.log(`Total interest earned: ${yearEndResult.totalInteresEarned.toFixed(0)}`);
        console.log("----------------------------------------");
    }
}

const investmentData: InvestmentData = {
    initialAmount: 1000,
    annualContribution: 100,
    expectedReturn: 0.05,
    duration: 10,
}

const results = calculateInvestment(investmentData)

printResults(results);