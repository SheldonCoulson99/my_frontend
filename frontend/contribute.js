let rect = document.getElementsByClassName("ContributionCalendar-day");
for (let i = 0; i < rect.length - 5; i++) {
    let num = Math.floor(Math.random() * 4) + 1;
    i % Math.abs(Math.floor(Math.random() * 10) - Math.floor(Math.random() * 10) + 1) ? rect[i].attributes["data-count"].value = Math.floor(Math.random() * 10) + 1 : rect[i].attributes["data-count"].value = Math.floor(Math.random() * 10) * 4;
    let color = rect[i].attributes["data-count"].value;
    if (color > 1 && color <= 10) {
        rect[i].attributes["data-level"].value = 1;
    } else if (color > 10 && color <= 15) {
        rect[i].attributes["data-level"].value = 2;
    } else if (color > 15 && color <= 20) {
        rect[i].attributes["data-level"].value = 3;
    } else if (color > 20) {
        rect[i].attributes["data-level"].value = 4;
    } else {
        rect[i].attributes["data-level"].value = 0;
    }
}