const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

$(document).ready(function () {

    let title = ['Gamer', 'Programmer', 'Blogger', 'Content Creator', 'Full-Stack Designer'];

    setInterval(async function () {

        for (var i = 0; i < title.length; i++) {
            $('#random-title').text(title[i]).animate('typing 1s steps(30, end), blink .75s step-end infinite');
            await sleepNow(2000);
        }
    }, 15000);

});

