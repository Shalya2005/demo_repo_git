function toggle(i,v)
    {
        var qty_id=v+"-qty";
        var amt_id=v+"-amt";
        if (document.getElementById(i).checked)
            {
                document.getElementById(qty_id).disabled=false;
            }
        else
            {
                document.getElementById(qty_id).disabled=true;
                document.getElementById(qty_id).value="";
                document.getElementById(amt_id).value="";
            }
    }
    
function amt_update(id)
    {
        var amt=document.getElementById(id).value;
        var cost=0;
        item=id.replace(/-|qty/g,"");
        switch(item)
            {
                case 'soap':cost=40;break;
                case 'rice':cost=50;break;
                case 'chocolate':cost=1;break;
                case 'milk':cost=42;break;
                default: cost=0;
            }
        document.getElementById(item+"-amt").value=amt*cost;         
    } 
    
function generate()
    {
        var total=0;
        var cgst,sgst=0;
        var gtotal=0;
        var cbs=document.querySelectorAll('input[type="checkbox"]');
        for(var i=0; i<cbs.length; i++)
            {
                if(document.getElementById(cbs[i].id).checked)
                    {
                        var item=cbs[i].id.replace(/chk/g,"");
                        total=total+parseFloat(document.getElementById(item+"-amt").value);
                    }
            }
        cgst=((total*8)/100);
        sgst=cgst;
        gtotal=total+cgst+sgst;
        document.getElementById("tot").innerHTML=total;
        document.getElementById("ctax").innerHTML=cgst.toFixed(2);
        document.getElementById("stax").innerHTML=sgst.toFixed(2);
        document.getElementById("gtot").innerHTML=gtotal.toFixed(2);
        document.getElementById("all_totals").style.visibility="visible";
    }
    
function clear_all()
    {
        var cbs=document.querySelectorAll('input[type="checkbox"]');
        for(var i=0; i<cbs.length; i++)
            {
                document.getElementById(cbs[i].id).checked=false;
                document.getElementById(cbs[i].id.replace(/chk/g,"")+"-qty").value="";
                document.getElementById(cbs[i].id.replace(/chk/g,"")+"-qty").disabled=true;
                document.getElementById(cbs[i].id.replace(/chk/g,"")+"-amt").value="";
            }
        document.getElementById("tot").innerHTML="";
        document.getElementById("ctax").innerHTML="";
        document.getElementById("stax").innerHTML="";
        document.getElementById("gtot").innerHTML="";
        document.getElementById("all_totals").style.visibility="hidden";
    }           
