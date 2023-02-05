
let counter = document.querySelector('#count');
let counterbtn = document.querySelectorAll('.counterbtn')

let count = 0
counterbtn.forEach((element) => {
    element.addEventListener('click',(e)=>{
        const styles = e.currentTarget.classList

        if(styles.contains('increment')){
            count++;
        }
        else if(styles.contains('decrement')){
            count--;
        }
        else{
            count = 0
        }

        if(count > 0){
            counter.style.color = 'Orange'
        }
        else if (count <0){
            counter.style.color = 'Crimson'
        }
        

        counter.textContent = count
    })
});


