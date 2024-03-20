import mongoose from "mongoose";


const reviewSchema = mongoose.Schema({
   data:{
    type:String,
    required:true
   },
   rating:{
    type:Number,
    required:true,
    
   },
   hotelId:{
    type:String,
    required:true,
    
   },
});

const Review = mongoose.model('Review',reviewSchema);

export default Review;