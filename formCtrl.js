app.controller("formCtrl", function($scope){
  $scope.student = {
    firstName: "First",
    lastName: "Last",
    mathGrade: "0",
    scienceGrade: "0",
    englishGrade: "0",
    comment: "comments",
    fullName: function () {
      var x = $scope.student;
      return x.firstName + " " + x.lastName;
    }
  };

});
