function factoriel(num)
{
    let f = 1;
    for(let i = 1; i <= num; i++)
    {
        f = f* i;

    }
    return(f);
}

let userNumber = prompt("De quel nombre veux-tu calculer la factorielle ?");
console.log(factoriel(userNumber));