import { context } from "../../common/context"

export default function handler(req, res) {
  context.connect( err => {
      context.db("Geral").collection("Teste")
      .find()
      .toArray()
      .then(data => res.status(200).json({model: data, success: true}))
      .catch((err) => res.status(400).json({model: err, success: false}))
      .finally(() => context.close())
  })
}
