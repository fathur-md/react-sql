import { useEffect, useState } from "react";

interface Mhs {
  mhs_id?: number;
  nama: string;
  nim: string;
  prodi: string;
  notelp: string;
}

interface Props {
  onEdit?: (m: Mhs) => void;
}

export const MhsList = () => {
  const [mahasiswa, setMahasiswa] = useState<Mhs[]>([]);

  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/mahasiswa");
    const data = await res.json();
    setMahasiswa(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="w-full space-y-4">
      <h2 className="border-b border-gray-300 pb-2 text-xl font-semibold">
        📊 Daftar Mahasiswa
      </h2>
      <table className="table-auto">
        <thead>
          <tr>
            <th>NIM</th>
            <th>Nama</th>
            <th>Prodi</th>
            <th>No Telp</th>
          </tr>
        </thead>
        <tbody>
          {mahasiswa.map((mhs) => (
            <tr key={mhs.mhs_id}>
              <td>{mhs.nim}</td>
              <td>{mhs.nama}</td>
              <td>{mhs.prodi}</td>
              <td>{mhs.notelp}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
