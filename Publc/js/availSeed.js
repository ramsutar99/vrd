



// this available seed is created manually
// this should be created on the basis of total registration of farmers
 const availSeed = 
[
    {
        "crop" : 'soybean',
        "variety" : "ds-228",
        "quantity" : 1.20,
        "stage" : "br-fi",
        "lot" : "oct21-13-mpkvk-39",
        "producer" : "mpkvk, rahuri"
    },
    {
        "crop" : 'soybean',
        "variety" : "ds-228",
        "quantity" : 2.34,
        "stage" : "fi-ci",
        "lot" : "oct21-13-2502-1501",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "js-335",
        "quantity" : 3.90,
        "stage" : "fi-ci",
        "lot" : "oct21-13-2502-1589",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-726",
        "quantity" : 1.20,
        "stage" : "br-fi",
        "lot" : "oct21-13-mpkvk-70",
        "producer" : "mpkvk, rahuri"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-726",
        "quantity" : 7.80,
        "stage" : "fi-fii",
        "lot" : "oct21-13-2502-1528",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-726",
        "quantity" : 81.12,
        "stage" : "fii-ci",
        "lot" : "oct21-13-2502-1537",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-726",
        "quantity" : 2.08,
        "stage" : "fii-ci",
        "lot" : "oct21-13-2502-1558",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-753",
        "quantity" : 0.60,
        "stage" : "br-fi",
        "lot" : "sep22-13-mpkvk-46",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-753",
        "quantity" : 0.90,
        "stage" : "fi-ci",
        "lot" : "oct21-13-1601-1509"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-753",
        "quantity" : 5.20,
        "stage" : "fi-ci",
        "lot" : "oct21-13-2502-1603",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "kds-992",
        "quantity" : 0.15,
        "stage" : "br-fi",
        "lot" : "may22-13-mpkvs-136",
        "producer" : "mpkvk, rahuri"
    },
    {
        "crop" : 'soybean',
        "variety" : "macs-1188",
        "quantity" : 1.50,
        "stage" : "br-fi",
        "lot" : "nov21-ari-13-11",
        "producer" : "vnmkv, parbhani"
    },
    {
        "crop" : 'soybean',
        "variety" : "macs-1188",
        "quantity" : 4.16,
        "stage" : "fi-ci",
        "lot" : "oct21-13-2502-1605",
        "producer" : "vrd"
    },
    {
        "crop" : 'soybean',
        "variety" : "maus-158",
        "quantity" : 0.26,
        "stage" : "br-fi",
        "lot" : "oct21-13-2205-vnmkv-721"
    },
    {
        "crop" : 'soybean',
        "variety" : "maus-162",
        "quantity" : 3.60,
        "stage" :"fi-fii",
        "lot" : "oct21-13-2414-4091"
    },
    
    {
        "crop" : 'soybean',
        "variety" : "maus-612",
        "quantity" : 0.30,
        "stage" :"fi-fii",
        "lot" : "oct21-13-2205-3002"
    }
]

let totalSeed = availSeed.reduce((acc,i)=>{
    return acc += i.quantity
},0)

const crop = document.getElementById('crop')
const variety = document.getElementById('variety')
const stage = document.getElementById('stage')
const lot = document.getElementById('lot')
// console.log(crop);  

// setting of a crop as selectable values in registration form 
let cropList = [...new Set(availSeed.map((item)=>item.crop))]
crop.innerHTML += cropList.map((item)=>
    `
    <option value='${item}'>${item.toUpperCase()}</option>
    `
)

// setting of a varieties as selectable values in registration form 
let varietyList = [...new Set(availSeed.map((item)=>item.variety))]
varietyList.map((item)=>{
    crop.addEventListener('change',(e)=>{
        if (e.target.value) {
            // console.log(crop.innerHTML);
            variety.innerHTML += `<option value='${item}' >${item.toUpperCase()}</option>`
        }else{
            variety.innerHTML = ``
        }
    })
  
}
)
// setting a stage as selectable values in registration form 
let stageList = [...new Set(availSeed.map((item)=>item))]
// creating a filter for selecting a crop, variety, stage and lot respectively
stageList
.filter((value)=>{

    variety.addEventListener('change', (e)=> {
        if(value.variety === e.target.value){
            // console.log(value.stage)
            stage.innerHTML += `<option value='${value.stage}'>${value.stage.toUpperCase()}</option>`;
            stage.addEventListener('change', (e)=>{
                if(value.stage === e.target.value){
                    // console.log(value.lot);
                    lot.innerHTML += `<option value='${value.lot}'>${value.lot.toUpperCase()}</option>`
                }
            })
            return (
                `
                <option value='${value.stage}'>${value.stage.toUpperCase()}</option>
                `,
                `<option value='${value.lot}'>${value.lot.toUpperCase()}</option>`
            )
        }
    })
})
// .map((item)=>
// variety.addEventListener('change', (e)=> {
//     console.log(e.target.value);
//     `
//     <option value='${item.stage}'>${item.stage.toUpperCase()}</option>
//     `
// })
// )

// setting a stage as selectable values in registration form 
// let lotList = [...new Set(availSeed.map((item)=>item))].sort()
// lot.innerHTML += lotList.map((item)=>`<option value='${item.lot}'>${item.lot.toUpperCase()}</option>`)

// console.log(lot.innerHTML.split(','))


function resetForm(){location.reload()}