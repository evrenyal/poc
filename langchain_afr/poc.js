import express from 'express';
import { PlaywrightWebBaseLoader } from "@langchain/community/document_loaders/web/playwright";

const app = express();
const PORT = 9000;

app.get('/', async (req, res) => {
    const url = req.query.url;

    if (!url) {
        return res.status(400).send('URL query parameter is required');
    }

    try {
        const loader = new PlaywrightWebBaseLoader(url);
        const docs = await loader.load();
        
        console.log(docs);
        res.send(docs);

    } catch (error) {
        console.error(error);
        res.status(500).send('An error occurred');
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
