import { useEffect, useState } from "react";

function App() {
  const [legends, setLegends] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/api/legends")
      .then(res => res.json())
      .then(data => {
        setLegends(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const addLegend = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const url = e.target.url.value;

    fetch("http://localhost:4000/api/legends", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, url })
    })
      .then(res => res.json())
      .then(newLegend => {
        setLegends([...legends, newLegend]);
        e.target.reset();
      })
      .catch(console.error);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h1>Legends</h1>

      {loading && <p>Loading...</p>}

      {!loading && legends.map(l => (
        <div key={l.id} style={{ marginBottom: "10px" }}>
          <strong>{l.name}</strong>
          <div>{l.url}</div>
        </div>
      ))}

      <hr />

      <h2>Add Legend</h2>

      <form onSubmit={addLegend}>
        <input name="name" placeholder="Name" required />
        <br />
        <input name="url" placeholder="URL" required />
        <br />
        <button>Add</button>
      </form>
    </div>
  );
}

export default App;
