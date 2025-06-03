
function sendmain(){
    let send_details={
        from:document.getElementById('fname').value,
        email:document.getElementById('email').value,
        subject:document.getElementById('subject').value,
        comment:document.getElementById('comment').value
    }
    emailjs.send('service_kbder2m','template_mm2pl8a',send_details).then(but_property()).catch((error)=>{alert('error')},);
}

function but_property(){
    
    document.getElementById('send').style.display='none';
    document.getElementById('disSent').style.display='block';
}

function sendmain2(){
    let send_details={
        from:document.getElementById('fname2').value,
        email:document.getElementById('email2').value,
        subject:document.getElementById('subject2').value,
        comment:document.getElementById('comment2').value
    }
    emailjs.send('service_kbder2m','template_mm2pl8a',send_details).then(but_property2()).catch((error)=>{alert('error')},);
}

function but_property2(){
    
    document.getElementById('send2').style.display='none';
    document.getElementById('disSent2').style.display='block';
}
