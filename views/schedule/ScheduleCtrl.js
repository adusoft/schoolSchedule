schoolScheduleApp.controller('ScheduleCtrl', function ($scope) {

  $scope.dayNames = ['Poniedziałek', 'Wtorek', 'Sroda', 'Czwartek', 'Piątek'];

  $scope.lessonTimes = (function () {
    var times = [];
    var dayStartDate = new Date();
    var dayEndDate = new Date();
    var lessonId = 1;

    dayStartDate.setHours(8);
    dayStartDate.setMinutes(0);
    dayStartDate.setSeconds(0);

    dayEndDate.setHours(16);
    dayEndDate.setMinutes(0);
    dayEndDate.setSeconds(0);

    var startDate = new Date(dayStartDate);
    var endDate = new Date();
    while (startDate < dayEndDate) {
      endDate.setTime(startDate.getTime() + 2700000);
      times.push({
        id: lessonId++,
        start: new Date(startDate),
        end: new Date(endDate)
      });
      startDate = new Date(endDate);
    }

    return times;
  })();

  $scope.getLessonFor = function(dayIndex, lessonId) {
    return _.filter($scope.lessons, function(item) {
      return item.day === dayIndex && _.contains(item.ids, lessonId);
    });
  };

  $scope.lessons = [
    {
      name: 'Matematyka',
      day: 1,
      ids: [1,2]
    },
    {
      name: 'Język polski',
      day: 0,
      ids: [2,3]
    },
    {
      name: 'Przyroda',
      day: 2,
      ids: [4,5,6]
    }
  ];

});