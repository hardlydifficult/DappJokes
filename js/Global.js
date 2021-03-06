// Global variables used by our Dapp
var contract_address;

var is_mainnet = true;
var nebulas_chain_id, nebulas_domain; 
var gas_price = 1000000;
var gas_limit = 200000;

if(is_mainnet) 
{
    nebulas_chain_id = 1;
    nebulas_domain = "https://mainnet.nebulas.io";
    contract_address = "n1zEiv8MXzCc58aKXe3vxzyqYZ4JcQCY17L";
} 
else 
{
    nebulas_chain_id = 1001;
    nebulas_domain = "https://testnet.nebulas.io";
    contract_address = "n1fJCX9n9DBoNXG3TqXocaVbHDmXxeTZEta";
}

var token_divider = 1000000000000000000;

function redirectToHome(path)
{
    if(!path)
    {
        path = "";
    }
    var href = window.location.href;
    var dir = href.substring(0, href.lastIndexOf('/')) + path;
    window.location =  dir;  
}

function getJoke(id, listener)
{
    nebReadAnon("getJoke", ["" + id], function(joke_data, error, args)
    {
        if(joke_data && joke_data.joke_text)
        {
            joke_data.id = id;
            listener(joke_data);
        }        
    });
}
