var mongoose = require("mongoose");
var Campground = require("./models/campgrounds");
var Comment = require ("./models/comments");

var data = [
    { 
    author: { id: '5c9d0a53479bb10e269b3f90', username: 'Big Dave' },
    comments: 
        [ '5c9e0f5234e7aa09dc20fbd4',
        '5c9e196d04428e0f5ec53d87',
        '5ca206dc93906408fbb57149',
        '5ca206fa93906408fbb5714a',
        '5ca226fbe0f7830f81848341' ],
    _id: '5c9d0a6e479bb10e269b3f91',
    name: 'Pippledong Hillside Retreat',
    image: 'https://cdn.hiconsumption.com/wp-content/uploads/2017/12/How-To-Choose-The-Perfect-Campsite.jpg',
    description: 'There have been many murders here',
    __v: 5,
    price: '0.50' 
    },
    {
    author: { id: '5c9d0aa4479bb10e269b3f92', username: 'Frodo Baggins' },
    comments: [],
    _id: '5c9d0aaf479bb10e269b3f93',
    name: 'The Shire',
    image: 'https://cdn.vox-cdn.com/thumbor/FMUIaXcnBaKK9YqdP8qtxUog150=/0x0:4741x3161/1200x800/filters:focal(1992x1202:2750x1960)/cdn.vox-cdn.com/uploads/chorus_image/image/59535149/shutterstock_625918454.0.jpg',
    description: '  Vestibulum non venenatis ligula. Vivamus porttitor, turpis id porttitor facilisis, urna mauris posuere tortor, gravida aliquet sem dolor a urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus neque nec orci ornare convallis. Nullam consectetur vitae metus eu tincidunt. Maecenas sed volutpat mauris, rhoncus feugiat ligula. Nulla maximus ipsum non eros sagittis, sed mollis lectus dictum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam elit felis, faucibus sit amet purus at, tempor aliquam arcu. Ut a aliquam tellus. Ut malesuada elementum velit, eu fermentum turpis egestas non. Quisque ut venenatis tellus, et fringilla purus. Curabitur varius vehicula volutpat. Donec ipsum mauris, feugiat a nisi tincidunt, commodo porta turpis. Nullam hendrerit porta tortor quis posuere. Curabitur pulvinar, nunc at imperdiet venenatis, dolor lectus tincidunt tortor, congue pretium risus lectus eget sapien.',
    __v: 0,
    price: '13.68'
    },
    { 
    author: { id: '5c9d08cebf44310e14456501', username: 'Ding' },
    comments: 
     [ '5ca204f8a77b9208c4ffb7b6',
       '5ca22764e0f7830f81848343',
       '5ca2828fd72de010afb579e9' ],
    _id: '5c9dfcd323dad109050217bc',
    name: 'Jinglebutt River',
    image: 'https://media-cdn.tripadvisor.com/media/photo-s/05/c6/94/80/red-squirrel-campsite.jpg',
    description: 'There have been many murders here',
    __v: 3,
    price: '35.50'
    },
    {
    author: { id: '5ca21d355695d30e649ec05a', username: 'HairyJoe' },
    comments: [ '5ca22875e0f7830f81848344' ],
    _id: '5ca22455b120a60f23815ca4',
    name: 'The Lights',
    image: 'https://www.wildlifearchives.com/wp-content/uploads/2017/11/aurore-camping-15111921814gn8k-1280x853.jpg',
    description: '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed malesuada non tortor id blandit. Nullam quam metus, sodales id dolor sit amet, condimentum ultricies nisl. Nam sed dolor sapien. Maecenas blandit lorem mattis urna molestie, non finibus justo commodo. Ut ut nibh eu quam auctor euismod. Quisque non enim quis lacus semper consectetur eget quis est. Integer varius hendrerit nunc, sit amet aliquet diam gravida sit amet. Curabitur interdum erat quam, quis convallis lectus commodo quis. Suspendisse eget leo felis. Donec scelerisque velit nec felis vulputate imperdiet. Sed at consectetur eros, in auctor nibh. Nullam mollis congue nulla, nec ultrices felis ullamcorper eget. Integer tortor lectus, molestie pulvinar diam ut, ultricies tincidunt nibh. Donec pulvinar est sed purus rutrum dapibus. Curabitur mattis blandit urna sit amet molestie. Sed et arcu commodo lorem pretium euismod. ',
    __v: 1,
    price: '25'
    },
    {
    author: { id: '5ca28265d72de010afb579e8', username: 'vikibiki' },
    comments: [],
    _id: '5ca283cbd72de010afb579ea',
    name: 'Quiet Place',
    price: '100',
    image: 'https://www.canvascamp.com/media/blog/image/43-campfireblogCOVER.jpg',
    description: 'very quiet',
    __v: 1
    },
    {
    author: { id: '5c9d0a53479bb10e269b3f90', username: 'Big Dave' },
    comments: [],
    _id: '5ca36abc9a82c20cc2c91090',
    name: 'Dusktown Canyon',
    image: 'https://res.cloudinary.com/dbbfqknhj/image/upload/v1554213563/q56ztcyk6ygotyrc3mba.jpg',
    __v: 0,
    description: 'Lovely at dusk',
    price: '50'
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