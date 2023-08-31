# Understanding Questions:
1. What are the steps of execution from the pressing of the 1 button to the rendering of our updated value? List what part of the code excutes for each step.
* The user presses the 1 button.
* 
...
You click the button, which triggers the a dispatch of the addOne function, which then returns an action object to the reducer function, which then matches the type of action, almost like a key, to the specific case in the reducer function, then it applies that function from the case from the reducer function to the update the initial state which then returns a new state that is reflected as one. 

* TotalDisplay shows the total plus 1.
