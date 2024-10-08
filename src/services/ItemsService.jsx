
import axios from "axios";

function getAllItems() {
    return axios.get ("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/fr_FR/item.json")
}

export default {
    getAllItems,
}