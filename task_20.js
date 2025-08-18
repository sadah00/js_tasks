function getGrossSalary(basicSalary, benefits) {
    return basicSalary + benefits;
}

function calculate_nhif(gross_salary) {
    // Kenya NHIF rates as per 2024 (simplified)
    if (gross_salary <= 5999) return 150;
    if (gross_salary <= 7999) return 300;
    if (gross_salary <= 11999) return 400;
    if (gross_salary <= 14999) return 500;
    if (gross_salary <= 19999) return 600;
    if (gross_salary <= 24999) return 750;
    if (gross_salary <= 29999) return 850;
    if (gross_salary <= 34999) return 900;
    if (gross_salary <= 39999) return 950;
    if (gross_salary <= 44999) return 1000;
    if (gross_salary <= 49999) return 1100;
    if (gross_salary <= 59999) return 1200;
    if (gross_salary <= 69999) return 1300;
    if (gross_salary <= 79999) return 1400;
    if (gross_salary <= 89999) return 1500;
    if (gross_salary <= 99999) return 1600;
    else return 1700;
}

// Example usage:
let basicSalary = 25000;
let benefits = 5000;
let grossSalary = getGrossSalary(basicSalary, benefits);
let nhif = calculate_nhif(grossSalary);

console.log("Gross Salary:", grossSalary);
console.log("NHIF:", nhif);

// TASK 16: NSSF calculation
function getNSSF(grossSalary) {
    let cappedSalary = Math.min(grossSalary, 18000);
    return cappedSalary * 0.06;
}

let nssf = getNSSF(grossSalary);
console.log("NSSF:", nssf);

// Task 17: NHDF calculation
function getNHDF(grossSalary) {
    return grossSalary * 0.015;
}
let nhdf = getNHDF(grossSalary);
console.log("NHDF:", nhdf);

// Task 18: Taxable Income calculation
function getTaxableIncome(grossSalary, nssf, nhdf, nhif) {
    return grossSalary - (nssf + nhdf + nhif);
}
let taxableIncome = getTaxableIncome(grossSalary, nssf, nhdf, nhif);
console.log("Taxable Income:", taxableIncome);

// Task 19: PAYEE calculation (Kenya PAYE rates simplified for 2024)
function getPAYEE(taxableIncome) {
    let payee = 0;
    if (taxableIncome <= 24000) {
        payee = taxableIncome * 0.1;
    } else if (taxableIncome <= 32333) {
        payee = (24000 * 0.1) + ((taxableIncome - 24000) * 0.25);
    } else {
        payee = (24000 * 0.1) + ((32333 - 24000) * 0.25) + ((taxableIncome - 32333) * 0.3);
    }
    return payee;
}
let payee = getPAYEE(taxableIncome);
console.log("PAYEE:", payee);

// Task 20: Net Salary calculation
function getNetSalary(grossSalary, nhif, nhdf, nssf, payee) {
    return grossSalary - (nhif + nhdf + nssf + payee);
}
let netSalary = getNetSalary(grossSalary, nhif, nhdf, nssf, payee);
console.log("Net Salary:", netSalary);
