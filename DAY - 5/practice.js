 let mypromise = new Promise(function(resolve,reject){
     resolve("I won")
     reject("I tried")
 })
   



//  ******************************************/

    let passexam = false;
    let mypromise = new Promise( function (resolve,reject){
    if(passexam===true){
        resolve("you get watch , chocalate.")
    }
   

    else{
        reject("You get chappal")
    }

    });
    console.log(("mypromise:",mypromise))
    mypromise.then(function (res){
        console.log("res:",res)
    })
    mypromise.catch(function (error){
        console.log("error cming")
    })



    // *****************************************//

    let queue = ["Pablo","raju","shyam","babu"];
     function Register(){
         let name = document.getElementById("name").value;
         queue.push(name);
         let message = `${name}your registration is sucessful`;
         alert(message)
          
         
         let promise = new Promise(function (resolve,reject){
            let x = setInterval(function(){
                if(queue[0] === name)
                {
                    resolve(`${name} its your turn now`)
                    // clearInterval(x)
                }
            
            },1000)
            
         })
     
     
     promise.then(function(res){
         console.log("res:",res)
     })
    }

    function vacination_inprogress(){
        if(queue.length === 1)
        {
            clearInterval(id);
        }
        queue.shift();
        console.log("queue:",queue)
    }


    let id = setInterval(vacination_inprogress,2000)


    // ********************************************//


    function order(){
        let status = 'open'
        let order = document.getElementById('food').value
        let time = Math.round(Math.random()*5);
        let food_promise = new Promise(function (resolve,reject){
            setTimeout(function (){

                if(status==='open')
            {
                resolve(`${order} le bhai le`)
            }
            else
            {
                reject("told you, it was close")
            }

            },time*1000);
            
        });
        food_promise.then(function (res){
            console.log("res:",res)
        })
        food_promise.catch(function(err){
            console.log("err:",err)
        })
    }
