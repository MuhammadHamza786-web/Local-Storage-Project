let localStrValue=localStorage.getItem("users")

let users=[];

if(localStrValue){
    users=JSON.parse(localStrValue)
}


function userRegister(){
    let userName=document.getElementById("username").value;
    let userEmail=document.getElementById("useremail").value;
    let userPassword=document.getElementById("userpassword").value;


    let userobj={
        name:userName,
        email:userEmail,
        password:userPassword
    }
    
    users.push(userobj)

    let conertToString=JSON.stringify(users)

    localStorage.setItem("users",conertToString)
     
     window.location.href = "login.html";
}

console.log(users)


function loginUser(){
    let userEmail=document.getElementById("useremail").value;
    let userPassword=document.getElementById("userpassword").value;

    let currentUser=null;

    for(let i=0; i<users.length;i++){
        if(users[i].email == userEmail){
            currentUser = users[i];
            break;
        }
    }


    if(currentUser){

        if(currentUser.password == userPassword){
                  
            window.location.href = "dashboard.html"
        }else{
            alert("Password did not matched")
        }
    }else{
        alert("Account Not Register with this email")
    }
}




