import Steps from "./Steps";
import "./TableDataSetting.css";
import React, { useState } from "react";
import Swal from "sweetalert2";

export default function TableDataSetting() {
  const [formData, setFormData] = useState({
    d1_1: 52000,
    d1_2: 39000,
    d1_3: 44000,
    d1_4: 48000,

    d2_1: 78000,
    d2_2: 65000,
    d2_3: 64000,
    d2_4: 52000,

    d3_1: 59000,
    d3_2: 32000,
    d3_3: 45000,
    d3_4: 38000,

    d4_1: 56000,
    d4_2: 58000,
    d4_3: 34000,
    d4_4: 49000,

    d5_1: 61000,
    d5_2: 25000,
    d5_3: 39000,
    d5_4: 44000,

    d6_1: 67000,
    d6_2: 39000,
    d6_3: 45000,
    d6_4: 57000,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // ทำสิ่งที่คุณต้องการเมื่อฟอร์มถูก submit
    const DataArray = [
      [formData.d1_1, formData.d1_2, formData.d1_3, formData.d1_4],
      [formData.d2_1, formData.d2_2, formData.d2_3, formData.d2_4],
      [formData.d3_1, formData.d3_2, formData.d3_3, formData.d3_4],
      [formData.d4_1, formData.d4_2, formData.d4_3, formData.d4_4],
      [formData.d5_1, formData.d5_2, formData.d5_3, formData.d5_4],
      [formData.d6_1, formData.d6_2, formData.d6_3, formData.d6_4],
    ];

    console.log("ค่าจากอาเรย์:", DataArray);
    

    Swal.fire({
      title: "บันทึกข้อมูลสำเร็จ!",
      //text: "สามารถตรวจสอบใน console ได้เลยจ้า",
      icon: "success",
      confirmButtonText: '<a href="/Calculate">ถัดไป</a>',
      allowOutsideClick: false,
    })
  };

  return (
    <div>
      <Steps />
      <div className="TablaData">
        <form onSubmit={handleSubmit}>
          <table className="bg-slate-100 m-auto">
            <th className="text-center">
              อัตราเงินเดือนที่บริษัทจ้างโปรแกรมเมอร์ที่ใช้เฟรมเวิร์คและฐานข้อมูลที่แตกต่างกัน
              <tr>
                <th className="bg-black text-lime-400 text-sm">
                  เฟรมเวิร์ค/ฐานข้อมูล
                </th>
                <th>Oracle</th>
                <th>MySQL</th>
                <th>MongoDB</th>
                <th>PostgreSQL</th>
              </tr>
              <tr>
                <td className="px-10">React/NodeJS</td>
                <td>
                  <input
                    type="number"
                    name="d1_1"
                    id="d1-1"
                    value={formData.d1_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d1_2"
                    id="d1-2"
                    value={formData.d1_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d1_3"
                    id="d1-3"
                    value={formData.d1_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d1_4"
                    id="d1-4"
                    value={formData.d1_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-10">Angular</td>
                <td>
                  <input
                    type="number"
                    name="d2_1"
                    id="d2-1"
                    value={formData.d2_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d2_2"
                    id="d2-2"
                    value={formData.d2_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d2_3"
                    id="d2-3"
                    value={formData.d2_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d2_4"
                    id="d2-4"
                    value={formData.d2_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-10">Vue</td>
                <td>
                  <input
                    type="number"
                    name="d3_1"
                    id="d3-1"
                    value={formData.d3_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d3_2"
                    id="d3-2"
                    value={formData.d3_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d3_3"
                    id="d3-3"
                    value={formData.d3_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d3_4"
                    id="d3-4"
                    value={formData.d3_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-10">Spring Boot</td>
                <td>
                  <input
                    type="number"
                    name="d4_1"
                    id="d4-1"
                    value={formData.d4_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d4_2"
                    id="d4-2"
                    value={formData.d4_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d4_3"
                    id="d4-3"
                    value={formData.d4_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d4_4"
                    id="d4-4"
                    value={formData.d4_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-10">Larlavel</td>
                <td>
                  <input
                    type="number"
                    name="d5_1"
                    id="d5-1"
                    value={formData.d5_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d5_2"
                    id="d5-2"
                    value={formData.d5_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d5_3"
                    id="d5-3"
                    value={formData.d5_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d5_4"
                    id="d5-4"
                    value={formData.d5_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
              <tr>
                <td className="px-10">Django</td>
                <td>
                  <input
                    type="number"
                    name="d6_1"
                    id="d6-1"
                    value={formData.d6_1}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d6_2"
                    id="d6-2"
                    value={formData.d6_2}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d6_3"
                    id="d6-3"
                    value={formData.d6_3}
                    onChange={handleInputChange}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    name="d6_4"
                    id="d6-4"
                    value={formData.d6_4}
                    onChange={handleInputChange}
                  />
                </td>
              </tr>
            </th>
          </table>
          <div className="flex justify-end mr-30 p-10 ">
            <button disabled className="bg-slate-400 rounded-md p-3 text-white">
              สุ่มข้อมูล 🎲
            </button>
            <input
              type="submit"
              value="บันทึกข้อมูล 💾"
              className="text-white bg-green-600 rounded-md p-3 ml-3 mr-20"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
