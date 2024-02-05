import Step2 from "./Step2";
import Swal from "sweetalert2";

export default function Calculate() {
  const handleSubmit = (e) => {
    e.preventDefault();

    // ทำสิ่งที่คุณต้องการเมื่อฟอร์มถูก submi

    let timerInterval;
    Swal.fire({
      title: "กำลังประมวลผล...",
      html: "อาจใช้เวลา กรุณารอสักครู่",
      timer: 20000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 1000); // เปลี่ยนจาก 100 เป็น 1000 เพื่อให้นับเวลาทุก 1 วินาที
      },
      willClose: () => {
        clearInterval(timerInterval);
      },
      showCancelButton: true, // แสดงปุ่มยกเลิก
      confirmButtonText: 'OK',
      cancelButtonText: 'Cancel',
    }).then((result) => {
      if (result.isConfirmed) {
        // ทำตามคำสั่งที่ต้องการเมื่อกด OK
        alert('คุณกด OK');
      } else if (result.dismiss === Swal.DismissReason.timer) {
        // ทำตามคำสั่งที่ต้องการเมื่อ SweetAlert ถูกปิดโดยตัวจับเวลา
    
        // แสดง Alert ใหม่ที่มีปุ่ม Confirm
        Swal.fire({
          title: 'ประมวลผลสำเร็จ',
          text: 'ผลลัพธ์จะถูกแสดงผลใน Console',
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: '<a href="/Result">OK</a>',
          allowOutsideClick: false,
        }).then((result) => {
          // หากผู้ใช้กด Confirm
          if (result.isConfirmed) {
            // ทำตามคำสั่งที่ต้องการ
            //alert('คุณกด Confirm');
          }
        });
      } else {
        // ทำตามคำสั่งที่ต้องการเมื่อกด Cancel หรือปุ่มอื่น ๆ
        console.log("I was closed by other reason");
      }
    });
  };

  return (
    <div>
      <Step2 />
      <div className="my-10 p-10 bg-white border border-gray-400 w-2/6 m-auto rounded-md">
        <form onSubmit={handleSubmit}>
          Population Size :
          <input className="my-3 ml-5" type="number" name="POPULATION_SIZE" />
          <br />
          Max Generation :
          <input className="my-3 ml-5" type="number" name="MAX_GENERATIONS" />
          <br />
          Mutation Rate :
          <input className="my-3 ml-7" type="number" name="MUTATION_RATE" />
          <br />
          <input
            type="submit"
            value="เริ่มการคำนวณ 🔣"
            className="text-white bg-green-600 rounded-md p-3 ml-3 mr-20 mt-8"
          />
        </form>
      </div>
    </div>
  );
}
