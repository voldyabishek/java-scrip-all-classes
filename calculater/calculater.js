
function button1(btn)
{
    let input = document.querySelector("input")
    let a;
    switch(btn)
    {
        case '1':
            a= '1'
            break;
        case '2':
            a= '2'
            break;
        case '3':
           a='3'
           break;
        case'4':
           a='4'
           break;
        case'5':
          a='5'   
          break;
        case'6':
           a='6'
           break;
        case'7':
           a='7'
           break;
       case'8':
           a='8'
           break;
      case'9':
           a='9'
           break;
      case'0':
           a='0'
           break;  

        case '+':
            a = '+'
            break;
        case '-':
            a='-'
            break;
        case'*':
          a='*'
          break;
        case'/':
          a='/'
          break;
       
        case'AC':
           a='clear'
           break;
    }
    input.value=input.value+a


}
function submit()
{
    let input = document.querySelector("input")
    input.value= eval(input.value)
}
