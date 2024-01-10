import { FaLayerGroup } from "react-icons/fa6";
const Todo = () => {
  return (
    <div>
      <div className="flex gap-10 p-2">
        <div className="flex items-center">
          <img src="https://i.ibb.co/jZN85mT/sabbir.png" className="h-10 w-10 rounded-full mr-1" />
          <p>Client Names</p>
        </div>
        <div className="flex items-center">
          <img src="https://i.ibb.co/16Sc347/deliveryman4.png" className="h-10 w-10 rounded-full mr-1" />
          <p>Sadik Istiak</p>
        </div>
      </div>
      <div>
        <div>
            <FaLayerGroup></FaLayerGroup>
        </div>
      </div>
    </div>
  );
};

export default Todo;
