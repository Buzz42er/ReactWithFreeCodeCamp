import React from "react"

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {

    const date = new Date()
    const hours = date.getHours()
    if(hours < 12 && hours > 4){
        console.log(`Good morning, ${name}!`)
    }else if(hours > 12 && hours < 16){
        console.log(`Good afternoon, ${name}!`)
    }else if(hours > 16 && hours < 20){
        console.log(`Good evening, ${name}!`)
    }else if(hours > 20 && hours < 4){
        console.log(`Good morning, ${name}!`)
    }
    
}

greeting("Bob")


function greetings(name) {
    const date = new Date()
    const hours = date.getHours()
    
    let timeOfDay
    if(hours >= 4 && hours < 12) {
        timeOfDay = "morning"
    } else if(hours >= 12 && hours < 17) {
        timeOfDay = "afternoon"
    } else if(hours >= 17 && hours < 20) {
        timeOfDay = "evening"
    } else {
        timeOfDay = "night"
    }
    
    return `Good ${timeOfDay}, ${name}!`
}

console.log(greetings("Bob"))


// 1. How would you describe the concept of "state"?
// State is changabe, it is value that is changed inside of the function, by internal logic
//..
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)

// 2. When would you want to use props instead of state?
// Props are for getting data into a function from outside, and with prop values you 
//shouldn't mess inside of the function 
//..
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.

// 3. When would you want to use state instead of props?
// I would you state when I need to change internal values of the function, add 
//delete from array and similar.
//..
//Anytime you want a component to maintain some values from
//within the component. (And "remember" those values even
//when React re-renders the component)

// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Imutable means just to not mess with, you can change it but you shouldn't because 
//they are designed to provide new info from outside
//..
//Unchanging. Props are immutable. State is mutable.


export default function StateHello() {
    /**
     * Challenge: Replace our hard-coded "Hello" on the page with 
     * some state initiated with React.useState()
     */
     function IsImportant() {
        const [isImportant, func] = React.useState("Yes")
        console.log(isImportant)
        return (
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value">
                    <h1>{isImportant}</h1>
                </div>
            </div>
        )
    }

    function No() {
        const [isImportant, setIsImportant] = React.useState("Click")
        /**
         * Challenge: 
         * 1. Create a function called `handleClick` that runs
         *    setIsImportant("No")
         * 2. add a click event listener to the div.state--value
         *    that runs `handleClick` when the div is clicked.
         */
        
        function handleClick() {
            return setIsImportant("No")
        }
        
        return (
            <div className="state">
                <h1 className="state--title">Is state important to know?</h1>
                <div className="state--value" onClick={handleClick}>
                    <h1>{isImportant}</h1>
                </div>
            </div>
        )
    }

    const result = React.useState("Hello")
    console.log(result)
    return (
      <div className="stateHelloMain">
        <div className="state">
          <h1 className="state--title">Is state important to know?</h1>
          <div className="state--value">
            <h1>{result[0]}</h1>
          </div>
        </div>
        <IsImportant />
        <No />
      </div>
    );
}
