import Steps from "./Steps";
import "./TableDataSetting.css";

export default function TableDataSetting() {
  return (
    <div>
      <Steps />
      <div className="TablaData">
        <form action="" method="post">
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
                  <input type="number" name="d1-1" id="d1-1" value={52000} />
                </td>
                <td>
                  <input type="number" name="d1-2" id="d1-2" value={39000} />
                </td>
                <td>
                  <input type="number" name="d1-3" id="d1-3" value={44000} />
                </td>
                <td>
                  <input type="number" name="d1-4" id="d1-4" value={48000} />
                </td>
              </tr>
              <tr>
                <td className="px-10">Angular</td>
                <td>
                  <input type="number" name="d2-1" id="d2-1" value={78000} />
                </td>
                <td>
                  <input type="number" name="d2-2" id="d2-2" value={65000} />
                </td>
                <td>
                  <input type="number" name="d2-3" id="d2-3" value={64000} />
                </td>
                <td>
                  <input type="number" name="d2-4" id="d2-4" value={52000} />
                </td>
              </tr>
              <tr>
                <td className="px-10">Vue</td>
                <td>
                  <input type="number" name="d3-1" id="d3-1" value={59000} />
                </td>
                <td>
                  <input type="number" name="d3-2" id="d3-2" value={32000} />
                </td>
                <td>
                  <input type="number" name="d3-3" id="d3-3" value={45000} />
                </td>
                <td>
                  <input type="number" name="d3-4" id="d3-4" value={38000} />
                </td>
              </tr>
              <tr>
                <td className="px-10">Spring Boot</td>
                <td>
                  <input type="number" name="d4-1" id="d4-1" value={56000} />
                </td>
                <td>
                  <input type="number" name="d4-2" id="d4-2" value={58000} />
                </td>
                <td>
                  <input type="number" name="d4-3" id="d4-3" value={34000} />
                </td>
                <td>
                  <input type="number" name="d4-4" id="d4-4" value={49000} />
                </td>
              </tr>
              <tr>
                <td className="px-10">Larlavel</td>
                <td>
                  <input type="number" name="d5-1" id="d5-1" value={61000} />
                </td>
                <td>
                  <input type="number" name="d5-2" id="d5-2" value={25000} />
                </td>
                <td>
                  <input type="number" name="d5-3" id="d5-3" value={39000} />
                </td>
                <td>
                  <input type="number" name="d5-4" id="d5-4" value={44000} />
                </td>
              </tr>
              <tr>
                <td className="px-10">Django</td>
                <td>
                  <input type="number" name="d6-1" id="d6-1" value={67000} />
                </td>
                <td>
                  <input type="number" name="d6-2" id="d6-2" value={39000} />
                </td>
                <td>
                  <input type="number" name="d6-3" id="d6-3" value={45000} />
                </td>
                <td>
                  <input type="number" name="d6-4" id="d6-4" value={57000} />
                </td>
              </tr>
            </th>
          </table>
          <div id="Submit" className="flex justify-end mr-30 p-10 ">
            <button disabled className="bg-amber-500 rounded-md p-3">
              {" "}
              สุ่มข้อมูล 🎲
            </button>
            <input
              className=" text-white bg-green-600 rounded-md p-3 ml-3 mr-20"
              type="submit"
              value={" ถัดไป ➡️"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
