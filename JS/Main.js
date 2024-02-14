const x = document.querySelector(".cont");
const e = document.querySelector("d1");
const y = document.getElementById("i1")
const z = document.querySelectorAll(".page")
y.addEventListener("click", () => {
    x.style.display = "flex"
})

z.forEach(a => {
    a.addEventListener("click", () => {
        x.style.display = "none"
    })
})

    document.getElementById("addTask").addEventListener("click", function(event){
            event.preventDefault(); 
            
            let taskName = prompt("Enter the task name:"); 
            if(taskName) {
                let newTask = document.createElement("li"); 
                let x = document.createElement("button");
                newTask.innerHTML = '<a href = "#">' + taskName + '</a>'; 
                x.innerHTML = "delete";
                newTask.appendChild(x);
                document.querySelector(".taskside").appendChild(newTask);
                x.addEventListener("click",()=>{
                    newTask.remove();
                });
            }
        });

        let mot = document.getElementById("motive");
        let messeges = ["If you are working on something that you really care about, you dont have to be pushed. The vision pulls you.","Hard work beats talent when talent doesnt work hard.","Striving for success without hard work is like trying to harvest where you havent planted.","Success is the sum of small efforts, repeated day in and day out."] 
        let index = Math.floor(Math.random()*messeges.length);
        let messege = messeges[index];
        mot.innerText = messege;


        let myname = prompt("Enter name:");
        let c = document.getElementById("title");
        c.innerHTML = "My name is " + myname;

    