//changed appearance
drp1.onclick=function(s){
  if (typeof(s) == "object"){  // means control clicked but no selection made yet
    return                     // do nothing
  } else {
    drp1.value = s   // make dropdown show choice user made
    NSB.MsgBox(`You picked ${s}.`)
  }
}

//changed font style
rdo1.onclick=function(){
   console.log(`You picked ${$("input[name=rdo1]:checked").prop("value")}`)
   console.log(`The value is ${rdo1.value}`)
   if (rdo1.value == 0)
      NSB.MsgBox("You picked Item #1!")
   else 
      NSB.MsgBox("You picked Item #2!")
}

//changed appearance
ham1.onclick=function(s){    
    if (typeof(s) == "object") {
       return
    } else {
        switch(s) {
        case "Login":
            ChangeForm(login)
            break
        case "Welcome":
            ChangeForm(welcome)
            break
        case "Membership":
            ChangeForm(membership)  
            break
         case "Mad Libs":
            ChangeForm(ABMadLibs)  
            break
        }
    }
}

//changed font style
cbox1.onclick=function(){
   console.log(`You picked ${$("input[name=cbox1]:checked").prop("value")}`)
   console.log(`The value is ${cbox1.value}`)
   if (cbox1.value == 0)
      NSB.MsgBox("You picked Item #1!")
   else 
      NSB.MsgBox("You picked Item #2!")
      }
