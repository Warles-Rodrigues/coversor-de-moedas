const convertButton = document.querySelector(".convert-button")
const currencySelect =document.querySelector(".currency-select")


function convertvalues(){
     
    const valueinput = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".value-to-convert")//valor em real
    const valueConverted = document.querySelector(".value-converted")//valor convertido

    
    const valueDolar = 5.2
    const valueEuro = 6.2
    const valueLibra = 6.3
    const valueBitcoin = 137.135
    

    if(currencySelect.value == "dolar"){ valueConverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency" ,
        currency:"USD"
    }).format(valueinput / valueDolar)

    }
    if(currencySelect.value == "euro"){ valueConverted.innerHTML = new Intl.NumberFormat("de-DE",{
        style:"currency",
        currency:"EUR"
    }).format(valueinput / valueEuro)

    }
    if(currencySelect.value == "libra"){ valueConverted.innerHTML = new Intl.NumberFormat("en-GB",{
        style:"currency",
        currency:"GBP"
    }).format(valueinput / valueLibra)

    }
    if(currencySelect.value == "bitcoin"){ valueConverted.innerHTML = new Intl.NumberFormat("uk-UA",{
        style:"currency",
        currency:"BTC"

    }).format (valueinput / valueBitcoin)

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(valueinput)
    
}

function currencyChange(){
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-image" )

    if(currencySelect.value == "dolar"){

        currencyName.innerHTML = "Dolar Americano" 
       currencyImage.src="./assets/dolar.png"
    }
 
    if(currencySelect.value == "euro"){

        currencyName.innerHTML = "Euro"
        currencyImage.src ="./assets/euro.png"
    }
    if(currencySelect.value == "libra"){

        currencyName.innerHTML = "Libra"
        currencyImage.src ="./assets/libra 1.png"
    }

    if(currencySelect.value == "bitcoin"){

            currencyName.innerHTML = "Bitcoin"
            currencyImage.src ="./assets/bitcoin 1.png"
    }    

    convertvalues()

}


currencySelect.addEventListener("change",currencyChange)
convertButton.addEventListener("click",convertvalues)





