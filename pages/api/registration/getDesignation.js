import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // const { token } = req.body;
      //   const { data } = req.body;

      var config = {
        method: "post",
        url: "http://192.168.1.95:4001/api/v1/auth/getdesignation",
        // headers: {
        //   Authorization: `Bearer ${token}`,
        // },
        // data: { requesterId: data },
      };
      await axios(config).then(function (response) {
        res.status(200).json({ data: response.data });
      });
    } catch (err) {
      res.status(500).json({ Error: err });
    }
  }
}
