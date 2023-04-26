const apiKey = "RGAPI-4cbdd5af-c26c-405b-9ca4-3b555ee82bd8";
const submitButton = document.getElementById("submit-button");
const summonerIcon = document.getElementById("summoner-icon");
const summonerNameText = document.getElementById("summoner-name-text");

submitButton.addEventListener("click", () => {
  const summonerName = document.getElementById("summoner-name").value;

  axios
    .get(
      `https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`
    )
    .then((response) => {
      const summonerData = response.data;
      summonerIcon.src = `http://ddragon.leagueoflegends.com/cdn/11.7.1/img/profileicon/${summonerData.profileIconId}.png`;
      summonerNameText.textContent = summonerData.name;
    })
    .catch((error) => {
      console.log(error);
    });
});
