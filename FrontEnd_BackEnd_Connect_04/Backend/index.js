const express = require('express');
const app = express();
const port = process.env.PORT || 4000;


app.get('/' , (req , res) => {
    res.send('get exicuted successfully !');
})

app.get(`/api/jokes` , (req , res) => {
    const jokes = [
        {
            id: 1,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 2,
            joke: "Why did the scarecrow win an award? Because he was outstanding in his field."
        },
        {
            id: 3,
            joke: "my name is xyz." 
        },    
    ]
    res.send(jokes);
});

app.listen(port , () => {
    console.log(`Server is running at port ${port}`);
}) ;