function attachEventsListeners() {
    const cfg = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };
    function convert(value, unit) {
        const inDays = value / cfg[unit];

        return {
            days: inDays,
            hours: inDays * cfg.hours,
            minutes: inDays * cfg.minutes,
            seconds: inDays * cfg.seconds
        };
    }
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');
    const button = document.querySelectorAll('input[type="button"]');

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            const input = e.target.parentElement.querySelector('input[type="text"]');
            const inputValue = Number[input.value];
            const time = convert(inputValue, input.id)
            days.value = time.days;
            hours.value = time.hours;
            minutes.value = time.minutes;
            seconds.value = time.seconds
        }
    }
}
// One day is equal to 24 hours/1440 minutes/86400 seconds