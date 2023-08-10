import express from "express"
// import dotenv from "dotenv"
// dotenv.config()

const app = express()
app.use(express.json())

let travelPlans = []

app.get("/health", (req, res) => {
    res.send("deu bom!")
})

app.post("/travel-plans", (req, res) => {
    const { travel_stops } = req.body

    travelPlans.push({ id: travelPlans.length + 1, travel_stops })

    res.status(201).send({travelPlans})
})

app.get("/travel-plans", (req, res) => {
    res.send({travelPlans})
}) 

const port = process.env.PORT || 5000

app.listen(port, () => console.log(`server is running in port ${port}`))