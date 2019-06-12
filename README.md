#This is a website displaying the only salmon cookies business in Seattle. The main page has a link that lead to another page displaying the cookies sale per hour at every location including the total per hour and the total per day. There is also a second table that display the amount of staff needed to work at each location at every hour and total amount of hours worked at each hour and at the end of the day.
#The setup of JS code involves creating a constructor function that has all the common properties that every store will have. The constructor will take in 4 parameters that are different for every store. Thos parameters are the location of the store, the minimum customer that the store projected to have, the maximum customers the store projected to have, and the average cookies sold per customer.There are also other properties listed below that will be in the constructor function. 
#minNumStaffPerHour = minimum number of staff working at every hour 
#numCustomerPerStaff = number of customers that one staff member can handle
#totalCookiesPerDay = the sum of all the cookies sold from 6am to 8pm for one store
#cookieSaleHour = array that holds the number of cookies sold per hour for one store
#customerHour = array that holds the number of customers per hour for one store
#numStaffPerHour = array that holds the number of staff members at every hour for one store
#There is also a prototype function for the constructor that holds the common functions that are accessible to every store. These functions includes: 
#cookiesPerHour() - Calculate cookies sold per hour and push it into the array cookieSaleHour. Calculation uses the control curve for the max customer at every hour and use that max to calculate the random number of customers which then use to calculate number of cookie sold per hour. #staffPerHour() -  Calculate number of staff needed to work at every hour and store it in the array numStaffPerHour
#cookieRender() - Render the information for the cookies sold per hour for each store to the sales.html in a table format. 
#staffRender() - Render the information for the amount of staff per hour for each store to the sales.html in a table format.
#There are also headerRow and FooterRow function that will render the header row that displays the individual hours and the footer row that will display the total per hour of every store and the total overall at the end of the day of every store. 
