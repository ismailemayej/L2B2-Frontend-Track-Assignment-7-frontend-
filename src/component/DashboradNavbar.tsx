import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
const user = "i";
const DashboradNavbar = () => {
  return (
    <Disclosure as="nav" className="bg-gray-800">
      <>
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center">
                <Link to="/">
                  <img
                    className="h-8 w-auto"
                    src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                    alt="Your Company"
                  />
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {user && (
                    <Link
                      to="/dashboard"
                      className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                  )}

                  <Link
                    to="/relief-goods"
                    className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
                  >
                    All relif Goods
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5" />
                <span className="sr-only">View notifications</span>
              </button>

              {/* Profile dropdown */}
              <Menu as="div" className="relative ml-3">
                <div>
                  <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    {user ? (
                      <div>
                        <button className="font-semibold text-slate-300">
                          Logout
                        </button>
                      </div>
                    ) : (
                      <div className="hover:bg-slate-700 hover:w-full hover:px-4 px-4 hover:rounded-xl hover:py-2">
                        <Link className=" text-white" to="/login">
                          Login or Register
                        </Link>
                      </div>
                    )}
                  </Menu.Button>
                </div>
                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                ></Transition>
              </Menu>
            </div>
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {user && (
              <Link
                to="/dashboard"
                className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium"
              >
                Dashboard
              </Link>
            )}

            <Link
              to="/relief-goods"
              className="block text-gray-300 rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            >
              All relif Goods
            </Link>
          </div>
        </Disclosure.Panel>
      </>
    </Disclosure>
  );
};

export default DashboradNavbar;