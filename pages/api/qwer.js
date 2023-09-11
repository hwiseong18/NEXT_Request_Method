export default function Handler(req,res) {
  let data = '';
  if(req.method === 'GET')
    data = req.query;
  else if(req.method === 'POST')
    data = req.body;
  else if(req.method === 'PUT')
    data = JSON.parse(req.body);
  data.name += '***'
  data.age += '^^^'
  console.log(`qwerdl ${req.method}(으)로  ${data.name}을 받음`)
  return res.status(200).json(JSON.stringify(data))
}