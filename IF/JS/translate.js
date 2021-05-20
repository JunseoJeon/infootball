function translateTeamName(teamName){
	switch(teamName){
		case "Manchester City":
			return "맨 시티";
		case "Leicester":
			return "레스터 시티";
		case "Crystal Palace":
			return "크팰";
		case "Manchester United":
			return "맨유";
		case "West Ham":
			return "웨스트 햄";
		case "Tottenham":
			return "토트넘";
		case "Chelsea":
			return "첼시";
		case "Liverpool":
			return "리버풀";
		case "Everton":
			return "에버튼";
		case "Aston Villa":
			return "아스턴 빌라";
		case "Arsenal":
			return "아스날";
		case "Leeds":
			return "리즈";
		case "Everton":
			return "에버턴";
		case "Southampton":
			return "사우샘프턴";
		case "Burnley":
			return "번리";
		case "Newcastle":
			return "뉴캐슬";
		case "Brighton":
			return "브라이턴";
		case "Wolves":
			return "울브스";
		case "Fulham":
			return "풀럼";
		case "West Brom":
			return "웨스트 브롬";
		case "Southampton":
			return "사우샘프턴";
		case "Sheffield Utd":
			return "셰필드";
		default:
			return teamName;
		}
}

function translateLeagueName(leagueName){
	switch(leagueName)
	{
		case "Premier League":
		return "EPL";
		default:
			return leagueName;
	}
}

function translateStatus(status){
	switch(status)
	{
		case "FT":
			return "경기 종료";
		case "NS":
			return "경기 시작 전";
		default:
			return status;
	}
}