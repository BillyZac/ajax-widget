$(document).ready(function () {
  $.getJSON('../data/employees.json', function (data) {
    var statusHTML = '<ul class="bulleted">';
    $.each(data,function (index, employee) {
      if (employee.inoffice === true) {
        statusHTML +='<li class="in">';
      } else {
        statusHTML +='<li class="out">';
      }
      statusHTML += employee.name + '</li>';
    });
    statusHTML += '</ul>';
    $('#employeeList').html(statusHTML)
  }); // end getJSON
  
  
  
  $.getJSON('../data/rooms.json', function (data) {
    var roomsStatusHTML = '<ul class="rooms">';
    $.each(data, function (index, room) {
      if (room.available === true) {
        roomsStatusHTML +='<li class="empty">';
      } else {
        roomsStatusHTML +='<li class="full">';
      }
      roomsStatusHTML += room.room + '</li>';
    });
    roomsStatusHTML += '</ul>';
    $('#roomList').html(roomsStatusHTML)
  }); // end getJSON
  
  
  
  
  
  
}); // end ready