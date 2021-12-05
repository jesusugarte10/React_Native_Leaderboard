import axios from "axios"

//Main response
export const getMarkedData = async () =>{
    try{
        //API Call goes here
        axios.post("https://dungeonride.herokuapp.com/api/populateLeaderboard");
        
        const response = await axios.post("https://dungeonride.herokuapp.com/api/getLeaderboard");
        return response.data.leaderboard;

    }catch(error){
        console.log.error(error.message)
    }
}