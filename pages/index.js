import { useEffect, useState } from "react"

async function findAll() {
  const response = await fetch('http://localhost:3000/api/findAll');
  return await response.json();
}

async function add(model) {
  const response = await fetch('http://localhost:3000/api/add', {
    method: "POST",
    body: JSON.stringify(model),
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
  });
  return await response.json();
}

export default function Home() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState(null)

  useEffect(() => {
    findAll().then(data => setList(data.model));
  }, [])

  return (
    <div className="w-screen mx-[10vw] mt-5">
      <div className="flex items-center space-x-5">
        <h1 className="text-3xl font-semibold">Lista de itens</h1>
        <input value={item.name} onChange={(e) => setItem({name: e.target.value})} type="text" className="border-2 rounded-md p-1 px-3" />
        <button 
        onClick={() => add(item).then( resp => {
          if(resp.success) {
            setItem("");
            findAll().then(data => setList(data.model));
          }
        }
        )} className="bg-blue-500 hover:bg-blue-400 active:bg-blue-600 rounded-md py-1 px-3 text-white font-semibold">Add</button>
      </div>
      {list.length > 0 ? list.map((v,k) => {
        return (
          <p key={k}>- {v?.name}</p>
        )
      })
      :
      <p>- Nenhum item</p>
      }
    </div>
  )
}
