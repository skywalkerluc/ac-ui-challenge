// Yeah, as you can see, Angular2 is not being well used, I know. 
// I'm actually learning it without ever being in a project using it.

function locateWebSite() {
  $("#map").hide();
  var site = $("#iptWebSite").val();
  if (validateSite(site)) {
    getWebsiteLocationAPI(site);
  }
  else{
    $("#map").hide();
  }
}

function validateSite(site) {
  if (site == "") {
    createMessage("You must input some data to get a location");
    return;
  }

  substring = '.';
  if (site.indexOf(substring) == -1) {
    createMessage("You must input a valid site to get a location");
    return;
  }

  if (!validadeFormat(site)) {
    createMessage("You must input a valid site to get a location");
    return;
  }

  clearErrors();
  return true;
}

function validadeFormat(site) {
  var expss = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  var regex = new RegExp(expss);

  if (site.match(regex)) {
    return false;
  } else {
    return true;
  }
}

function clearErrors() {
  $("#msg").hide();
}

function createMessage(message) {
  var msg = document.getElementById('msg');
  msg.className = 'alert alert-danger';
  msg.innerHTML = message;
  $("#msg").show();
}

$("#iptWebSite").on('keyup', function(){
  $("#msg").hide();
});

