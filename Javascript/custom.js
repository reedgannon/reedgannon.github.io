$(document).ready(function(){
  /*
  alert("I am loaded");
  console.log("Hello World");
  */
  var firstName = "Reed"
  console.log('Hello'+firstName)

  $.ajax({
    url: 'https://randomuser.me/api/?results=50',
    dataType: 'json',
    success: function(data) {
      console.log(data);
      $.each(data.results, function(key,person){
        console.log(person.name.title + ' ' + person.name.first + ' '+ person.name.last);
        $('#person').append('<div class="col-md-2">'+ person.name.title + ' ' + person.name.first + ' '+ person.name.last + '<img src="'+ person.picture.large + '"class=" img-fluid rounded-circle">'+ '<i class="fab fa-twitter-square"</i>' + '  ' + '<i class="fab fa-facebook"</i>'+'</div>');
      })
    }
  });
});
