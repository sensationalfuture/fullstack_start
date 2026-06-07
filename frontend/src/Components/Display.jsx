import '../App.css';

function Calc_display({ value }) {
    return (
      <>
        <text className="text-green-500 font-light box-border rounded border-2 border-bs-gray-700 p-3 mb-4 text-right text-xl ">
          {value}
        </text>
      </>
    );
}
 
export default Calc_display;