import "./App.css";
import Incomplete from "./components/Incomplete";

function App() {
  return (
    <>
      <div>
        <div className="bg-[#FFFFFF] flex gap-4">
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
                <div className="bg-red-600 border-1 h-5 w-5 rounded-l-lg"></div>
                <div>
                  <p className="ml-2">Incomplete</p>
                </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Incomplete></Incomplete>
          </div>
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
              <div className="bg-blue-400 border-1 h-5 w-5 rounded-l-lg"></div>
              <div>
                <p className="ml-2">To Do</p>
              </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
              <div className="bg-yellow-400 border-1 h-5 w-5 rounded-l-lg"></div>
              <div>
                <p className="ml-2">Doing</p>
              </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2">Under Review</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2">Completed</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
          </div>
          <div className="bg-[#F2F4F7]">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2">Overdoing</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
