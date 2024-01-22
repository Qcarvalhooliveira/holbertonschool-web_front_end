function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    var students = [];

    for (var i = 1; i <= numbersOfStudents; i++) {
        students.push(studentSeat(i));
    }

    return students;

}

var classRoom = createClassRoom(10);