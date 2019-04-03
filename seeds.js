var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require ("./models/comments");

var data = [
    {
        name: "Cloud Best", 
        image: "https://cdn2.howtostartanllc.com/images/business-ideas/business-idea-images/Campground.jpg",
        description: "When will that be? Hey! I'm a porno-dealing monster, what do I care what you think? Oh, I don't have time for this. I have to go and buy a single piece of fruit with a coupon and then return it, making people wait behind me while I complain. We're also Santa Claus! That's the ONLY thing about being a slave. Why am I sticky and naked? Did I miss something fun? Morbo can't understand his teleprompter because he forgot how you say that letter that's shaped like a man wearing a hat."
    },
    {
        name: "Lake Yatamato",
        image: "https://www.pc.gc.ca/en/pn-np/ab/banff/activ/camping/~/media/802FD4AF791F4C6886E18CBF4A2B81B2.ashx?w=595&h=396&as=1",
        description: "So I really am important? How I feel when I'm drunk is correct? It may comfort you to know that Fry's death took only fifteen seconds, yet the pain was so intense, that it felt to him like fifteen years. And it goes without saying, it caused him to empty his bowels."
    },
    {
        name: "Sunset Rise",
        image: "https://campone.com/wp-content/uploads/2017/12/FB_IMG_1537891494422.jpg",
        description: "Of all the friends I've had… you're the first. I've got to find a way to escape the horrible ravages of youth. Suddenly, I'm going to the bathroom like clockwork, every three hours. And those jerks at Social Security stopped sending me checks. Now 'I'' have to pay ''them'!"
    }
]

function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err)
        } else {
            console.log("removed campgrounds");
            //Add campgrounds
            data.forEach(function(seed){
                Campground.create(seed, function(err, campground){
                    if(err){
                        console.log(err)
                    } else {
                        console.log("Added Campground");
                        //Create comments
                        Comment.create(
                            {
                                text:"Very nice, no wifi though",
                                author: "Biddlebong"
                            }, function(err, comment){
                                if(err){
                                    console.log(err)
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Comment added");
                                }
                            });
                    }
                });
            });
        }
    });
}

module.exports = seedDB;