// Obtener elementos del DOM
const hourlyForm = document.getElementById('hourly-form');
const hourlyResult = document.getElementById('hourly-result');
const weeklyForm = document.getElementById('weekly-form');
const weeklyResult = document.getElementById('weekly-result');
const biweeklyForm = document.getElementById('biweekly-form');
const biweeklyResult = document.getElementById('biweekly-result');
const monthlyForm = document.getElementById('monthly-form');
const monthlyResult = document.getElementById('monthly-result');

// Calcular ingresos por hora a la semana
hourlyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const hourlyRate = parseFloat(hourlyForm.hourlyRate.value);
  const hoursPerWeek = parseFloat(hourlyForm.hoursPerWeek.value);

  const weeklyIncome = hourlyRate * hoursPerWeek;
  hourlyResult.textContent = `Ingreso semanal: $${weeklyIncome.toFixed(2)}`;
});

// Calcular ingresos por semana al año
weeklyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const weeklyRate = parseFloat(weeklyForm.weeklyRate.value);
  const weeksPerYear = parseFloat(weeklyForm.weeksPerYear.value);

  const yearlyIncome = weeklyRate * weeksPerYear;
  weeklyResult.textContent = `Ingreso anual: $${yearlyIncome.toFixed(2)}`;
});

// Calcular ingresos por quincena al año
biweeklyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const biweeklyRate = parseFloat(biweeklyForm.biweeklyRate.value);
  const biweeksPerYear = parseFloat(biweeklyForm.biweeksPerYear.value);

  const yearlyIncome = biweeklyRate * biweeksPerYear;
  biweeklyResult.textContent = `Ingreso anual: $${yearlyIncome.toFixed(2)}`;
});

// Calcular ingresos por mes al año
monthlyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const monthlyRate = parseFloat(monthlyForm.monthlyRate.value);
  const monthsPerYear = parseFloat(monthlyForm.monthsPerYear.value);

  const yearlyIncome = monthlyRate * monthsPerYear;
  monthlyResult.textContent = `Ingreso anual: $${yearlyIncome.toFixed(2)}`;
});
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
});
