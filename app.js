let email = document.querySelector('.email');
let user = document.querySelector('.username');
let pswd = document.querySelector('.pswd');
let cpswd = document.querySelector('.confirmPswd');
let btn = document.querySelector('.btn');
let fm = document.querySelector('.form');
let tt = document.querySelector('.hidden');
let win = document.querySelector('.win');

console.log(btn.innerHTML);

btn.addEventListener("click",()=>{
    let u = checkUser(user.value);
    let e = checkEmail(email.value);
    let p = checkPswd(pswd.value, cpswd.value);
    console.log(u);
    if(u === true && e === true && p === true){
        alert("Yeah!!!! You have created your account.");
        win.classList.remove('win');
        win.classList.add('show');
        setTimeout(function() {
            win.classList.remove("show");
            win.classList.add("win");
        }, 2000);
    }else{
        let msg = "";
        if(u === false){
            let m = "Your UserName " + user.value + " is Incorrect, "
            msg += m;
        }
        if(e === false){
            let m = "Your email " + email.value + " is Incorrect, "
            msg += m;
        }
        if(p === false){
            let m = "Password issue";
            msg += m;
        }
        alert(`${msg}`);
        fm.classList.add('addanimation');
        tt.classList.add('show');
        tt.classList.remove('hidden');
        setTimeout(function() {
            fm.classList.remove("addanimation");
            tt.classList.remove("show");
            tt.classList.add("hidden");
        }, 600);
    }
})


function checkEmail(elementValue){
    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(elementValue);
}

function checkUser(name){
    let usernameRegex = /^[a-zA-Z0-9]+$/;
    let an =  usernameRegex.test(name);
    if(an === false || name.length < 2){
        return false;
    }
    return true;
}

function checkPswd(f, s){
    if(f.length < 4 || s.length < 4){
        return false;
    }
    if(f.length > 20 || s.length > 20){
        return false;
    }
    if(f===s){
        return true;
    }
    return false;
}