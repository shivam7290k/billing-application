
function order1()
{
    let total=0;
    if(document.getElementById("tea").checked)
    {
        total=total+50;
    }
    if(document.getElementById("coffee").checked)
    {
        total=total+100;
    }
    if(document.getElementById("pizza").checked)
    {
        total=total+250;
    }
    if(document.getElementById("cold").checked)
    {
        total=total+100;
    }
    if(document.getElementById("burger").checked)
    {
        total=total+80;
    }
    document.getElementById("total").value=total
    alert("thankyou for coming.....have a nice day!!!")
}
