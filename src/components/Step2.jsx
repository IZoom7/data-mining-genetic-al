export default function Step2(props) {

    return (
      <div>
        <div className="pt-10">
          <div className="mx-auto max-w-7xl">
            Steps
            <div className="p-6 w-full overflow-hidden rounded-lg ring-1 ring-slate-400 bg-slate-100 mt-4">
              <nav aria-label="Progress">
                <ol
                  role="list"
                  className="space-y-4 md:flex md:space-y-0 md:space-x-8"
                >
                  <li className="md:flex-1">
                    <a
                      href="#"
                      className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                    >
                      <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                        Step 1
                      </span>
                      <span className="text-sm font-medium">สร้างข้อมูล</span>
                    </a>
                  </li>
  
                  <li className="md:flex-1">
                    <a
                      href="#"
                      className="group flex flex-col border-l-4 border-indigo-600 py-2 pl-4 hover:border-indigo-800 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                    >
                      <span className="text-sm font-medium text-indigo-600 group-hover:text-indigo-800">
                        Step 2
                      </span>
                      <span className="text-sm font-medium">
                      กำหนดค่าคงที่
                      </span>
                    </a>
                  </li>
  
                  <li className="md:flex-1">
                    <a
                      href="#"
                      className="group flex flex-col border-l-4 border-gray-200 py-2 pl-4 hover:border-gray-300 md:border-l-0 md:border-t-4 md:pl-0 md:pt-4 md:pb-0"
                    >
                      <span className="text-sm font-medium text-gray-500 group-hover:text-gray-700">
                        Step 3
                      </span>
                      <span className="text-sm font-medium">แสดงผลลัพธ์</span>
                    </a>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
  