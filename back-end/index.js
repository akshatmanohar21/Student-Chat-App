const express = require("express");
const cors = require("cors");
const axios = require("axios").default;

const app = express();
const PORT = process.env.PORT || 3001; 

app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "private-key": "d64e4c06-e561-4e14-919e-052e503905f7" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    console.error("Error:", e.message);

    if (e.response) {
      return res.status(e.response.status).json(e.response.data);
    } else if (e.request) {

      return res.status(500).json({
        message: "No response received from server",
        details: e.message,
      });
    } else {
      return res
        .status(500)
        .json({ message: "Unexpected error", details: e.message });
    }
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
