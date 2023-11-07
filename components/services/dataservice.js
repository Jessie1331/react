let catalog = [

    
{
"title": "Show-sum -Legs",
"catagory":"Show-Off",
'Price': 334.88,
 "image": "eligent.webp",
"id":'1'
},  
{
      
"title": "Give Him The Boot",
"catagory":"Show-Off",
'Price': 350.88,
'image':'boots.webp', 
 '_id':'2'

},
{
      
    "title": "StyleRuns",
    "catagory":"Run-u-Muck",
     'Price': 280.99,
     'image':'13.jpg',
     '_id':'3'
},

{
                
    "title": "Sneeks",
    "catagory":"Stompers",
     'Price': 350.77,
     'image':'sneeks.webp',
     '_id':'4'
                
},

{
 "title": "Sud-Finder",
"catagory":"Stompers",
'Price': 469.66,
 "image": "flash.webp",
"_id":'5'
},

 {
"title": "How High",
"catagory":"Get-High",
'Price': 340.55,
"image": "menshightops.webp",
 '_id':'6'
 },
        

{
 "title": "Kk-jr's",
 "catagory":"LilKicks",
 'Price': 170.44,
 "image": "kids.webp",
'_id':'7'
}
            
]

class DataService {

    getProducts(){
        return catalog;
    }
}


export default DataService;