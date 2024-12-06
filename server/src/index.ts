import { app } from './app'
import dotenv from "dotenv";
import { connectDB } from './utils';

const PORT = process.env.PORT || 3000;
dotenv.config();


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
