let members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]

btnSubmit1.onclick=function(){
  var isMember= members.includes(inptFirstName.value)
  if (isMember==true){
    lblCheck.value=`Hi ${inptFirstName.value}, you are a member.`
  }
  else{
    lblCheck.value=`Hi, ${inptFirstName.value}, you are not a member, but we will make you one.`
    members.push(inptFirstName.value)
  }
}

