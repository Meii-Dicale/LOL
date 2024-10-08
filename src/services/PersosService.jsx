import axios from "axios";

function getAllPersos() {
    return axios.get ("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion.json")
}

function getInfoPerso(PersoName) {
    return axios.get ("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/champion/"+PersoName+".json")
}

export default {
    getAllPersos, 
    getInfoPerso,


}