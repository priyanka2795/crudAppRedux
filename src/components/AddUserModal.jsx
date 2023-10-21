
import React  from "react";
import { AiOutlineClose } from "react-icons/ai";

const AddUserModal = React.memo(({
  OpenModal,
  SetOpenModal,
  InputData,
  SetInputData,
  OnSubmit,
  DataEdit,
  SetDataEdit,
  AddEditItems,
  Error,
  SetError,
}) => {
  return (
    <>
      {OpenModal ? (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-full max-w-xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-[#F0E7DC] dark:bg-[#202023] border-0 rounded-lg shadow-xl outline-none focus:outline-none">
                <div className="flex items-center justify-between p-5 rounded-t">
                  <h3 className="text-2xl font-semibold">Create User </h3>
                  <button
                    className="text-xl font-semibold leading-none outline-none "
                    onClick={() => (SetOpenModal(false), SetError(null))}
                  >
                    <AiOutlineClose />
                  </button>
                </div>

                <div className="relative flex-auto p-6">
                  <div>
                    <label htmlFor="firstname" className="font-bold">
                      First Name
                    </label>
                    <input
                      className=""
                      type="text"
                      placeholder="First Name"
                      id="firstname"
                      value={InputData.name}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          name: e.target.value,
                        })
                      }
                    />
                    {Error && <div className="text-red-500">{Error.name}</div>}
                  </div>
                  <div className="mt-3">
                    <label htmlFor="phonenumber" className="font-bold">
                      Phone Number
                    </label>
                    <input
                      className=""
                      type="number"
                      placeholder="Phone Number"
                      id="phonenumber"
                      value={InputData.phonenumber}
                      onChange={(e) =>
                        SetInputData({
                          ...InputData,
                          phonenumber: e.target.value,
                        })
                      }
                    />
                    {Error && (
                      <div className="text-red-500">{Error.phonenumber}</div>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-end p-6 ">
                  <button
                    className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                    type="button"
                    onClick={() => (SetOpenModal(false), SetError(null))}
                  >
                    Close
                  </button>
                  {DataEdit ? (
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-[#349795] active:bg-[#349795] hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={() => AddEditItems()}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-[#349795] active:bg-[#349795] hover:shadow-lg focus:outline-none"
                      type="button"
                      onClick={OnSubmit}
                    >
                      Add
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
});

export default AddUserModal;
