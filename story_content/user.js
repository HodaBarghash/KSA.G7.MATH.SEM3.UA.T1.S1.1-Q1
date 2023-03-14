function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5xaLNGiRurD":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzeZu0GofbWFwyIKQ7AtXkde1UcS0lSWYAOJwgi-KMbnThiv5zywUJaBna3PUm7hwKb/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

