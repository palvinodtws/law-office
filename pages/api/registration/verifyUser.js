import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const { data } = req.body;
      console.log(data, "data is here");

      var config = {
        method: "post",
        url: "http://192.168.1.95:4001/api/v1/auth/checkverification",
        data:{email:data},
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      res.status(500).json({ Error: err });
    }
  }
}
