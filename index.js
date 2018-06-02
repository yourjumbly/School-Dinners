/**
 * School Dinners
 * Emma Button March 2018
 */

/**
 * App ID for the skill
 */
var APP_ID = "amzn1.ask.skill.2e432f6d-5afc-4dcd-8f5c-bd170b7da75d";

var userId = null;

const AWSregion = 'eu-west-1';
const AWS = require('aws-sdk');

AWS.config.update({
    region: AWSregion
});

var menu = {
        "Monday" : [
            {
                dates: ['2018-04-16', '2018-05-07', '2018-06-04', '2018-06-25', '2018-07-16'],
                main: "Pork sausages with mashed potato and gravy",
                veggie: "Vegetable wholemeal pasta medley",
                pud: "Wholemeal peach crumble with custard"
            },
            {
                dates: ['2018-04-23', '2018-05-14', '2018-06-11', '2018-07-02', '2018-07-23'],
                main: "Chicken Neapolitan pasta with spinach",
                veggie: "Vegetable Jollof rice with Quorn and mixed beans",
                pud: "Berry and apple cobbler and cream"
            },
            {
                dates: ['2018-04-30', '2018-05-21', '2018-06-18', '2018-07-09'],
                main: "Cajun chicken with rice",
                veggie: "Lentil and sweet potato curry with rice",
                pud: "Apple crumble with custard"
            }
        ],
        "Tuesday" : [
            {
                dates: ['2018-04-17', '2018-05-08', '2018-06-05', '2018-06-26', '2018-07-17'],
                main: "Spaghetti beef bolognaise with Garlic Slice",
                veggie: "Summer risotto served with Garlic Slice",
                pud: "Chocolate and beetroot brownie"    
            },
            {
                dates: ['2018-04-24', '2018-05-15', '2018-06-12', '2018-07-03', '2018-07-24'],
                main: "Beef and bean fajitas with jacket wedges",
                veggie: "Vegetable (soya) chilli with rice and wholemeal flatbread",
                pud: "Lemon drizzle cake"
            },
            {
                dates: ['2018-05-01', '2018-05-22', '2018-06-19', '2018-07-10'],
                main: "Meaty beef pizza with baby new potatoes",
                veggie: "Spanish omlette with baby new potatoes",
                pud: "Chocolate mandarin sponge with chocolae sauce"
            }
        ],
        "Wednesday" : [
            {
                dates: ['2018-04-18', '2018-05-09', '2018-06-06', '2018-06-27', '2018-07-18'],
                main: "Roast turkey with roast potatoes and gravy",
                veggie: "Quorn roast with new potatoes and gravy",
                pud: "Sliced cheese, apple and biscuits"
            },
            {
                dates: ['2018-04-25', '2018-05-16', '2018-06-13', '2018-07-04', '2018-07-25'],
                main: "Roast pork and apple sauce with roast potatoes and gravy",
                veggie: "Lentil and basil puff pastry turnover with roast potatoes",
                pud: "Oaty cookie"
            },
            {
                dates: ['2018-05-02', '2018-05-23', '2018-06-20', '2018-07-11'],
                main: "Roast chicken with stuffing, roast potatoes and gravy",
                veggie: "Creamy vegetable wholemeal pie with roast potatoes and gravy",
                pud: "Apple flapjack"
            }
        ],
        "Thursday" : [
            {
                dates: ['2018-04-19', '2018-05-10', '2018-06-07', '2018-06-28', '2018-07-19'],
                main: "Mediterranean chicken served in a tomato sauce with rice",
                veggie: "Vegetable and apricot tagine with lemon and mint cous cous and a flatbread",
                pud: "Carrot and sultana cake"
            },
            {
                dates: ['2018-04-26', '2018-05-17', '2018-06-14', '2018-07-05', '2018-07-26'],
                main: "Barbecue chicken with rice",
                veggie: "Macaroni cheese with tomato topping",
                pud: "Apple pie with custard"
            },
            {
                dates: ['2018-05-03', '2018-05-24', '2018-06-21', '2018-07-12'],
                main: "Beef lasagne served with herby bread",
                veggie: "Wholemeal vegetable pasta bake",
                pud: "Pineapple upside down cake"
            }
        ],
        "Friday" : [
            {
                dates: ['2018-04-20', '2018-05-11', '2018-06-08', '2018-06-29', '2018-07-20'],
                main: "Salmon fish fingers or fish fingers with chips and tomato sauce",
                veggie: "Cheese, onion and spinach quiche with chips",
                pud: "Feathered ice sponge"
            },
            {
                dates: ['2018-04-27', '2018-05-18', '2018-06-15', '2018-07-06', '2018-07-27'],
                main: "Breaded fish with chips and tomato sauce",
                veggie: "Spicy bean burger with chips",
                pud: "Banana and chocolate muffin"
            },
            {
                dates: ['2018-05-04', '2018-05-25', '2018-06-22', '2018-07-13'],
                main: "Battered fish with chips and tomato sauce",
                veggie: "Cheese and tomato french bread pizza with chips",
                pud: "Vanilla shortbread"
            }
        ]
    };


