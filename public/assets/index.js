const sleepNow = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

(async () => {
    for (var i = 0; i < 4; i++) {

        $('.skill-list').addClass('hidden').removeClass('visible');

        switch (i) {
            case 0: {
                $('#list-programming').addClass('visible').removeClass('hidden');
                await sleepNow(2000);
                break;
            }
            case 1: {
                $('#list-games').addClass('visible').removeClass('hidden');
                await sleepNow(2000);
                break;
            }
            case 2: {
                $('#list-blog').addClass('visible').removeClass('hidden');
                await sleepNow(2000);
                break;
            }
            case 3: {
                $('#list-design').addClass('visible').removeClass('hidden');
                await sleepNow(2000);
                break;
            }
        }

    }
})();

$(document).ready(function () {
    setInterval(async function () {
        for (var i = 0; i < 4; i++) {

            $('.skill-list').addClass('hidden').removeClass('visible');

            switch (i) {
                case 0: {
                    $('#list-programming').addClass('visible').removeClass('hidden');
                    await sleepNow(2000);
                    break;
                }
                case 1: {
                    $('#list-games').addClass('visible').removeClass('hidden');
                    await sleepNow(2000);
                    break;
                }
                case 2: {
                    $('#list-blog').addClass('visible').removeClass('hidden');
                    await sleepNow(2000);
                    break;
                }
                case 3: {
                    $('#list-design').addClass('visible').removeClass('hidden');
                    await sleepNow(2000);
                    break;
                }
            }

        }
    }, 8000);
});

