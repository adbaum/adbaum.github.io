function getTime(credits, time, day)
	{
		var examTime = "not available";
		
		if (time.length < 7)
			{
				time = '0' + time;
			}
		
		if (credits != 5 && time == "08:00am" && (day == "TR" || day ==""))
			{
				examTime = "7:30-9:30 am on Wednesday, April 30th";
			}
		else if (credits == 5 && time == "08:00am")
			{
				examTime = "7:30-9:30 am on Thursday, May 1st";
			}
		else if (time == "08:00am" && (day == "MWF" || day == "MW" || day == "WF"))
			{
				examTime = "7:30-9:30 am on Thursday, May 1st";
			}
		else if (time == "09:00am")
			{
				examTime = "7:30-9:30 am on Friday, May 2nd";
			}
		else if (credits != 5 && time == "11:00am" && (day == "TR" || day == ""))
			{
				examTime = "9:45-11:45 am on Tuesday, April 29th";
			}
		else if (time == "11:00am" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "9:45-11:45 am on Thursday, May 1st";
			}
		else if (time == "10:00am")
			{
				examTime = "9:45-11:45 am on Wednesday, April 30th";
			}
		else if (time == "09:30am")
			{
				examTime = "9:45-11:45 am on Friday, May 2nd";
			}
		else if (time == "12:30pm")
			{
				examTime = "12:00-2:00 pm on Tuesday, April 29th";
			}
		else if (time == "12:00pm")
			{
				examTime = "12:00-2:00 pm on Wednesday, April 29th"; 
			}
		else if (credits != 5 && time == "02:00pm" && (day == "TR" || day == ""))
			{
				examTime = "12:00-2:00 pm on Thursday, May 1st"; 
			}
		else if (time == "02:00pm" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "2:15-4:15 pm on Thursday, May 1st";
			}
		else if (time == "01:00pm" && day != "TR")
			{
				examTime = "12:00-2:00 pm on Friday, May 2nd";
			}
		else if (time == "01:00pm")
			{
				examTime = "12:00-2:00 pm on Tuesday, April 29th";
			}
		else if (time == "03:30pm")
			{
				examTime = "2:15-4:15 pm on Tuesday, April 29th";
			}
		else if (time == "03:00pm")
			{
				examTime = "2:15-4:15 pm on Wednesday, April 30th";
			}
		else if (time == "04:00pm")
			{
				examTime = "2:15-4:15 pm on Friday, May 2nd";
			}
		else if (credits != 5 && time == "05:00pm" && (day == "TR" || day == ""))
			{
				examTime = "4:30-6:30 pm on Tuesday, April 29th";
			}
		else if (time == "05:00pm" && (day == "MWF" || day == "MW" || day == "WF" || day == ""))
			{
				examTime = "4:30-6:30 pm on Wednesday, April 30th";
			}
		else if (time == "06:30pm" && (day == "T" || day == "TR"))
			{
				examTime = "7:00-9:00 pm on Tuesday, April 29th";
			}
		else if (time == "06:30pm" && day == "W")
			{
				examTime = "7:00-9:00 pm on Wednesday, April 30th";
			}
		else if (time == "06:30pm" && day == "R")
			{
				examTime = "7:00-9:00 pm on Thursday, May 1st";
			}
		else if (time == "08:00pm" && day == "TR")
			{
				examTime = "7:00-9:00 pm on Tuesday, April 29th";
			}
		else if (time == "08:00pm" && day == "MW")
			{
				examTime = "7:00-9:00 pm on Wednesday, April 30th";
			}
			
	document.getElementById('output').innerHTML = "The exam for that course is from " + examTime + "."
	}
