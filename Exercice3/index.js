// Créez votre fonction ici
function calculateAverage(array){
    if (array === undefined){
        return "No numbers to calculate average";
    }

    return (array.reduce((a, b) => a + b, 0))/array.length;
}

// Exemples d'utilisation de la fonction
console.log(calculateAverage([5, 10, 15])) // retourne 10
console.log(calculateAverage([10, 20, 30, 20])) // retourne 20
console.log(calculateAverage()) // No numbers to calculate average

export default calculateAverage
