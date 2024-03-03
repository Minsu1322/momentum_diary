const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");
const logOut = document.querySelector("#Log-out");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(evevt){
  evevt.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintGreetings(username);
}

function paintGreetings(username){
  greeting.innerText = `안녕하세요! ${username}님!!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

function LogOutId(){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  localStorage.clear();
  greeting.innerText="";
  loginInput.value="";
}

logOut.addEventListener("click", LogOutId);

const savedUserName = localStorage.getItem(USERNAME_KEY);

if(savedUserName === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}
else{
  paintGreetings(savedUserName);
}

