import { MapPin } from "lucide-react";
import { useContext } from "react";
import { Context } from "./App.jsx";

export default function Provinces() {
  const { provinces, selectedProvinces, toggleProvince } =
    useContext(Context).provincesControls;
  return (
    <>
      <div className="md:basis-1/2 flex-1 min-w-0 border border-gray-300 rounded p-3 text-left">
        <MapPin className="inline w-4 h-4 mr-2" />
        <span className="text-sm font-medium mb-2">
          Choose the convenient province(s):
        </span>
        <div className="space-y-1 text-sm">
          {provinces.map((province, idx) => {
            const id = `province-${idx}`;
            const checked = selectedProvinces.has(province);
            return (
              <div key={province} className="flex items-center gap-2">
                <input
                  id={id}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  checked={checked}
                  onChange={() => toggleProvince(province)}
                />
                <label htmlFor={id} className="select-none">
                  {province}
                </label>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
