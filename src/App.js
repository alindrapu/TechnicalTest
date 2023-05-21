import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

function MahasiswaPenilaian() {
  const [penilaianData, setPenilaianData] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });
  const [showDownloadButton, setShowDownloadButton] = useState(false);

  const handlePenilaianChange = (index, aspek, nilai) => {
    setPenilaianData((prevData) => {
      const newData = { ...prevData };
      newData[aspek] = { ...newData[aspek], [`mahasiswa_${index + 1}`]: nilai };
      return newData;
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const jsonData = JSON.stringify(penilaianData);
    console.log(jsonData);
    setShowDownloadButton(true);
  };

  const handleDownloadJson = () => {
    const jsonData = JSON.stringify(penilaianData);
    const element = document.createElement("a");
    const file = new Blob([jsonData], { type: "application/json" });
    element.href = URL.createObjectURL(file);
    element.download = "penilaian.json";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const renderMahasiswaRows = () => {
    return [...Array(10)].map((_, index) => (
      <tr key={index}>
        <td>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              className="rounded-circle"
              style={{ width: 35 }}
              alt="Avatar"
            />
            <span className="px-2">Mahasiswa {index + 1}</span>
          </div>
        </td>
        <td>
          <select
            onChange={(e) =>
              handlePenilaianChange(
                index,
                "aspek_penilaian_1",
                parseInt(e.target.value)
              )
            }
            className="form-control"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </td>
        <td>
          <select
            onChange={(e) =>
              handlePenilaianChange(
                index,
                "aspek_penilaian_2",
                parseInt(e.target.value)
              )
            }
            className="form-control"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </td>
        <td>
          <select
            onChange={(e) =>
              handlePenilaianChange(
                index,
                "aspek_penilaian_3",
                parseInt(e.target.value)
              )
            }
            className="form-control"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </td>
        <td>
          <select
            onChange={(e) =>
              handlePenilaianChange(
                index,
                "aspek_penilaian_4",
                parseInt(e.target.value)
              )
            }
            className="form-control"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </td>
      </tr>
    ));
  };

  return (
    <div className="container py-4">
      <h1 className="text-center text-bold">Aspek Penilaian Mahasiswa</h1>
      <form onSubmit={handleFormSubmit}>
        <Table striped bordered hover variant="light">
          <thead>
            <tr className="text-center">
              <th></th>
              <th>Aspek Penilaian 1</th>
              <th>Aspek Penilaian 2</th>
              <th>Aspek Penilaian 3</th>
              <th>Aspek Penilaian 4</th>
            </tr>
          </thead>
          <tbody>{renderMahasiswaRows()}</tbody>
        </Table>
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <Button className="mr-3" type="submit" variant="dark">
            Simpan
          </Button>
          {showDownloadButton && (
            <Button variant="success" onClick={handleDownloadJson}>
              Download JSON
            </Button>
          )}
        </div>
      </form>
      <div style={{ textAlign: "center", marginTop: "1rem" }}>
        <a
          href="https://github.com/alindrapu/TechnicalTest"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default MahasiswaPenilaian;
