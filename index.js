const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! phùng mạnh hiếu')
})

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })
// câu lệnh này dùng thì phải lên trình duyệt gõ localhost:3000 mới chạy được nên sẽ update câu khác dễ dùng hơn

app.listen(port, () => console.log(`Trang của bạn chạy theo địa chỉ này http://localhost:${port}`))