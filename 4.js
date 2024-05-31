function intervalNumbers(start, end) {
    let current_num = start;

    let timerId = setInterval(function() {
        console.log(current_num);
        if (current_num == end) {
            clearInterval(timerId);
        }
        current_num++;
    }, 1000);
}

intervalNumbers(5, 15);
intervalNumbers(21, 35);