##### processing image when you change it's height or width it's dimensions will be changed as you write and put it  
another folder .
    ### First I have installed nodejs 
    then init my project by
    // node init -y
    then install prettier by
    // npm i --save-dev prettier 
     npm stands for node package manager 
     --save-dev to make at devdepencies as it's used at development stage 
     then install eslint to catch error by
     // npm i --save-dev eslint
     configuring eslint by 
     // npm i eslint-config-prettier
     install plugin for eslint by 
     // npm i eslint-plugin-prettier
     install typescript by 
     // npm i typescript
     install jasmine for unit testing by
     // npm i jasmine  
    ### I make a separate file and make al functions at it and import it at the main file .
    //export default rout;//
    //import rout from './router/rout'; //
    ### I made an if statement to check that the image extension is jpg and the hight && width have been entered  and    more than zero
      //if (!fileName){
        res.send("you should enter your image name")
         }else if((fileName as string).split(".")[1] !="jpg"){
       res.send("your image extension must be .jpg ");
          }else if (!height && !width) { //



    ### I identify the path of the other folder and the old folder , 
     check if the new image is found at the new folder don't put it at the folder other wise put it .
       //   if (fs.existsSync(newPath)){
        res.sendFile(newPath);  //


    ### If it don't found make a new image with the new dimensions .
       // sharp(oldpath).resize({width:parseInt(width as string),height:parseInt(height as string)}).toFile(newPath).then(function(){
            res.sendFile(newPath);
        }).catch(function(err){console.log(err); res.send("isn't found")}//
         ## I make this function at a separate file an import it at the main file 


        with jasmine framework I made a unit testing to ensure that the function do what we want to do .


        ### run by (npm run test)



        #### you can test my work by url (http://localhost:3000/api/file/?fileName=santamonica.jpg&height=150&width=150)