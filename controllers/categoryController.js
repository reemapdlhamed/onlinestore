const mongoose = require("mongoose");
const Category=require("./../models/category");
const express = require("express");


exports.show_category=(request,response,next)=>{
    Category.find({})
            .then(data=>{
            response.status(200).json({data})

            })
            .catch(error=>{
                next(error);
            })
    
}


exports.add_category=(request,response,next)=>{
    if(request.role!="admin")next(Error("not authorized "))
    let auto_id;
        Category.find({})
            .then(data=>{
                
                auto_id = data.length;
                let object=new  Products({
                    _id:auto_id,
                    name: request.body.name,
                    description:request.body.description,
                    bannerImage:request.body.bannerImage,
                })
                object.save()
                      .then(data=>{
                          response.status(201).json({message:"added",data})
          
                      })
                      .catch(error=>next(error))
            })
    
}

