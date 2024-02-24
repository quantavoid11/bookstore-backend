import express from 'express';
import connectDB from "./config/db.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();
const PORT = process.env.PORT || 3000;


connectDB()
    .then(()=>{
        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    })
    .catch(error=>console.log(error))
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/books', bookRoutes);


