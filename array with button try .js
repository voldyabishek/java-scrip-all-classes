<html>
    <head>
        <title>array</title>
    </head>
      <body>
        <input type="text" name="" id="id1" ><br><br>
          <button onclick="add()">add</button>        
          <button onclick="delet()">delete</button>
          
      </body>
        <script>
          let data=[]
            function add()
                       {
                        let name=document.querySelector("#id1")
                        data.push(name.value)
                        console.log(data)
                       }
              function delet()
              {
                data.pop()
                console.log(data)
              }
                      
        </script>
  </html>
