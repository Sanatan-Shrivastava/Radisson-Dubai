const uplink = require('cloudinary')

uplink.config({
    cloud_name: 'dswokf0ft',
    api_key: '679947583965128',
    api_secret: '0mbGWiGRcyGuhgfw4AwFAQp8j38'
})

const upload = path =>{
    uplink.v2.uploader.upload(path,(err,res)=>{
        if(err)
        {
            console.log(err);
        
        }
        else
        {
            console.log(res);
        
        }
    })
}
