/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function search (animals, animalName){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === animalName){
            return animals[i]
    }
}
return null
}

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 function replace(animals, name, replacement){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals[i] = replacement;
            return; 
        }
    }
 }


//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function remove(animals, name){
    for(var i = 0; i < animals.length; i++){
        if(animals[i].name === name){
            animals.splice(i, 1);
            return;
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
function add(animals, animal){
    if (!animal.name || animal.length === 0){
        return;
    } if (!animal.species || animal.species.length === 0){
        return;
    }
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === animal.name){
            return
        }
    }

    animals.push(animal);

}


/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}