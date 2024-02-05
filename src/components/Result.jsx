import pika from "../assets/pika.gif";
import Step3 from "../components/Step3";

export default function Result()
{
    return(
        <>
        <Step3/>
        <h1 className="text-3xl mx-auto p-10 text-center">กดปุ่ม F12 เพื่อดูผลลัพธ์</h1>
        <img src={pika} alt="" className="w-2/5 h-1/6 ml-96"/>
        </>
    );
}