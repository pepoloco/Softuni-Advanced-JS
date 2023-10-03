function attachEventsListeners() {

    const config = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400,
    };
    function convert(value, unit) {
        const inDays = value / config[unit]

        return {
            days: inDays,
            hours: inDays * config.hours,
            minutes: inDays * config.minutes,
            seconds: inDays * config.seconds,
        };
    }
    const days = document.getElementById('days');
    const hours = document.getElementById('hours');
    const minutes = document.getElementById('minutes');
    const seconds = document.getElementById('seconds');

    document.querySelector('main').addEventListener('click', onClick);
    function onClick(e) {
        if (e.target.tagName === "INPUT" && e.target.type === "button") {
            const input = e.target.parentElement.querySelector('input[type="text"]');
            const inputValue = Number(input.value);
            const time = convert(inputValue, input.id)
            days.value = time.days;
            hours.value = time.hours;
            minutes.value = time.minutes;
            seconds.value = time.seconds
        }
    }
}
attachEventsListeners();// One day is equal to 24 hours/1440 minutes/86400 seconds