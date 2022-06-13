 // Displays current day on top of page
 $('#currentDay').text(moment().format('dddd, MMMM Do'));

//  // Main scheduler function
//  $(document).ready(function() {
//   // Listens for click on the save button
//   $('.saveBtn').on('click', function() {
//       // When clicked, grabs value from description during said time-block
//       var value = $(this).siblings('.description').val();
//       var time = $(this).parent().attr('id');

//       // Saves user's description and time in local storage
//       localStorage.setItem(time, value);
//   });

//   // grabs saved data from localStorage
//   $('#hour-7 .description').val(localStorage.getItem('hour-7'));
//   $('#hour-8 .description').val(localStorage.getItem('hour-8'));
//   $('#hour-9 .description').val(localStorage.getItem('hour-9'));
//   $('#hour-10 .description').val(localStorage.getItem('hour-10'));
//   $('#hour-11 .description').val(localStorage.getItem('hour-11'));
//   $('#hour-12 .description').val(localStorage.getItem('hour-12'));
//   $('#hour-13 .description').val(localStorage.getItem('hour-13'));
//   $('#hour-14 .description').val(localStorage.getItem('hour-14'));
//   $('#hour-15 .description').val(localStorage.getItem('hour-15'));
//   $('#hour-16 .description').val(localStorage.getItem('hour-16'));
//   $('#hour-17 .description').val(localStorage.getItem('hour-17'));
//   $('#hour-18 .description').val(localStorage.getItem('hour-18'));
//   $('#hour-19 .description').val(localStorage.getItem('hour-19'));
//   $('#hour-20 .description').val(localStorage.getItem('hour-20'));
//   $('#hour-21 .description').val(localStorage.getItem('hour-21'));
//   $('#hour-22 .description').val(localStorage.getItem('hour-22'));
// });

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var instance = M.Tabs.init(el, options);
  });
  

M.AutoInit();