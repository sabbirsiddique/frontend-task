import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="snap-mandatory">
        
        <div className="bg-[#FFFFFF] flex gap-4 scroll-ml-6">
          {/* for incomplete card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
                <div className="bg-red-600 border-1 h-5 w-5 rounded-l-lg"></div>
                <div>
                  <p className="ml-2 font-bold">Incomplete</p>
                </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>

          {/* for todo card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
                <div className="bg-blue-400 border-1 h-5 w-5 rounded-l-lg"></div>
                <div>
                  <p className="ml-2 font-bold">To Do</p>
                </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>

          {/* for doing card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between">
              <div className="flex justify-between items-center">
                <div className="bg-yellow-400 border-1 h-5 w-5 rounded-l-lg"></div>
                <div>
                  <p className="ml-2 font-bold">Doing</p>
                </div>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>

          {/* for underReview card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2 font-bold">Under Review</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>

          {/* for completed card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2 font-bold">Completed</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>

          {/* for overdoing card */}
          <div className="bg-[#F2F4F7] max-h-[800px] overflow-y-auto">
            <div className="flex p-5 justify-between items-center">
              <div>
                <p className="ml-2 font-bold">Overdoing</p>
              </div>
              <div className="ml-[100px]">
                <p className="bg-blue-50 p-2">0</p>
              </div>
            </div>
            <Card></Card>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
