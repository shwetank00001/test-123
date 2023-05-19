

// const a = [ 1, 2, 3, 4, 5]



// a.map(function(x){
//     console.log(x-1)
// })


const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]

const ht = pokemon.map((tag)=>{
    return '<p>'+tag +'<p>'
})

console.log(ht)