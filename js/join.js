const form = document.querySelector("#join");
const btnSubmit = document.querySelector("input[type=submit]");
let toggleBtn = document.getElementById("toggleBtn");
let pwd = document.querySelector("#pwd1");

btnSubmit.addEventListener("click", (e) => {
  // 인증함수를 거쳐서 true 혹은 flase를 가지고 validation을 진행
  if (!isText("userid", 5)) e.preventDefault();
  if (!isText("user_name", 2)) e.preventDefault();

  if (!isEmail("email")) e.preventDefault();

  if (!isCheck("gender")) e.preventDefault();
  if (!isCheck("mail_agree")) e.preventDefault();
  if (!isCheck("sms_agree")) e.preventDefault();

  if (!isSelect("number")) e.preventDefault();
  if (!isSelect("birth_day")) e.preventDefault();

  if (!isPwd("pwd1", "pwd2", 8)) e.preventDefault();
});

// 1. type이 text인 form요소의 인증함수
function isText(el, len) {
  if (len === undefined) len = 5;

  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;

  if (txt.length >= len) {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`입력항목을 ${len}글자 이상 입력하세요.`);
    input.closest("td").append(errMsg);
    return false;
  }
}

// 2. type이 text인데 email 인증 함수
function isEmail(el) {
  let input = form.querySelector(`[name=${el}]`);
  let txt = input.value;
  if (/@/.test(txt)) {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input.closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`@를 포함한 전체 이메일 주소를 입력하세요.`);
    input.closest("td").append(errMsg);
    return false;
  }
}

// 3. checkbox 인증함수
function isCheck(el) {
  let input = form.querySelectorAll(`[name=${el}]`);

  let isCheck = false;

  for (let el of input) {
    if (el.checked) isCheck = true;
  }

  if (isCheck) {
    const isErrMsg = input[0].closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) input[0].closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = input[0].closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(`필수 입력항목을 체크해주세요.`);
    input[0].closest("td").append(errMsg);

    return false;
  }
}

// 4. passward 인증함수
function isPwd(el1, el2, len) {
  let pwd1 = form.querySelector(`[name=${el1}]`);
  let pwd2 = form.querySelector(`[name=${el2}]`);
  let pwd1_val = pwd1.value;
  let pwd2_val = pwd2.value;

  // 인증하기 위한 기준이 있어야 한다. 문자(알파벳), 숫자, 특수문자 등 조건을 정규표현식 변수로 저장한다.
  const num = /[0-9]/;
  const eng = /[a-zA-Z]/; //소문자 a-z 와 대문자 A-Z까지 전부 다!
  const spc = /[~!@#$%^&*()_+?><]/; // 특수문자는 들어가는 문자열을 전부 적어주면 된다. 개발자에 따라서 들어가는 특수문자가 다르기도 함. 딱히 정해진 규격이 없다.

  /*
  true || true = true
  true || false = true (자리가 바뀌어도 같다)
  false || false = false

  true && true = true
  true && false = false
  flase && flase = false
  */

  // 1. 두개의 비밀번호가 같아야한다. 2. 비밀번호의 글자수가 len개 이상. 3. 비밀번호의 num이 포함, 4. 비밀번호에 eng가 포함 5. 비밀번호에 spc가 포함 = 다섯개가 모두 포함되어야 true
  if (
    pwd1_val === pwd2_val &&
    pwd1_val.length >= len &&
    num.test(pwd1_val) &&
    eng.test(pwd1_val) &&
    spc.test(pwd1_val)
  ) {
    const isErrMsg = pwd1.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) pwd1.closest("td").querySelector("p").remove();
    return true;
  } else {
    const isErrMsg = pwd1.closest("td").querySelectorAll("p");
    if (isErrMsg.length > 0) return false;

    const errMsg = document.createElement("p");
    errMsg.append(
      `비밀번호는 ${len}글자 이상, 영문, 숫자, 특수문자를 포함하여 동일하게 입력하세요.`
    );
    pwd1.closest("td").append(errMsg);
    return false;
  }
}

toggleBtn.addEventListener("click", () => {
  // 클릭했을 때 password type을 text로 변경해서 비밀번호가 보이도록
  if (pwd.type === "password") {
    pwd.setAttribute("type", "text");
    // password의 type을 text로 변경
    toggleBtn.classList.add("hide");
  } else {
    pwd.setAttribute("type", "password");
    toggleBtn.classList.remove("hide");
  }
});
