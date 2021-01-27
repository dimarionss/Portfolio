// Valide Login======================================================
function validForm() {
  var x, text, textmail;
  x = document.getElementById("pass").value;
  if (x.length < 4) {
    text = "Пароль не может быть менее 4 символов";
    document.getElementById("textpass").innerHTML = text;
    return false;
  } else {
    text = "Пароль проверен";
    document.getElementById("textpass").innerHTML = text;
  }
  var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var email = document.getElementById('email');
  if (!reg.test(email.value)) {
    textmail = "Не корректный email";
    document.getElementById("textemail").innerHTML = textmail;
    return false;
  } else {
    textmail = "Email введен верно";
    document.getElementById("textemail").innerHTML = textmail;
  }
}






// Valide search======================================================
function validSeacrh() {
  var x, txtseacrh;
  x = document.getElementById("search").value;
  if (x.length < 2) {
    txtseacrh = "Для поиска нужно ввести минимум 2 символа";
    document.getElementById("textsearch").innerHTML = txtseacrh;
    return false;
  } else {
    txtseacrh = "Подождите выполняется поиск.....";
    document.getElementById("textsearch").innerHTML = txtseacrh;
  }

}




// Mask phone======================================================
$(function () {
  //2. Получить элемент, к которому необходимо добавить маску
  $(".phone_mask").mask("+38(999) 999 - 99 - 99");
});





// Valide Mail======================================================
function validMail() {
  var textmail;
  var reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  var email = document.getElementById('mailsend');
  if (!reg.test(email.value)) {
    textmail = "Не корректный email";
    document.getElementById("mailtext").innerHTML = textmail;
    return false;
  } else {
    // textmail = "Вы успешно подписаны на рассылку";
    document.getElementById("myForm").style.display = "block"
    // document.getElementById("mailtext").innerHTML = textmail;
  }


}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}


// reset filter ==========================================================
let form = document.forms['some-form'];
form.addEventListener('submit', form_submitHandler);

function form_submitHandler({
  target
}) {
  target.reset();
}




// increment cart ==========================================================
function incrementOne(lnk_obj) {
  let count = document.getElementById("inkrementOnespan");
  let countPlus = 0;
  if (+countPlus <= 3) {
    count.innerHTML++;
  }
  lnk_obj.innerHTML = 'В сравнении'
}


function incrementTwo(lnk_obj) {
  let count = document.getElementById("inkrementTwospan");
  let countPlus = 0;
  if (+countPlus <= 3) {
    count.innerHTML++;
  }
  lnk_obj.textContent = 'В избранном'
}