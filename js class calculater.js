function button1(op){
    const tb=document.querySelector("input")
    console.log(tb.value)
    switch(op)
    {
        
        case 1:
            tb.value=tb.value+"1";
            break

        case 2:

            tb.value=tb.value+"2";
            break
        case 3:
            tb.value=tb.value+"3";
            break
        case 4:
            tb.value=tb.value+"4";
            break
        case 5:
            tb.value=tb.value+"5";
            break
        case 6:
            tb.value=tb.value+"6";
            break
        case 7:
            tb.value=tb.value+"7";
            break
        case 8:
            tb.value=tb.value+"8";
            break
        case 9:
            tb.value=tb.value+"9";
            break
        case '*':
            tb.value=tb.value+"*";
            break
        case '+':
            tb.value=tb.value+"+";
            break
        case '-':
            tb.value=tb.value+"-";
            break
        case '/':
            tb.value=tb.value+"/";
            break
        case '%':
            tb.value=tb.value+"%";
            break
        case '.':
            tb.value=tb.value+".";
            break
        
        case '=':
            tb.value=eval(tb.value);

        
            
        }
}
