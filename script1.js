const form = document.getElementById("eventorganizer");
const inputUser = document.getElementById("inputUser");
const inputevent = document.getElementById("inputevent");
const tanggal = document.getElementById("tanggal");
const waktu = document.getElementById("waktu");
const listGroup = document.getElementById("eventlist");
const kirim = document.getElementById("kirim");

var eo = document.getElementById("eo");
var public = document.getElementById("public");
var form1 = document.getElementById("form1");
var form2 = document.getElementById("form2");

eo.onclick = function () {
  form2.style.display = "none";
  form1.style.display = "block";
  kirim.name = "submiteo";
}
public.onclick = function () {
  form1.style.display = "none";
  form2.style.display = "block";
  kirim.name = "submitpublic";
}

form.submit.onclick = function (event) {
  var optionval = document.querySelector('input[name="option1"]:checked').value;
  if (kirim.name == "submiteo") {
    event.preventDefault();
  listGroup.innerHTML += `
  <table class="table table-striped table-hover"">
                <tbody class="list">
                  <tr>
                    <td><b>Event Organizer</b> : <br/>${inputUser.value}</td>
                    <td><b>Nama event</b>: <br/>${inputevent.value}</td>
                    <td><b>Tanggal Event</b>: <br/>${tanggal.value}</td>
                    <td><b>Waktu</b>: <br/>${waktu.value}</td>
                    <td>
                      <button type="button" class="btn btn-danger" id="delete-btn">Hapus</button>
                    </td>
                  </tr>
                </tbody>
              </table>`;
  inputUser.value = "";
  } else if (kirim.name == "submitpublic") {
    event.preventDefault();
  listGroup.innerHTML += `
  <table class="table table-striped table-hover"">
                <tbody class="list">
                  <tr>
                    <td><b>Username</b> : <br/>${form.username.value}</td>
                    <td><b>Game</b> : <br/>${optionval}</td>
                    <td></td>
                    <td></td>
                    <td>
                      <button type="button" class="btn btn-danger" id="delete-btn">Hapus</button>
                    </td>
                  </tr>
                </tbody>
              </table>`;
  }
  
};
listGroup.addEventListener("click", function (event) {
  if (event.target.id == "delete-btn") {
    event.target.parentElement.parentElement.parentElement.parentElement.remove();
  }
});
            