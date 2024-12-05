let population = 100;
let economy = 100;
let happiness = 50;
let factories = 0;
let oilRigs = 0;
let tanks = 0;
let ships = 0;
let soldiers = 0;

function startGame() {
    const countryName = document.getElementById('country-name').value;
    const ideology = document.getElementById('ideology').value;
    const flagFile = document.getElementById('flag-upload').files[0];

    if (!countryName || !flagFile) {
        alert("Пожалуйста, введите название страны и загрузите флаг.");
        return;
    }

    document.getElementById('display-country-name').innerText = countryName;

    // Установка начальных значений в зависимости от идеологии
    switch (ideology) {
        case 'communism':
            population = 10000;
            break;
        case 'republicanism':
            economy += 65;
            break;
        case 'monarchism':
            population += 5000;
            economy += 40;
            break;
        case 'democracy':
            happiness += 100;
            break;
        case 'fascism':
            economy += 100;
            tanks++;
            break;
        case 'imperialism':
		    economy += 1000;
            ships++;
            break;
    }

    // Установка флага
    const reader = new FileReader();
    reader.onload = function (e) {
        document.getElementById('country-flag').src = e.target.result;
    }
    reader.readAsDataURL(flagFile);

    // Показать главное меню
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('main-menu').style.display = 'block';

    updateStats();
}

function updateStats() {
    document.getElementById('population').innerText = population;
    document.getElementById('economy').innerText = economy;
    document.getElementById('happiness').innerText = happiness;

    // Увеличение населения каждые 5 минут
    setInterval(() => {
        population *= 1.1; // Увеличиваем на 10%
        updateStats();
    }, 300000); // 5 минут в миллисекундах
}

function showInternalAffairs() {
    document.getElementById('internal-affairs').style.display = 'block';
}

function showArmy() {
    document.getElementById('army').style.display = 'block';
}

function backToMainMenu() {
    document.getElementById('internal-affairs').style.display = 'none';
    document.getElementById('army').style.display = 'none';
}

function buyFactory() {
    if (economy >= 500) {
        economy -= 500;
        factories++;
        updateStats();
        alert("Вы купили завод!");
    } else {
        alert("Недостаточно экономики для покупки завода.");
    }
}

function buyOilRig() {
    if (economy >= 100) {
        economy -= 100;
        oilRigs++;
        updateStats();
        alert("Вы купили нефтяную вышку!");
    } else {
        alert("Недостаточно экономики для покупки нефтяной вышки.");
    }
}

function buyTank() {
    if (economy >= 200) {
        economy -= 200;
        tanks++;
        updateStats();
        alert("Вы купили танк!");
    } else {
        alert("Недостаточно экономики для покупки танка.");
    }
}

function buyShip() {
    if (economy >= 300) {
        economy -= 300;
        ships++;
        updateStats();
        alert("Вы купили корабль!");
    } else {
        alert("Недостаточно экономики для покупки корабля.");
    }
}

function buySoldier() {
    if (economy >= 100) {
        economy -= 100;
        soldiers++;
        updateStats();
        alert("Вы купили пехоту!");
    } else {
        alert("Недостаточно экономики для покупки пехоты.");
    }
}
