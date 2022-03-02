

function order(){
    var food_data = JSON.parse(localStorage.getItem("food_data"));
    

    let status = 'open'
    let order = document.getElementById('food').value
    
     
    // let time = Math.round(Math.random()*5);
    let food_promise = new Promise(function (resolve,reject){
        setTimeout(function (){

            if(status==='open')
        {
            resolve(food_data.map(function (data){
                var id = document.querySelector("#order_id")
                data.order_id=Math.round(Math.random()*2000)
                if(order==data.name){
                    var y = document.querySelector("#food_image")
                    id.textContent=data.order_id
                y.src=data.image_url
                document.querySelector("#container").append(y)
                
                console.log(y,id)
        
                }
                // else{
                //     y.src=data.select_image
                //     console.log(y)
                // }
                
            }))
            
            
        }
        else
        {
            reject("told you, it was close")
        }

        },5000);
        
    });
    food_promise.then(function (res){
        console.log("res:",res)
    })
    food_promise.catch(function(err){
        console.log("err:",err)
    })


    // select=[]



food_data = [

    {
        select_image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NV2Pw3ccR5TGT2BYNiIjhLszk7N5KujF4A&usqp=CAU"
    },
    
    {
        name:"coffee",
        order_id : "123456",
        image_url: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p.jpg"
    },
    {
        name : "burger",
        order_id : "789456",
        image_url : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCju2zbDRv6lX_3mjqxub2OXIQoSwamZSl4A&usqp=CAU"
    },
    {
        name:"pizza",
        order_id : "564874",
        image_url : "https://img.onmanorama.com/content/dam/mm/en/food/features/images/2021/10/17/pizza.jpg"
    }
    
]
localStorage.setItem("food_data",JSON.stringify(food_data))
// console.log(food_data)



 }