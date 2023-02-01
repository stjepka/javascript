var polaznici = [
    {
        name: 'Igor',
        surname: 'Boroja',
        age: 12,
    },
    {
        name: 'Ivan',
        surname: 'Munitić',
        age: 13,
    },
    {
        name: 'Aleks',
        surname: 'Ivanac',
        age: 15,
    },
    {
        name: 'Danijel',
        surname: 'Hrgić',
        age: 16,
    },
    {
        name: 'Darko',
        surname: 'Šušnjar',
    },
];

function checkAge(age) {
    if (age < 18){
        return ' je maloljetnik/-ca';
    }else if(age >= 18 && age < 67){
        return ' je punoljetnik/-ca';
    } else {
        return " je penzić";
    }
}

polaznici.forEach((polaznik) => {
    console.log("Ime: " + polaznik.name);
    console.log(checkAge(polaznik.age));
});

function checkAge(age, name, surname){
    var ageResponse = "";
    var fullName = name + " " + surname;

    switch(true){
        case age < 18:
            ageResponse = fullName + " je maloljetnik";
            break;
        case age >= 18 && age < 67:
            ageResponse = fullName + " je punoljwtnik";
            break;
        case age >= 67:
            ageResponse = fullName + " je penzić";
            break;
            default:
                ageResponse = "osoba se još nije rodila";
                break;
    }
    return ageResponse;
}
polaznici.forEach((polaznik) => {
    console.log("Ime: " + polaznik.name);
    console.log(checkAge(polaznik.age, polaznik.name, polaznik.surname));
});

/* ===
polaznici.forEach(function(polaznik){
    console.log(polaznik.name);
});*/