const schedule = { monday: { 1: "Математика", 2: "Фізика" }, tuesday: { 1: "Хімія", 2: "Історія" } };
// зверху можна добавити інші дні та предмети, за бажанням.
for (let day in schedule) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1) + ":");
    for (let lesson in schedule[day]) {
        console.log(Пара ${lesson}: ${schedule[day][lesson]});
    }
}
