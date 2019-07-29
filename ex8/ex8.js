$(document).ready(function() {
  var $btn = $("#btn"),
    $list = $("#list");

  var rsq = ASQ.react.of();
  var rsq_sampled = ASQ.react.of();

  $btn.click(function(evt) {
    rsq.push(evt);
    // TODO
  });


  setInterval(function(){
    if(){

    }
    rsq_sampled.push(rsq)
  }, 1000)
  rsq_sampled.react.throttle(rsq, 1000);

  // TODO: setup sampled sequence, populate $list
  rsq_sampled.val(() => {
    $list.append("clicked");
  });
});
