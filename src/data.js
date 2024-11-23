//export const API_KEY = 'AIzaSyBwisuxc05QH4a2Xec-WCVJeWTDKhLc0NE'
export const API_KEY = 'AIzaSyCQwTROdBM-8AD3a-N2eTZ35Dsvk1emnlg'

//take the view data to convert to thousand and million:
export const value_converter = (value)=>{
    if(value>=1000000){
        return Math.floor(value/1000000)+"M";
    }
    else if(value>=1000){
        return Math.floor(value/1000)+"K";
    }
    else{
        return value;
    }
}


// export const days_value = (data)=>{
//     item.snippet.publishedAt= data;
// const publishedAtDate = new Date(item.snippet.publishedAt);
// const currentDate = new Date();
// const timeDifference = currentDate.getTime() - publishedAtDate.getTime();
// const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

// return `${daysDifference}`;
// }