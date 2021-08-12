function validaCampos() {
    // alert("teste");
    var todasRegras = true;
    // alert("Teste4")
    var name = document.getElementById("name").value;
    // alert("Teste6")
    if (!(name.length>=10 && name.length<=80)) {
        todasRegras = false;
    }
    // alert("Teste9")
    var nickname = document.getElementById("nickname").value;
    if (!(nickname.length>=2 && nickname.length<=20)) {
        todasRegras = false;
    }

    var day = document.getElementById("day").value;
    if (!(day>=1 && day<=31)) {
        todasRegras = false;
    }

    var month = document.getElementById("month").value;
    if (!(month>=1 && month<=12)) {
        todasRegras = false;
    }
    // alert("Teste24")
    var year = document.getElementById("year").value;
    if (!(year>=1900 && year<=2021)) {
        todasRegras = false;
    }

    var cpf = document.getElementById("cpf");
    if (!(cpf.value.length==14 && !cpf.validity.patternMismatch)) {
         todasRegras = false;
    }

    var team_id = document.getElementById("team_id").value;
    if (!(team_id != null)) {
        todasRegras = false;
    }
    

    var sportsList = document.getElementsByName("sport");
    var marcado = false
    if(sportsList[0].checked) {
        marcado = true;
    } else 

    if(sportsList[1].checked) {
        marcado = true;
    } else 

    if(sportsList[2].checked) {
        marcado = true;
    } else

    if(sportsList[3].checked) {
        marcado = true;
    } else

    if(sportsList[4].checked) {
        marcado = true;
    } else

    if(sportsList[5].checked) {
        marcado = true;
    } else

    if(sportsList[6].checked) {
        marcado = true;
    }

    if (!marcado) {
        todasRegras = false;
    }

    var resultado = document.getElementById("resultado");
    resultado.innerHTML = todasRegras;
    // alert("Teste44")

    return todasRegras;

}

function retornaJSON() {

    var obj_form = {
        name: "",
        nickname: "",
        day: 0,
        month: 0,
        year: 0,
        cpf: "",
        team_id: "",
        sport: []
      }

      obj_form.name = document.getElementById("name").value;
      obj_form.nickname = document.getElementById("nickname").value;
      obj_form.day = document.getElementById("day").value;
      obj_form.month = document.getElementById("month").value;
      obj_form.year = document.getElementById("year").value;
      obj_form.cpf = document.getElementById("cpf").value;
      obj_form.team_id = document.getElementById("team_id").value;

      var sportsList = document.getElementsByName("sport");

      if(sportsList[0].checked) {
          obj_form.sport.push(sportsList[0].id)
      }

      if(sportsList[1].checked) {
        obj_form.sport.push(sportsList[1].id)
      }

      if(sportsList[2].checked) {
        obj_form.sport.push(sportsList[2].id)
      }

      if(sportsList[3].checked) {
        obj_form.sport.push(sportsList[3].id)
      }

      if(sportsList[4].checked) {
        obj_form.sport.push(sportsList[4].id)
      }

      if(sportsList[5].checked) {
        obj_form.sport.push(sportsList[5].id)
      }

      if(sportsList[6].checked) {
        obj_form.sport.push(sportsList[6].id)
      }

      var json = JSON.stringify(obj_form);
      var resultado = document.getElementById("resultado");
      resultado.innerHTML = json;
}
