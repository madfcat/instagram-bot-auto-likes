var notThis = []; //add account names to exclude from likes


var andNotThis = []; //add more account names to exclude from likes


notThis = notThis.concat(andNotThis);
var alreadyLikedNames = [];


function mcpTime() {
	Data = new Date();
	Hour = Data.getHours();
	Minutes = Data.getMinutes();
	Seconds = Data.getSeconds();
 
	console.log("at "+Hour+":"+Minutes+":"+Seconds);
}

function doLike() {
	setTimeout(function() {console.log("...one moment!");}, 3000);
	while (document.readyState !== "complete")
		{
			setTimeout(function() {console.log("one more moment!");}, 3000);
		}
	

   	var likeElement = document.querySelector(".fr66n button");
	var likeElementAtt = document.querySelector(".fr66n svg");

	console.log(likeElement);
    var nextElement = document.querySelector(".coreSpriteRightPaginationArrow");
    var nextTime = Math.random() * goFaster * (14000 - 5000) + 5000;
	var mcpNextDelay = Math.random() * (1500 - 1000) + 1000;


	if (document.querySelector(".e1e1d a") !== null) {
        var instaName = document.querySelector(".e1e1d a"); //change querySelector to h2 tag class
        if ( notThis.includes(instaName.text) || alreadyLikedNames.includes(instaName.text) ) {
     		skipCount++;
            console.log(skipCount + " skipped. It's on the bitch or already liked list. Liked before: " + likeCount);
    		nextTime = (nextTime - mcpNextDelay)/1.3; //go faster if 
    		mcpTime();
        }
        else if (likeElementAtt.getAttribute("aria-label") === "Like" ||  likeElementAtt.getAttribute("aria-label") === "Нравится") { //If no Unlike then there is Like button. Need to click :)
            alreadyLikedNames.push(instaName.text);//add this name to already liked names
            likeElement.click();
        	likeCount++;
            console.log(likeCount + " liked of " + mcpMaxLikes);
    		mcpTime();
        } else {
    		skipCount++;
            console.log(skipCount + " skipped");
    		nextTime = (nextTime - mcpNextDelay)/1.3; //go faster if 
    		mcpTime();
        }
        setTimeout(function() {nextElement.click();}, mcpNextDelay);
    	
        if (likeCount < mcpMaxLikes) {
    		if (document.readyState !== "complete") {
            	setTimeout (function() {console.log("gotta wait!");}, 2000);
    			}
    		setTimeout(doLike, nextTime);
        } else {
            console.log("Nice! Time for a break. Liked: " + likeCount + "! Skipped: " + skipCount );
        }
    } else {
        setTimeout(doLike, nextTime);
    }    
}

var likeCount = 0;
var skipCount = 0;
var mcpMaxLikes = 50; //likes amount
mcpMaxLikes =  mcpMaxLikes - (mcpMaxLikes%1); //convert to integer
console.log('Let\'s like ' + mcpMaxLikes);
var goFaster = 6; //less is faster, more is slower
doLike();
//end