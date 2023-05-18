import { useState, useEffect } from "react";

function DataTable() {
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    // Simulación de obtención de datos desde una API
    const fetchData = async () => {
      // Aquí se puede realizar una solicitud HTTP o cargar datos desde otro origen
      const response = await fetch("https://api.example.com/data");
      const result = await response.json();
      setData(result);
      setSortedData(result);
    };

    fetchData();
  }, []);

  const handleSort = (columnName) => {
    const sorted = [...sortedData].sort((a, b) => {
      if (a[columnName] < b[columnName]) return -1;
      if (a[columnName] > b[columnName]) return 1;
      return 0;
    });
    setSortedData(sorted);
  };

  const handleFilter = (e) => {
    const keyword = e.target.value.toLowerCase();
    setFilter(keyword);
    const filtered = data.filter((item) => {
      return (
        item.name.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword) ||
        item.phone.toLowerCase().includes(keyword)
      );
    });
    setSortedData(filtered);
  };

  return (
    <div>
      <h1>Tabla de Datos</h1>
      <input type="text" placeholder="Filtrar" onChange={handleFilter} />
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>Nombre</th>
            <th onClick={() => handleSort("email")}>Email</th>
            <th onClick={() => handleSort("phone")}>Teléfono</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataTable;
