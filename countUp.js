function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
let triggered = false;

    const athleteCounter = document.getElementById("athletes");
const wins = document.getElementById("wins");
const hp = document.getElementById("housePoints");

    document.addEventListener('scroll', function () {
    if(isInViewport(athleteCounter) && triggered==false){
        animateValue(athleteCounter, 0, 100, 3000);
    }
    if(isInViewport(wins) && triggered==false){
        animateValue(wins, 0, 500, 3000);
    }
        if(isInViewport(hp) && triggered==false){
            animateValue(hp, 0, 20000, 3000);
            triggered=true;
        }
});

