// Динамический расчет точного стажа (с Августа 2025 года)
document.addEventListener("DOMContentLoaded", () => {
    const startDate = new Date(2025, 7); // Август 2025 (Месяцы в JS начинаются с 0)
    const currentDate = new Date();
    
    let diffMonths = (currentDate.getFullYear() - startDate.getFullYear()) * 12 + (currentDate.getMonth() - startDate.getMonth());
    
    let years = Math.floor(diffMonths / 12);
    let months = diffMonths % 12;
    
    let expString = "";
    if (years > 0) {
        expString += `${years} ${getNoun(years, 'год', 'года', 'лет')}`;
    }
    if (months > 0) {
        expString += ` ${months} ${getNoun(months, 'мес.', 'мес.', 'мес.')}`;
    }

    /* ИДЕЯ ДЛЯ УЛУЧШЕНИЯ: Автоматически обновлять текст в DOM-элементе, 
       чтобы ручками не менять дату на сайте каждый месяц */
    const counterEl = document.getElementById("experience-counter");
    if (counterEl && expString) {
        counterEl.textContent = expString;
    }
});

function getNoun(number, one, two, five) {
    let n = Math.abs(number);
    n %= 100;
    if (n >= 5 && n <= 20) return five;
    n %= 10;
    if (n === 1) return one;
    if (n >= 2 && n <= 4) return two;
    return five;
}