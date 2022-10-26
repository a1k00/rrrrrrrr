
let pisicute= [
    {
        id:1,
        imag:"./ima2/daddy.png",
        lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. ",
    },
{
    id:2,
    imag:"./ima2/mommy.png",
    lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea.  ",
    
},
{
    id:3,
    lorem:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. Quaerat sequi eos rerum.Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate dolores saepe, in quod distinctio fuga molestiae repudiandae obcaecati hic, nesciunt nemo animi modi ab id ea. ",
    imag:"./ima2/sis.png",
    
    
}
]
let perso =document.querySelector(".onlly")
pisicute.forEach(element=>{
    console.log(element.id);
    let rock=(element.id==2)? "first":"second"
    console.log(rock)
    let lol=`
    <div class="${rock}">
    <p>${element.lorem}</p>
    <img src="${element.imag}">
  
    </div>
    `
    perso.innerHTML+=lol
})
perso.children[0].classList.add("app_first")
perso.children[1].classList.add("app_second")
perso.children[2].classList.add("app_third")