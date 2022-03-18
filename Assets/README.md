## Password Generator

The starter code doesn't have any veriables so those were added. The Button is provided, but we have to provide the event to a begin the prompts to provide  a function to begin requesting the event to request to provide the choices for the password in the desired location. 
We start with the first prompt, for the appropriate number of letters. Defining that if the password length is greater than 8 OR less than 128 THEN we will generate the custom password otherwise we will return with an alert to please enter your request. Then it is time to define the options for the password.
The Variables for this needed to be defined withing the function because otherwise they do not exsist. So provided a list of confirm or canel options to indicate the choice for the password.
Line 33 begins the return for if the user does not choose enough choices to create a password, here we defined that one confirmation must be made for a password to be generated. because if they define how many variables they want from the array but do not inidcate that they want a variable from an array option then a password cannot be generated.
The final prompt is to create the event if the user continues with the correct number of desired characters, and had chosen at lease one option. These prompts following line 36 confirm the valid charachters choices from the desired array. So if user is requesting a lowercase valid character, then join the strings in this statement, don't take any of the variables away from the array or change it, then consol.log that information from their request. 
The final for loop is where I needed some help, but after some explination that it isn't four loops it made more sense. This loop discribes what we are doing this all for! that would be for a password, right? so That is why we leave the variable quotes empty. When the integer is equal to the first option that they choose that the password length will be that variable plus one of any addtional random options from the array is going to equal the gratest integer that is less than or equal to  these random numbers multplied by how man numbers they want as long as it is greater than eight and can be multiplied by one. A little confusing but you get the idea. 
but that password is going to be the the amount of their characters they chose and at random. Finally, we will return this information to the div container identified as under the variable function from the variable defined. 
The final text was outlined  for the action to click and then write the password. 

## Screen shot with my password

![ScreenShot](_Users_jannabencriscutto_Desktop_Homework-Assignments_Jenn-Password-Generator_index.html.png)

## Links
[Password Generator Links] (https://jpcreativeworks.github.io/Jenn-Password-Generator/)
[GitHub Link] (https://github.com/jpcreativeworks/Jenn-Password-Generator.git)