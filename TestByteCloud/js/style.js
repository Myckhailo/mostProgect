let bunny_storage = 'hdd'
let scaleway_storage = 'multi'
    // Set default values for providers
const providers = [{
        backblaze: {
            name: "Backblaze",
            minPayment: 7,
            storageCost: 0.005,
            transferCost: 0.01,
            storageType: null,
            serverType: null,
        }
    },
    {
        bunny: {
            name: "Bunny",
            maxPayment: 10,
            storageCost: {
                hdd: 0.01,
                ssd: 0.02,
            },
            transferCost: 0.01,
            storageType: "hdd",
            serverType: null,
        }
    },
    {
        scaleway: {
            name: "Scaleway",
            storageCost: {
                multi: { free: 75, cost: 0.06 },
                single: { free: 75, cost: 0.03 },
            },
            transferCost: { free: 75, cost: 0.02 },
            storageType: null,
            serverType: "multi",
        }
    },
    {
        vultr: {
            name: "Vultr",
            minPayment: 5,
            storageCost: 0.01,
            transferCost: 0.01,
            storageType: null,
            serverType: null,
        }
    }
];


function outputUpdate(vol) {
    let i = 1
    let output = document.querySelector("#volume");
    output.value = vol;
    output.style.left = vol - 20 + "px";

    let volum = document.querySelector("#volum").value;
    providers.forEach(el => {
        let formula
        let min_payment
        if (i == 1) {
            formula = (output.value * el.backblaze.storageCost) + (volum * el.backblaze.transferCost)
            min_payment = el.backblaze.minPayment
        }
        if (i == 2) {
            formula = (output.value * el.bunny.storageCost[bunny_storage]) + (volum * el.bunny.transferCost);
        }
        if (i == 3) {
            console.log(el.scaleway.transferCost.cost)
            let storageCost
            let transferCost
            if (output.value < 75) storageCost = 0
            else storageCost = output.value - 75
            if (volum < 75) transferCost = 0
            else transferCost = volum - 75
            formula = (storageCost * el.scaleway.storageCost[scaleway_storage].cost) + (transferCost * el.scaleway.transferCost.cost);
        }
        if (i == 4) {
            formula = (output.value * el.vultr.storageCost) + (volum * el.vultr.transferCost);
            min_payment = el.vultr.minPayment
        }
        if (i == 1) {
            if (formula < min_payment) {
                document.querySelector(`.bar${i}`).style.width = "200px";
                document.querySelector(`.second-section__result${i}`).innerHTML = min_payment + "$"
            } else {
                let width = (formula - 7) * 50 + 50;
                document.querySelector(`.bar${i}`).style.width = `${width}px`;
                document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
            }
        }
        if (i == 4) {
            if (formula < min_payment) {
                document.querySelector(`.bar${i}`).style.width = "130px";
                document.querySelector(`.second-section__result${i}`).innerHTML = min_payment + "$"
            } else {
                let width = (formula - 7) * 50 + 50;
                document.querySelector(`.bar${i}`).style.width = `${width}px`;
                document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
            }
        }
        if (i == 3) {
            let width = (formula - 7) * 50 + 50;
            document.querySelector(`.bar${i}`).style.width = `${width}px`;
            document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
        }
        if (i == 2) {
            if (formula > 10) {
                document.querySelector(`.bar2`).style.width = "250px";
                document.querySelector(`.second-section__result2`).innerHTML = 10 + "$"
            } else {
                let width = formula * 30
                document.querySelector(`.bar2`).style.width = `${width}px`;
                document.querySelector(`.second-section__result2`).innerHTML = Math.floor(formula) + "$"
            }
        }
        i++
    })
}

function outputUpdate1(vol) {
    let i = 1

    let output = document.querySelector("#volum");
    output.value = vol;
    output.style.left = vol - 20 + "px";

    let volume = document.querySelector("#volume").value;
    providers.forEach(el => {
        let formula
        let min_payment
        if (i == 1) {
            formula = (output.value * el.backblaze.storageCost) + (volume * el.backblaze.transferCost)
            min_payment = el.backblaze.minPayment
        }
        if (i == 2) {
            formula = (output.value * el.bunny.transferCost) + (volume * el.bunny.storageCost[bunny_storage]);
        }
        if (i == 3) {
            console.log(el.scaleway.transferCost.cost)
            let storageCost
            let transferCost
            if (volume < 75) storageCost = 0
            else storageCost = volume - 75
            if (output.value < 75) transferCost = 0
            else transferCost = output.value - 75
            formula = (storageCost * el.scaleway.storageCost[scaleway_storage].cost) + (transferCost * el.scaleway.transferCost.cost);
        }
        if (i == 4) {
            formula = (output.value * el.vultr.storageCost) + (volume * el.vultr.transferCost);
            min_payment = el.vultr.minPayment
        }
        if (i == 1) {
            if (formula < min_payment) {
                document.querySelector(`.bar${i}`).style.width = "200px";
                document.querySelector(`.second-section__result${i}`).innerHTML = min_payment + "$"
            } else {
                let width = (formula - 7) * 50 + 50;
                document.querySelector(`.bar${i}`).style.width = `${width}px`;
                document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
            }
        }
        if (i == 4) {
            if (formula < min_payment) {
                document.querySelector(`.bar${i}`).style.width = "130px";
                document.querySelector(`.second-section__result${i}`).innerHTML = min_payment + "$"
            } else {
                let width = (formula - 7) * 50 + 50;
                document.querySelector(`.bar${i}`).style.width = `${width}px`;
                document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
            }
        }
        if (i == 3) {
            let width = (formula - 7) * 50 + 50;
            document.querySelector(`.bar${i}`).style.width = `${width}px`;
            document.querySelector(`.second-section__result${i}`).innerHTML = Math.floor(formula) + "$"
        }
        if (i == 2) {
            if (formula > 10) {
                document.querySelector(`.bar2`).style.width = "250px";
                document.querySelector(`.second-section__result2`).innerHTML = 10 + "$"
            } else {
                let width = formula * 30
                document.querySelector(`.bar2`).style.width = `${width}px`;
                document.querySelector(`.second-section__result2`).innerHTML = Math.floor(formula) + "$"
            }
        }
        i++
    })
}


const change_bunny_storage = (config) => {
    bunny_storage = config
    const volum = document.querySelector("#volume");
    outputUpdate(volum.value)
}

const change_scaleway_storage = (config) => {
    scaleway_storage = config
    const volum = document.querySelector("#volume");
    outputUpdate(volum.value)
}



outputUpdate(document.querySelector("#myRange").value);

