// ===== WebSocket Actions ===== //
function ws_connected() {}

// ===== Startup ===== //
window.addEventListener("load", function() {
  E("send").onclick = function() {
    var input = E("input").value;

    E("output").innerHTML += "# " + input + "<br>";

    E("reconnect").onclick = ws_init;

    ws_send(input, function(msg) {
      log(msg);
      E("output").innerHTML += msg.replace(/\n/g, "<br>");
      E("output").scrollTop = E("output").scrollHeight;
    });
  };

  E("clear").onclick = function() {
    E("output").innerHTML = "";
  };

  ws_init();
}, false);