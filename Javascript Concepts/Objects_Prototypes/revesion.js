function Events(){
    
}   
Events.prototype.BookEvent = function(){
    console.log('Event Booking Done Succssfully')
}

function BookmovieTicket(){

}

BookmovieTicket.prototype = Object.create(Events.prototype)
const d = new BookmovieTicket()
d.BookEvent()