/**
 * The AlexaSkill prototype and helper functions
 */
var AlexaSkill = require('./AlexaSkill');

/**
 * 5Series Dinners is a child of AlexaSkill.
 * To read more about inheritance in JavaScript, see the link below.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript#Inheritance
 */
var Dinners = function () {
    AlexaSkill.call(this, APP_ID);
};

// Extend AlexaSkill
Dinners.prototype = Object.create(AlexaSkill.prototype);
Dinners.prototype.constructor = Dinners;

Dinners.prototype.eventHandlers.onSessionStarted = function (sessionStartedRequest, session) {
    //console.log("onSessionStarted requestId: " + sessionStartedRequest.requestId + ", sessionId: " + session.sessionId);
    // any initialization logic goes here
};

Dinners.prototype.eventHandlers.onLaunch = function (launchRequest, session, response) {
    //console.log("onLaunch requestId: " + launchRequest.requestId + ", sessionId: " + session.sessionId);
    response.ask("You can ask School Dinners what's for lunch today, tomorrow or on a known day, or, you can say exit... What can I help you with?", "What can I help you with?");
};

/**
 * Overridden to show that a subclass can override this function to teardown session state.
 */
Dinners.prototype.eventHandlers.onSessionEnded = function (sessionEndedRequest, session) {
    //console.log("onSessionEnded requestId: " + sessionEndedRequest.requestId + ", sessionId: " + session.sessionId);
    // any cleanup logic goes here
};

Dinners.prototype.intentHandlers = {

    "SpecificDayIntent": function (intent, session, response) {
        handleSpecificDayRequest(intent, response);
    },

    "AMAZON.HelpIntent": function (intent, session, response) {
        response.ask("You can ask School Dinners what's for lunch today, tomorrow or on a known day, or, you can say exit... What can I help you with?", "What can I help you with?");
    },

    "AMAZON.StopIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    },

    "AMAZON.CancelIntent": function (intent, session, response) {
        var speechOutput = "Goodbye";
        response.tell(speechOutput);
    }
};

/**
 * Notifies the user whats for dinner on a fixed day
 */
function handleSpecificDayRequest(intent, response) {

    var weekday = null;

    //check that it is a specific day, not a week

    if (intent.slots != null && intent.slots.Day != null && intent.slots.Day.value != null) {

        var parsedDate = new Date(intent.slots.Day.value);
        if (parsedDate != null && parsedDate != NaN && parsedDate != "NaN") {
            console.log("requested date " + parsedDate);
            console.log("requested date " + parsedDate.getDay());
            
            
            switch(parsedDate.getDay()) {
                case 1 :
                    weekday = menu.Monday
                    break;
                case 2:
                    weekday = menu.Tuesday
                    break;
                case 3:
                    weekday = menu.Wednesday
                    break;
                case 4:
                    weekday = menu.Thursday
                    break;
                case 5:
                    weekday = menu.Friday
                    break;
            }

        } else if(parsedDate === null || parsedDate === NaN) {
            console.log("invalid date " +  parsedDate);
        }
    }

    var speechOutput = "I have no idea";	

    if (weekday == null) {
        speechOutput = "I don't recognise that date, sorry."
    } else {
        var i = null;
        var foundMatch = false;

        for (i = 0; weekday.length > i && !foundMatch; i += 1) {
            var j = null;

            for (j = 0; weekday[i].dates.length > j; j +=1) {

                if (weekday[i].dates[j] == intent.slots.Day.value) {
                    speechOutput = "Main is " + weekday[i].main + ".  Vegetarian is " + weekday[i].veggie + ". And pudding is " + weekday[i].pud;
                    foundMatch = true;
                    break;
                }
            }
        }
    }

    var cardTitle = "School Dinners";
    response.tellWithCard(speechOutput, cardTitle, speechOutput);
}


// Create the handler that responds to the Alexa Request.
exports.handler = function (event, context) {
    
    userId = event['session']['user']['userId'];
    console.log("UserID: " + userId);
    
    // Create an instance of the dinners skill.
    var dinners = new Dinners();
    
    dinners.execute(event, context);
};



