$(function () {
  // Slide element up to hide (over 2s)
  $(".blue-box").slideUp(5000);

  // Slide back down to show element
  $(".blue-box").slideDown(500);

  // Toggle sliding up/down depending on current state
  $(".blue-box").slideToggle(1000);
  $(".blue-box").slideToggle(1000);
});
