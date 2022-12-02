import 'tw-elements';

function NavBar() {
  return (
    <div className='NavBar flex flex-row justify-between items-center'>
      <h1 className='text-7xl font-nerko-one text-purple ml-4 mt-4'>TO DO </h1>
      <div>
        <div class='flex justify-center'>
          <div>
            <div class='dropdown relative mr-10'>
              <button
                class='
          dropdown-toggle
          px-6
          py-2.5
          bg-transparent
          text-purple
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:shadow-lg
          focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-pink-300 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-end
          whitespace-nowrap
        '
                type='button'
                id='dropdownMenuButton1'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                DISPLAY
                <svg
                  aria-hidden='true'
                  focusable='false'
                  data-prefix='fas'
                  data-icon='caret-down'
                  class='w-2 ml-2'
                  role='img'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 320 512'
                >
                  <path
                    fill='currentColor'
                    d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'
                  ></path>
                </svg>
              </button>
              <ul
                class='
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          m-0
          bg-clip-padding
          border-none
        '
                aria-labelledby='dropdownMenuButton1'
              >
                <li>
                  <a
                    class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                    href='#List'
                  >
                    List
                  </a>
                </li>
                <li>
                  <a
                    class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                    href='#cards'
                  >
                    Cards
                  </a>
                </li>
                <li>
                  <a
                    class='
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            '
                    href='#random'
                  >
                    Random Task
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div> 
     

    </div>
  );
}

export default NavBar;
